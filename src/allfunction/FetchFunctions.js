/* eslint-disable object-curly-newline */
/* eslint-disable arrow-body-style */
// const dateformat = require('date-format');

const serverUrl = process.env.REACT_APP_API_URL;
async function fetchChartData(
  chain,
  pair,
  baseCurrency,
  quoteCurrency,
  intervalName,
  intervalCount,
  from,
  to
) {
  // const now = new Date(timeStamp);
  // const formatedTime = dateformat(now, 'yyyy-mm-dd');
  // console.log(formatedTime.split('T')[0]);
  const result = await fetch(
    `${serverUrl}/api/getChartData?chain=${chain}&pair=${pair}&baseCurrency=${baseCurrency}&quoteCurrency=${quoteCurrency}&intervalName=${intervalName}&intervalCount=${intervalCount}&from=${from}&to=${to}`
  ).then((response) => response.json());

  return result && result.code ? result.data.data.ethereum.dexTrades : 0;
}

async function fetchTokenData(address) {
  return new Promise((resolve, reject) => {
    fetch(`${serverUrl}/api/getTokenInfo?address=${address}`)
      .then((response) => response.json())
      .then((result) => {
        const data = result.data.data.ethereum.address[0];
        const { name, symbol, decimals } = data.smartContract.currency;
        const supply = result.data.data.ethereum.transfers[0].amount;
        resolve({
          address: data.address,
          name,
          symbol,
          decimals,
          supply,
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
}

async function fetchTokens(address) {
  return new Promise((resolve, reject) => {
    fetch(`${serverUrl}/fetchTokens.php?address=${address}`)
      .then((response) => response.json())
      .then((result) => {
        const data = result.data.ethereum.address[0].balances;
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

async function demoFunction() {
  return 1;
}

async function fetchTokenPrice(_address) {
  return new Promise((resolve) => {
    fetch(`${serverUrl}/getCurrentPrice.php?address=${_address}`)
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      })
      .catch((error) => console.log("error updating token price", error));
  });
}

async function fetchPoolScanner() {
  return new Promise((resolve) => {
    fetch(`${serverUrl}/fetchNew.php`)
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      })
      .catch((error) => console.log("error", error));
  });
}

async function fetchRecentTransactions(address, chain) {
  return new Promise((resolve) => {
    fetch(`${serverUrl}/api/getDexTrades?address=${address}&chain=${chain}`)
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      })
      .catch((error) => console.log("error", error));
  });
}

async function fetchTopTradePairs(chain) {
  const result = await fetch(
    `${serverUrl}/api/getTopTrades?chain=${chain}`
  ).then((response) => response.json());
  if (result.code) {
    const data = result.data.data.ethereum.dexTrades;
    return data;
  } else {
    return 0;
  }
}

async function fetchBalances(chain, address) {
  const result = await fetch(
    `${serverUrl}/api/getTokenBalances?chain=${chain}&address=${address}`
  ).then((response) => response.json());
  return result.code ? result.data.data.ethereum.address[0].balances : 0;
}

async function fetchTokenCreated(chain, address) {
  const result = await fetch(
    `${serverUrl}/api/getTokenCreated?chain=${chain}&address=${address}`
  )
    .then((response) => response.json())
    .catch((err) => 0);
  return result.code ? result.data.data.ethereum.transactions : 0;
}

async function fetchOwnershipTransferred(chain, addresses) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    chain,
    addresses,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const result = fetch(
    serverUrl + "/api/getOwnershipTransferred",
    requestOptions
  )
    .then((response) => response.json())
    .catch((err) => 0);
  return result && result.code
    ? result.data.data.ethereum.smartContractEvents
    : 0;
}

async function fetchPriceVariation(chain, addresses) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    chain,
    addresses,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  const result = await fetch(
    `${serverUrl}/api/getPriceVariation`,
    requestOptions
  )
    .then((response) => response.json())
    .catch(console.log);
  return result && result.code ? result : 0;
}


async function getPairCurrencies(chain, pair) {
  const result = await fetch(
    `${serverUrl}/api/getPairCurrencies?chain=${chain}&pair=${pair}`
  ).then((response) => response.json());
  if (result && result.code) {
    return {
      baseCurrency: result.data.data.ethereum.dexTrades[0].baseCurrency,
      quoteCurrency: result.data.data.ethereum.dexTrades[0].quoteCurrency,
    };
  } else {
    return 0;
  }
}

async function updatePairAction(message, signature) {

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({
      message,
      signature,
    }),
    redirect: "follow",
  };

  return fetch(serverUrl + "/updatePairAction", requestOptions).then(
    (response) => response.json()
  );
}

async function updateTokenAction(message, signature){
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({
      message, signature
    }),
    redirect: "follow",
  }

  return fetch(serverUrl + "/updateTokenAction", requestOptions).then(response => response.json());
}

async function getldforpairs(pairAddresses){
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    pairAddresses
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

 return fetch(serverUrl + "/getldforpairs", requestOptions)
  .then(response => response.json());
}

async function getldforTokens(tokenAddresses){
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    tokenAddresses
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

 return fetch(serverUrl + "/getldfortokens", requestOptions)
  .then(response => response.json());
}

async function getLikeStatusByAccount(walletAddress){
  const result = await fetch(serverUrl + "/getLikeStatusByAccount?walletAddress="+walletAddress)
  .then(response => response.json());
  if(result.code){
    const data = {};
    result.data.forEach(value => {
      data[value.pairAddress] = {
        liked: value.likedStatus,
        disliked: value.dislikedStatus
      }
    })
    return data;
  }
  else {
    return {};
  }
}

async function getTokenLikeByAccount(walletAddress){
  const result = await fetch(serverUrl + "/getTokenLikeByAccount?walletAddress="+walletAddress)
  .then(response => response.json());
  if(result.code){
    const data = {};
    result.data.forEach(value => {
      data[value.pairAddress] = {
        liked: value.likedStatus,
        disliked: value.dislikedStatus
      }
    })
    return data;
  }
  else {
    return {};
  }
}

async function getGainers(chain){
  const result = await fetch(serverUrl + "/api/getGainers?chain=" + chain).then(res => res.json());
  return result.code && result.data.code==="OK"? result.data.data: [];
}

async function getLoosers(chain){
  const result = await fetch(serverUrl + "/api/getLoosers?chain=" + chain).then(res => res.json());
  return result.code && result.data.code==="OK"? result.data.data: [];
}

async function getDayVolume(chain, pair){
  const result = await fetch(serverUrl + `/api/getDayVolume?chain=${chain}&pair=${pair}`).then(res => res.json());
  return result.code? result.data: 0;
}

async function getReserves(chain, pair, quoteCurrency, baseCurrency){
  const result = await fetch(serverUrl + `/api/getReserves?chain=${chain}&pair=${pair}&quoteCurrency=${quoteCurrency}&baseCurrency=${baseCurrency}`).then(res => res.json());
  return result.code? result.data: 0;
}

async function getTokenDetails(chain, currency){
  const result = await fetch(serverUrl + `/api/getCircularSupply?chain=${chain}&currency=${currency}`).then(response => response.json());
  return result.code? result.data: 0;
}

async function getUsdPrice(chain, currency){
  const result = await fetch(serverUrl + `/api/getUsdPrice?chain=${chain}&currency=${currency}`).then(res => res.json());
  return result.code? result.data: 0;
}

async function getContractCreation(chain, address){
  const result = await fetch(serverUrl + `/api/getContractCreation?chain=${chain}&address=${address}`).then(res => res.json());
  return result.code? result.data: 0;
}

async function sumbitForm({tokenAddress, ownerAddress, teamWalletAddress, telegram, email, twitter, repo, website, logo, signature}){
  var formdata = new FormData();
  formdata.append("tokenAddress", tokenAddress);
  formdata.append("teamWalletAddress", teamWalletAddress);
  formdata.append("telegram", telegram);
  formdata.append("ownerAddress", ownerAddress);
  formdata.append("email", email);
  formdata.append("twitter", twitter);
  formdata.append("repo", repo);
  formdata.append("website", website);
  formdata.append("signature", signature);
  formdata.append("logo", logo[0]);

  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };

  const result = await fetch(serverUrl + "/updateTokenKyc", requestOptions)
    .then(response => response.json())
  return result.code? result.message: 0;
}

async function getNewListedPairs(chain){
  const result = await fetch(serverUrl + `/api/getNewListedpairs?chain=${chain}`).then(response => response.json());
  return result.code? result.data: 0;
}

async function getSearchQuery(chain, search){
  const result = await fetch(serverUrl + `/api/getSearchQuery?chain=${chain}&search=${search}`).then(response => response.json());
  return result.code? result.data: 0;
}

async function getLastPrice(chain, baseCurrency, quoteCurrency){
  const result = await fetch(serverUrl + `/api/getLastPrice?chain=${chain}&baseCurrency=${baseCurrency}&quoteCurrency=${quoteCurrency}`).then(response => response.json())
  return result.code? result.data: 0;
}


export {
  fetchChartData,
  demoFunction,
  fetchTokenData,
  fetchTokens,
  fetchTokenPrice,
  fetchPoolScanner,
  fetchRecentTransactions,
  fetchTopTradePairs,
  fetchBalances,
  fetchTokenCreated,
  fetchOwnershipTransferred,
  fetchPriceVariation,
  getPairCurrencies,
  updatePairAction,
  getldforpairs,
  getLikeStatusByAccount,
  updateTokenAction,
  getldforTokens,
  getTokenLikeByAccount,
  getGainers,
  getLoosers,
  getDayVolume,
  getReserves,
  getTokenDetails,
  getUsdPrice,
  getContractCreation,
  sumbitForm,
  getNewListedPairs,
  getSearchQuery,
  getLastPrice
};
