/* eslint-disable no-param-reassign */
/* eslint-disable no-useless-escape */
/* eslint-disable one-var */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable prefer-template */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable no-multi-assign */
/* eslint-disable no-undef */
/* eslint-disable new-cap */
/* eslint-disable no-tabs */
/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
/* eslint-disable camelcase */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-lonely-if */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  fetchChartData,
  getLastPrice,
  getPairCurrencies
} from '../../allfunction/FetchFunctions';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    backgroundColor: 'whitesmoke'
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

function numberOfZeros(n) {
  var c = 0;
  while (!~~n) {
    c++;
    n *= 10;
  }
  return c - 1;
}


export default function PairChart() {
  const classes = useStyles();
  const {chain, pair} = useParams();

  React.useEffect(() => {
    function getParameterByName(name) {
      name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
      var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
        results = regex.exec(location.search);
      return results === null
        ? ''
        : decodeURIComponent(results[1].replace(/\+/g, ' '));
    } 

    function initOnReady({baseCurrency, quoteCurrency, pricescale}) {
      window.widgets = (window.tvWidget = new window.TradingView.widget({
        // debug: true, // uncomment this line to see Library errors and warnings in the console
        fullscreen: true,
        symbol: baseCurrency.symbol + "/" + quoteCurrency.symbol,
        interval: '1D',
        container_id: 'tv_chart_container',
        allow_symbol_change: false,
        enable_publishing: false,
        autosize: true,
        enabled_features: ["hide_left_toolbar_by_default"],
        time_frames: [
          { text: "1H", resolution: "60", description: "1 hour" },
          { text: "1D", resolution: "1D", description: "1 Day" },
      ],

        //	BEWARE: no trailing slash is expected in feed URL
        datafeed: {
          /* mandatory methods for realtime chart */
          onReady: (cb) => {
            setTimeout(() => {
              console.log('ready');
              cb({
                supported_resolutions: ['1', '15', '60', 'D']
              });
            }, 0);
          },
          resolveSymbol: (
            symbolName,
            onSymbolResolvedCallback,
            onResolveErrorCallback
          ) => {
            const data = {
              name: symbolName,
              description: '',
              type: 'crypto',
              session: '24x7',
              timezone: 'America/New_York',
              ticker: symbolName,
              minmov: 1,
              pricescale: pricescale,
              has_intraday: true,
              intraday_multipliers: ['1', '15', '60'],
              supported_resolution: ['1', '15', '60', 'D'],
              volume_precision: 8,
              data_status: 'streaming'
            };
            setTimeout(() => {
              onSymbolResolvedCallback(data);
            }, 10);
          },
          getBars: async (
            symbolInfo,
            resolution,
            from,
            to,
            onHistoryCallback,
            onErrorCallback,
            firstDataRequest
          ) => {

            // console.log(symbolInfo, resolution, new Date(from*1000), new Date(to*1000), onHistoryCallback, onErrorCallback, firstDataRequest);
            console.log(resolution);
            const intervalName = resolution === "1D"? "day": resolution==="60"? "hour": "minute";
            const intervalCount = intervalName === "minute"? Number(resolution): 1;
            try {
              const result = await fetchChartData(chain, pair, baseCurrency.address, quoteCurrency.address, intervalName, intervalCount, new Date(Number(from)*1000).toISOString(), new Date(Number(to)*1000).toISOString());
              let previousClose;
              const chartData = result.map((value, index) => {
                const [open, high, low, close] = [Math.abs(value.open), Math.abs(value.high), Math.abs(value.low), Math.abs(value.close)];
                const openCorrect = index? previousClose: open;
                previousClose = close;
                return {time: new Date(value.timeInterval[intervalName]).getTime(),
                open: openCorrect,
                high: Math.abs(high - open) > 5 *Math.abs(open - close)? ((close>open)? close: open): high,
                low: Math.abs(low - close) > 5 *Math.abs(close - open)? ((close > open)? open: close): low,
                close: close,
                volume: Math.abs(value.volume)}
              })
              
              onHistoryCallback(chartData, {
                noData: false,
              })
            }
            catch(err){
              console.log("[getBars]: Get error", err);
              onErrorCallback(err);
            }
          },
          searchSymbols: (
            userInput,
            exchange,
            symbolType,
            onResultReadyCallback
          ) => {},
          subscribeBars: (
            symbolInfo,
            resolution,
            onRealtimeCallback,
            subscribeUID,
            onResetCacheNeededCallback
          ) => {
          },
          unsubscribeBars: (subscriberUID) => {},

          /* optional methods */
          getServerTime: (cb) => {},
          calculateHistoryDepth: (
            resolution,
            resolutionBack,
            intervalBack
          ) => {},
          getMarks: (
            symbolInfo,
            startDate,
            endDate,
            onDataCallback,
            resolution
          ) => {},
          getTimeScaleMarks: (
            symbolInfo,
            startDate,
            endDate,
            onDataCallback,
            resolution
          ) => {}
        },
        library_path: '/assets/charting_library/',
        locale: getParameterByName('lang') || 'en',

        disabled_features: ['use_localstorage_for_settings', 'study_templates'],
        // enabled_features: [],
        charts_storage_url: 'https://demo-feed-data.tradingview.com',
        charts_storage_api_version: '1.1',
        client_id: 'tradingview.com',
        user_id: 'public_user_id',
        theme: getParameterByName('theme'),
        overrides: {
          'paneProperties.background': '#222222',
          'paneProperties.vertGridProperties.color': '#454545',
          'paneProperties.horzGridProperties.color': '#454545',
          'scalesProperties.textColor': '#AAA'
        }
      }));
    }
    getPairCurrencies(chain, pair)
    .then((datas) => {
      console.log(datas);
      getLastPrice(chain, datas.baseCurrency.address, datas.quoteCurrency.address)
      .then(result => {
        console.log(result);
        if(result){
          const price = result.data.ethereum.dexTrades[0].quotePrice;
          initOnReady({...datas, pricescale: price<1? 10**(numberOfZeros(price) + 2): 100 });
        }
        else {
          
          initOnReady({...datas, pricescale: 10000 });
        }
      })
    })
    // window.addEventListener('DOMContentLoaded', initOnReady, false);
  }, [chain, pair]);

  return (
    <>
      <div id="tv_chart_container"></div>
    </>
  );
}
