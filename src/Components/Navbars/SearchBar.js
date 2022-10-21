import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Box, InputBase, Typography } from "@mui/material";
import React from "react";
import { styled, alpha } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate, useParams } from "react-router-dom";
import { getSearchQuery } from "../../allfunction/FetchFunctions";
import { Link } from "react-router-dom";
import AdjustIcon from "@mui/icons-material/Adjust"

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "${({ theme }) => theme.iconcr} !important",
}));

const StyledInputBase = styled(TextField)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    borderColor: "${({ theme }) => theme.soft}",
    color: "${({ theme }) => theme.text}",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

// const SearchBar = () => {
//   return (
//     <div>
//       <Search>
//         <SearchIconWrapper>
//           <SearchIcon />
//         </SearchIconWrapper>
//         <StyledInputBase
//           placeholder="Search…"
//           inputProps={{ "aria-label": "search" }}
//         />
//       </Search>
//     </div>
//   );
// };

export default function Asynchronous() {
  const { chain } = useParams();
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const navigate = useNavigate();
  const loading = open && options.length === 0;

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  function handleChange (value) {
    getSearchQuery(chain, value)
    .then(result => {
      if(result){
        if(result.data.ethereum.dexTrades){
          setOptions(result.data.ethereum.dexTrades);
        }
      }
    })
  }

  function handleSelect(e, value){
    if(value){
      navigate(`/pair-explorer/${chain}/${value.smartContract.address.address}`)
    }
  }

  return (
    <Autocomplete
      id="asynchronous-demo"
      sx={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      filterOptions={(x) => x}
      onChange={handleSelect}
      // isOptionEqualToValue={(option, value) => {console.log(option, value); return true;}}
      getOptionLabel={(option) => `${option.baseCurrency.name}(${option.baseCurrency.symbol}) / ${option.quoteCurrency.name}(${option.quoteCurrency.symbol}) \n ${option.smartContract.address.address} `}
      options={options}
      loading={loading}
      renderInput={(params) => (
          <StyledInputBase
            {...params}
            label="Search..."
            onChange={e => handleChange(e.target.value)}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
              // startAdornment: (
              //   <SearchIconWrapper>
              //     <SearchIcon />
              //   </SearchIconWrapper>
              // ),
            }}
          />
      )}
    />
  );
}
