import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import React from "react";
import styled from "styled-components";
import { useSignMessage, useAccount, useProvider } from "wagmi";
import { ethers } from "ethers";
import validator from "validator";

const serverUrl = process.env.REACT_APP_API_URL;

const Createtext = styled.div`
  color: ${({ theme }) => theme.text};
`;

const Inputbase = styled.input`
  padding: 13px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.textSoft};
  width: 94%;
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  background: transparent;
`;
const Cover = styled.div`
  background: ${({ theme }) => theme.bg};
  padding: 2rem;
  border-radius: 12px;
`;

const Connectbtn = styled.button`
  cursor: pointer;
  background: ${({ theme }) => theme.iconcr};
  border: 1px solid ${({ theme }) => theme.bg};
  padding: 14px 20px;
  border-radius: 5px;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  transition: 0.5s;
  &:hover {
    background: ${({ theme }) => theme.bgitems};
    color: ${({ theme }) => theme.text};
  }
`;
const Uploadtext = styled.div`
  background: ${({ theme }) => theme.bgitems};
  padding: 1rem 10px;
  border-radius: 12px;
`;

async function getUser(setProfile, walletAddress) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    walletAddress: walletAddress,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const data = await fetch(serverUrl + "/users/getUser", requestOptions).then(
    (response) => response.json()
  );
  if (data.code) {
    const { firstName, userName, emailAddress } = data.message;
    setProfile({
      walletAddress,
      firstName,
      userName,
      emailAddress,
    });
  } else {
    setProfile({
      walletAddress,
      firstName: "Fetching... Not Found",
      userName: "Fetching... Not Found",
      emailAddress: "Fetching... Not Found",
    });
  }
}

async function updateUser(signature, message) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    signature: signature,
    message: message,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch(serverUrl + "/users/updateUser", requestOptions).then(
    (response) => response.json()
  );
}

function reintializeInputs(input, setInput) {
  setInput({
    ...input,
    firstName: "",
    userName: "",
    emailAddress: "",
  });
}

function setEmail(email, inputValue, setInputValue) {
  setInputValue({
    ...inputValue,
    emailAddress: {
      valid: validator.isEmail(email),
      value: email,
    },
  });
}

function setfirstName(firstName, inputValue, setInputValue) {
  setInputValue({
    ...inputValue,
    firstName: {
      valid: true,
      value: firstName,
    },
  });
}

function setUserName(userName, inputValue, setInputValue) {
  setInputValue({
    ...inputValue,
    userName: {
      valid: validator.isAlphanumeric(userName),
      value: userName,
    },
  });
}

function validateInputs(inputValue) {
  if (
    inputValue.userName.valid &&
    inputValue.userName.valid &&
    inputValue.emailAddress.valid
  ) {
    return true;
  }
  return false;
}

function getInputs(inputValue, profile) {
  return {
    firstName: inputValue.firstName.value? inputValue.firstName.value: profile.firstName,
    userName: inputValue.userName.value? inputValue.userName.value: profile.userName,
    emailAddress: inputValue.emailAddress.value? inputValue.emailAddress.value: profile.emailAddress,
    walletAddress: inputValue.walletAddress? inputValue.walletAddress: profile.walletAddress,
  };
}


const AccountUser = () => {
  const { address } = useAccount();

  const [profile, setProfile] = React.useState({
    firstName: "",
    userName: "",
    emailAddress: "",
    walletAddress: address,
  });

  const [inputValue, setInputValue] = React.useState({
    firstName: {
      valid: true,
      value: "",
    },
    userName: {
      valid: true,
      value: "",
    },
    emailAddress: {
      valid: true,
      value: "",
    },
    walletAddress: profile.walletAddress,
  });

  const { data, err, isLoading, signMessage } = useSignMessage({
    onSuccess(data, variables) {
      console.log(data, variables);
      updateUser(data, variables.message)
        .then((result) => {
          if (result.code) {
            getUser(setProfile, address);
            reintializeInputs(inputValue, setInputValue);
          } else {
            console.log("Not updated", result.message);
          }
        })
        .catch((err) => {
          console.log("server Error", err.message);
        });
    },
  });

  const profileImage = useSignMessage({
    onSuccess(data, variables){
        var formdata = new FormData();
        formdata.append("signature", data);
        formdata.append("avatar", variables.file);

        var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
        };

        fetch(serverUrl+ "/users/updateProfilePicture", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
  })


  React.useEffect(() => {
    getUser(setProfile, address);
  }, [address]);

  return (
    <div>
      <Box>
        <Container maxWidth="lg">
          <Grid container spacing={1}>
            <Grid item md={12} xs={12}>
              <Box textAlign="center">
                <Createtext>
                  <Typography variant="h3" gutterBottom component="h3">
                    User Profile
                  </Typography>
                </Createtext>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box paddingTop="2rem">
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item lg={4} md={4} xs={12}>
              <Box>
                <Cover>
                  <Box sx={{ textAlign: "center" }}>
                    <Typography
                      variant="h6"
                      textAlign="center"
                      fontWeight="500"
                      gutterBottom
                      component="h6"
                    >
                      {profile.firstName}
                    </Typography>
                    <Typography
                      variant="body2"
                      textAlign="center"
                      gutterBottom
                      component="body2"
                    >
                      {profile.userName}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      textAlign: "center",
                      margin: "auto",
                      paddingY: "1rem",
                    }}
                  >
                    <Avatar
                      src={serverUrl + "/users/getProfileImage?address="+ address + "&t="+ new Date().getTime()}
                      sx={{
                        width: "100px",
                        height: "100px",
                        textAlign: "center",
                        margin: "auto",
                      }}
                    />
                  </Box>
                  <Box sx={{ textAlign: "center" }}>
                        <Button
                        variant="contained"
                        component="label"
                        style={{ boxShadow: "none", background: "#f0b90b" }}
                        >
                        Upload New Photo
                        <input onChange={(e) => profileImage.signMessage({message: "uploadProfile", file: e.target.files[0]})} hidden accept="image/*" type="file" />
                        </Button>
                  </Box>
                  <Box sx={{ paddingY: "1rem" }}>
                    {/* <Uploadtext>
                                            <Typography variant='body2' textAlign='center'>
                                                Upload a new avtar. larger images will be resized automatically.
                                            </Typography>
                                            <Typography variant='body2' textAlign='center'>
                                                Maximum upload size is 1 MB.
                                            </Typography>
                                        </Uploadtext> */}
                  </Box>
                  <Box sx={{ paddingBottom: "1rem" }}>
                    {/* <Typography variant="body2" textAlign="center">
                      Member Since: <b>03 August 2022</b>
                    </Typography> */}
                  </Box>
                </Cover>
              </Box>
            </Grid>
            <Grid item lg={7} md={7} xs={12}>
              <Box>
                <Cover>
                  <Box marginBottom="10px">
                    <Typography variant="body" gutterBottom component="body">
                      Full Name
                    </Typography>
                    <Box>
                      <Inputbase
                        type="text"
                        style={{
                          borderColor: inputValue.firstName.valid ? "" : "red",
                        }}
                        value={inputValue.firstName.value}
                        onChange={(e) => {
                          setfirstName(
                            e.target.value,
                            inputValue,
                            setInputValue
                          );
                        }}
                        placeholder={profile.firstName}
                      />
                    </Box>
                  </Box>
                  <Box marginBottom="10px">
                    <Typography variant="body" gutterBottom component="body">
                      Username
                    </Typography>
                    <Box>
                      <Inputbase
                        style={{
                          borderColor: inputValue.userName.valid ? "" : "red",
                        }}
                        type="text"
                        value={inputValue.userName.value}
                        onChange={(e) => {
                          setUserName(
                            e.target.value,
                            inputValue,
                            setInputValue
                          );
                        }}
                        placeholder={profile.userName}
                      />
                    </Box>
                  </Box>
                  <Box marginBottom="10px">
                    <Typography variant="body" gutterBottom component="body">
                      Email Address
                    </Typography>
                    <Box>
                      <Inputbase
                        style={{
                          borderColor: inputValue.emailAddress.valid
                            ? ""
                            : "red",
                        }}
                        type="email"
                        value={inputValue.emailAddress.value}
                        onChange={(e) => {
                          setEmail(e.target.value, inputValue, setInputValue);
                        }}
                        placeholder={profile.emailAddress}
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Typography variant="body" gutterBottom component="body">
                      Wallet Address
                    </Typography>
                    <Box onClick={() => navigator.clipboard.writeText(profile.walletAddress)}>
                      <Inputbase
                        type="text"
                        disabled
                        placeholder={profile.walletAddress}
                        
                      />
                    </Box>
                    <Box marginY="1rem">
                      <Connectbtn
                        type="button"
                        disabled={isLoading}
                        onClick={() =>
                          validateInputs(inputValue)
                            ? signMessage({
                                message: JSON.stringify(getInputs(inputValue, profile)),
                              })
                            : ""
                        }
                      >
                        Update Info
                        {isLoading ? <LinearProgress variant="query" /> : ""}
                      </Connectbtn>
                    </Box>
                  </Box>
                </Cover>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default AccountUser;
