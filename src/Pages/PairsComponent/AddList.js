import { Box, Typography } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import {
  getPairCurrencies,
  getReserves,
} from "../../allfunction/FetchFunctions";

const Poolinfos = styled.span`
  color: ${({ theme }) => theme.text};
`;
const Pooldetails = styled.span`
  color: ${({ theme }) => theme.text};
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px 0;
`;
const Hr = styled.hr`
  margin: 0.6rem 0;
  border: 0.6px solid ${({ theme }) => theme.soft};
`;
const Links = styled(Link)`
  color: ${({ theme }) => theme.iconcr};
`;

let formatter = Intl.NumberFormat("en", { notation: "compact" });

const AddList = ({ pairCurrencies, reserves, setReserves }) => {
  const { chain, pair } = useParams();

  React.useEffect(() => {
    if (pairCurrencies) {
      getReserves(
        chain,
        pair,
        pairCurrencies.baseCurrency.address,
        pairCurrencies.quoteCurrency.address
      ).then((result) => {
        if (result) {
          const { baseCurrency, quoteCurrrency } = result.data.ethereum;
          setReserves({
            baseCurrency: baseCurrency[0].balances[0].value,
            quoteCurrency: quoteCurrrency[0].balances[0].value,
          });
        }
      });
    }
  }, [chain, pair, pairCurrencies, setReserves]);
  return (
    <div>
      <Box paddingTop="10px">
        <Pooldetails>
          <Typography fontWeight="300" variant="body">
            Pair
          </Typography>
          <Typography
            fontWeight="300"
            variant="body"
            style={{
              cursor: "pointer",
              color: "gold",
            }}
            onClick={(e) => {
              navigator.clipboard.writeText(pair);
              alert("copied " + pair);
            }}
          >
            {pair.slice(0, 3)}... {pair.slice(-3)}
          </Typography>
        </Pooldetails>
        <Pooldetails>
          <Typography
            style={{
              cursor: "pointer",
            }}
            onClick={(e) => {
              navigator.clipboard.writeText(pair);
              alert("copied " + pair);
            }}
            fontWeight="300"
            variant="body"
          >
            Base Currency(
            {pairCurrencies ? pairCurrencies.baseCurrency.symbol : "..."})
          </Typography>
          {pairCurrencies ? (
            <Typography
              fontWeight="300"
              variant="body"
              style={{
                cursor: "pointer",
              }}
              onClick={(e) => {
                navigator.clipboard.writeText(pair);
                alert("copied " + pair);
              }}
            >
              {pairCurrencies.baseCurrency.address.slice(0, 3)} ....{" "}
              {pairCurrencies.baseCurrency.address.slice(-3)}
            </Typography>
          ) : (
            "....."
          )}
        </Pooldetails>
        <Pooldetails>
          <Typography fontWeight="300" variant="body">
            Quote Currency(
            {pairCurrencies ? pairCurrencies.quoteCurrency.symbol : "..."})
          </Typography>
          {pairCurrencies ? (
            <Typography fontWeight="300" variant="body">
              {pairCurrencies.quoteCurrency.address.slice(0, 3)} ....{" "}
              {pairCurrencies.quoteCurrency.address.slice(-3)}
            </Typography>
          ) : (
            "....."
          )}
        </Pooldetails>
        <Pooldetails>
          <Typography fontWeight="300" variant="body">
            Pooled {pairCurrencies ? pairCurrencies.baseCurrency.symbol : "..."}
            :
          </Typography>
          <Typography fontWeight="300" variant="body">
            {formatter.format(reserves.baseCurrency)}
          </Typography>
        </Pooldetails>
        <Pooldetails>
          <Typography fontWeight="300" variant="body">
            Pooled{" "}
            {pairCurrencies ? pairCurrencies.quoteCurrency.symbol : "..."}:
          </Typography>
          <Typography fontWeight="300" variant="body">
            {formatter.format(reserves.quoteCurrency)}
          </Typography>
        </Pooldetails>
      </Box>
    </div>
  );
};

export default AddList;
