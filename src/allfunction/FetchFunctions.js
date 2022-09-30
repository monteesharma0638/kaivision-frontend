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

async function fetchRecentTransactions(address) {
  return new Promise((resolve) => {
    fetch(`${serverUrl}/api/getDexTrades?address=${address}`)
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
      baseCurrency: result.data.data.ethereum.dexTrades[0].quoteCurrency,
      quoteCurrency: result.data.data.ethereum.dexTrades[0].baseCurrency,
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
  getTokenLikeByAccount
};
