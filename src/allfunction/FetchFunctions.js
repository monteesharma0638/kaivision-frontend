/* eslint-disable object-curly-newline */
/* eslint-disable arrow-body-style */
// const dateformat = require('date-format');

const serverUrl = 'http://localhost/swass-backend-php/backend-swass';
async function fetchChartData(
  address,
  isBUSD,
  dateString,
  intervalName,
  intervalCount
) {
  // const now = new Date(timeStamp);
  // const formatedTime = dateformat(now, 'yyyy-mm-dd');
  // console.log(formatedTime.split('T')[0]);
  return new Promise((resolve, reject) => {
    fetch(
      `${serverUrl}/api/getChartData?tokenAddress=0xC1bfcCd4c29813eDe019D00D2179Eea838a67703&chainId=1`
    )
      .then((response) => response.json())
      .then((result) => {
        const data = result.data.data.ethereum.dexTrades;
        const chartData = [];
        data.sort((a, b) => a.any - b.any);
        data.forEach((element) => {
          const time = new Date(element.timeInterval.hour).getTime();
          console.log('1');
          const dataToAppend = {
            time,
            open: parseFloat(element.open_price),
            high: parseFloat(element.maximum_price),
            low: parseFloat(element.minimum_price),
            close: parseFloat(element.close_price),
            volume: parseFloat(element.tradeAmount)
          };
          chartData.push(dataToAppend);
        });
        resolve(chartData);
      })
      .catch(reject);
  });
}

async function fetchTokenData(address) {
  return new Promise((resolve, reject) => {
    fetch(`${serverUrl}/getTokenInfo.php?address=${address}`)
      .then((response) => response.json())
      .then((result) => {
        const data = result.data.ethereum.address[0];
        const { name, symbol, decimals } = data.smartContract.currency;
        fetch(`${serverUrl}/getTokenSupply.php?address=${address}`)
          .then((response) => response.json())
          .then((results) => {
            const supply = results.result / 10 ** decimals;
            resolve({
              address: data.address,
              name,
              symbol,
              decimals,
              supply
            });
          })
          .catch((error) => console.log('error', error));
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
      .catch((error) => console.log('error updating token price', error));
  });
}

async function fetchPoolScanner() {
  return new Promise((resolve) => {
    fetch(`${serverUrl}/fetchNew.php`)
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      })
      .catch((error) => console.log('error', error));
  });
}

async function fetchRecentTransactions(address) {
  return new Promise((resolve) => {
    fetch(
      `${process.env}/swass-backend-php/backend-swass/transaction.php?address=${address}`
    )
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      })
      .catch((error) => console.log('error', error));
  });
}

export {
  fetchChartData,
  demoFunction,
  fetchTokenData,
  fetchTokens,
  fetchTokenPrice,
  fetchPoolScanner,
  fetchRecentTransactions
};
