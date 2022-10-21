import { Box, Grid, InputLabel, TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";

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

const KycForm = ({value, setValue}) => {

  return (
    <Box paddingY="1rem">
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <Box sx={{ width: "92%" }}>
              <Fromstext>Token Address</Fromstext>
              <InputBase value={value.tokenAddress} onChange={e => setValue({...value, tokenAddress: e.target.value})} type="text" required placeholder="Token Address" />
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box sx={{ width: "92%" }}>
              <Fromstext>Telegram</Fromstext>
              <InputBase value={value.telegram} onChange={e => setValue({...value, telegram: e.target.value})} type="text" required placeholder="Telegram Link" />
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box sx={{ width: "92%" }}>
              <Fromstext>Team Wallet</Fromstext>
              <InputBase value={value.teamWalletAddress} onChange={e => setValue({...value, teamWalletAddress: e.target.value})} required type="text" placeholder="Team Wallet Address" />
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box sx={{ width: "92%" }}>
              <Fromstext>Email</Fromstext>
              <InputBase value={value.email} onChange={e => setValue({...value, email: e.target.value})} type="email" required placeholder="Email Address" />
            </Box>
          </Grid>
          <Grid item md={12} xs={12}>
            <Box sx={{ width: "96%" }}>
              <Fromstext>Twitter</Fromstext>
              <InputBase value={value.twitter} onChange={e => setValue({...value, twitter: e.target.value})} type="text" required placeholder="Twitter Link" />
            </Box>
          </Grid>
          <Grid item md={12} xs={12}>
            <Box sx={{ width: "96%" }}>
              <Fromstext>repo</Fromstext>
              <InputBase value={value.repo} onChange={e => setValue({...value, repo: e.target.value})} type="text" placeholder="github, gitlab etc." />
            </Box>
          </Grid>
          <Grid item md={12} xs={12}>
            <Box sx={{ width: "96%" }}>
              <Fromstext>Website</Fromstext>
              <InputBase value={value.website} onChange={e => setValue({...value, website: e.target.value})} type="text" required placeholder="https://yourwebsite.com" />
            </Box>
          </Grid>
        </Grid>
    </Box>
  );
};

export default KycForm;
