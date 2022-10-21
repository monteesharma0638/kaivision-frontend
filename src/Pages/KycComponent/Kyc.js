import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { useAccount, useSignMessage } from "wagmi";
import { sumbitForm } from "../../allfunction/FetchFunctions";
import KycForm from "./KycForm";

const Kycsmaindiv = styled.div`
  height: 100vh;
`;

const Kycbox = styled.div`
  background: ${({ theme }) => theme.bg};
  padding: 1.5rem 2rem;
  border-radius: 12px;
  height: 100%;
`;
const Kycheading = styled.div`
  color: ${({ theme }) => theme.iconcr};
`;
const Requred = styled.h6`
  color: skyblue;
  font-weight: 300;
  font-size: 15px;
  margin: 10px 0;
`;
const Requredproof = styled.span`
  color: ${({ theme }) => theme.textSoft};
  font-weight: 400;
  font-size: 14px;
  margin: 10px 0;
`;
const InputBase = styled.input`
  color: ${({ theme }) => theme.text};
  width: 100%;
  padding: 10px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
`;

const Fromstext = styled.div`
  color: ${({ theme }) => theme.text};
  font-weight: 300;
  margin-bottom: 7px;
`;
const Tyutton = styled.button`
  background: ${({ theme }) => theme.bgBtns};
  color: ${({ theme }) => theme.text};
  width: 100%;
  border: none;
  padding: 13px 10px;
  border-radius: 12px;
  cursor: pointer;
`;

const Kyc = () => {
    const { address } = useAccount();

    const { data, err, isLoading, signMessage } = useSignMessage({
        onSuccess(data, variables) {
          console.log(data, variables);
          sumbitForm({
            ...variables.message,
            logo: variables.logo,
            ownerAddress: address
          })
        },
      });

    const [value, setValue] = React.useState({
        tokenAddress: "",
        telegram: "",
        teamWalletAddress: "",
        email: "",
        twitter: "",
        repo: "",
        website: ""
    })

    const [logo, setLogo] = React.useState(0);


  function handleSubmit(e, value, logo, address) {
    e.preventDefault();
    signMessage({
        message: JSON.stringify(value),
        logo,
        ownerAddress: address
    })
  }

  return (
    <div>
      <Kycsmaindiv>
        <form onSubmit={e => handleSubmit(e, value, logo, address)}>
          <Container maxWidth="xl">
            <Grid container spacing={1}>
              <Grid item md={7} xs={12}>
                <Kycbox>
                  <Box>
                    <Kycheading>
                      <Typography variant="h5" fontWeight="400">
                        Fill Token Information
                      </Typography>
                    </Kycheading>
                    <Requred>
                      Info: Please switch to correct chain before proceed
                    </Requred>
                  </Box>
                  <KycForm value={value} setValue={setValue} />
                </Kycbox>
              </Grid>
              <Grid item md={5} xs={12}>
                <Kycbox>
                  <Box>
                    <Kycheading>
                      <Typography variant="h5" fontWeight="400">
                        Sumbit Details
                      </Typography>
                    </Kycheading>
                    {/* <Requred>
                        Upload Documents
                    </Requred> */}
                    <Requredproof>
                      Please review your details before sumbit the form
                    </Requredproof>
                    <Requredproof style={{ color: "red", display: "block" }}>
                      Note: Logo must be .png format
                    </Requredproof>
                  </Box>
                  <Box paddingTop="2rem">
                    <Box sx={{ width: "92%" }}>
                      <Fromstext>Upload Token Logo</Fromstext>
                      <InputBase
                        type="file"
                        name="logo"
                        placeholder="Type Number"
                        required
                        onChange={e => setLogo(e.target.files)}
                      />
                    </Box>
                    <Box width="100%">
                      <Tyutton type="submit" className="btn">Submit</Tyutton>
                    </Box>
                  </Box>
                </Kycbox>
              </Grid>
            </Grid>
          </Container>
        </form>
      </Kycsmaindiv>
    </div>
  );
};

export default Kyc;
