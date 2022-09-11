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
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {
  fetchChartData,
  fetchTokenData
} from '../../allfunction/FetchFunctions';

const format = require('date-format');

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

export default function PairChart(props) {
  const classes = useStyles();
  const [age, setAge] = React.useState('true');
  let timeStamp;
  let initialTimeStamp;

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const { address } = props;

  async function getChartDetails(_age, dateString, interval) {
    return new Promise((resolve) => {
      let intervalName;
      let intervalCount;
      if (interval.includes('D')) {
        intervalName = 'day';
        [intervalCount] = interval.split('D');
      } else {
        if (Number(interval) < 60) {
          intervalName = 'minute';
          intervalCount = interval;
        } else if (Number(interval) >= 60) {
          intervalName = 'hour';
          intervalCount = Number(interval / 60).toFixed(0);
        }
      }
      console.log(intervalName, intervalCount);
      fetchChartData(address, _age, dateString, intervalName, intervalCount)
        .then((chartDatas) => {
          resolve(chartDatas);
        })
        .catch(console.log);
    });
  }

  React.useEffect(() => {
    function getParameterByName(name) {
      name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
      var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
        results = regex.exec(location.search);
      return results === null
        ? ''
        : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    function initOnReady(datass) {
      var widget = (window.tvWidget = new window.TradingView.widget({
        // debug: true, // uncomment this line to see Library errors and warnings in the console
        fullscreen: true,
        symbol: datass.symbol,
        interval: '60',
        container_id: 'tv_chart_container',

        //	BEWARE: no trailing slash is expected in feed URL
        datafeed: {
          /* mandatory methods for realtime chart */
          onReady: (cb) => {
            setTimeout(() => {
              console.log('ready');
              cb({
                supported_resolutions: ['1', '60', 'D']
              });
            }, 0);
          },
          resolveSymbol: (
            symbolName,
            onSymbolResolvedCallback,
            onResolveErrorCallback
          ) => {
            const data = {
              name: `${symbolName}/${age === 'true' ? 'BUSD' : 'BNB'}`,
              description: '',
              type: 'crypto',
              session: '24x7',
              timezone: 'America/New_York',
              ticker: symbolName,
              minmov: 1,
              pricescale: 10000000000000000,
              has_intraday: true,
              intraday_multipliers: ['1', '60'],
              supported_resolution: ['1', '60', 'D'],
              volume_precision: 8,
              data_status: 'streaming'
            };
            setTimeout(() => {
              console.log('resolved');
              onSymbolResolvedCallback(data);
            }, 10);
          },
          getBars: (
            symbolInfo,
            resolution,
            from,
            to,
            onHistoryCallback,
            onErrorCallback,
            firstDataRequest
          ) => {
            console.log(resolution);

            if (firstDataRequest) {
              timeStamp = to;
              initialTimeStamp = from;
            } else {
              console.log('from', from, 'to', to, 'from-to', to - from);
              if (timeStamp > initialTimeStamp - (to - from)) {
                timeStamp = initialTimeStamp - (to - from);
              } else {
                console.log('Not True');
              }
            }
            const timeRequested = new Date(timeStamp * 1000);
            const timeRequestedString = format('yyyy-MM-dd', timeRequested);
            console.log(timeRequestedString);

            getChartDetails(age, timeRequestedString, resolution).then(
              (chartData) => {
                onHistoryCallback(chartData, { noData: false });
              }
            );
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
          ) => {},
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

    fetchTokenData(address).then((datas) => {
      initOnReady(datas);
    });
    // window.addEventListener('DOMContentLoaded', initOnReady, false);
  }, [address, age]);

  return (
    <>
      <FormControl variant="filled" className={classes.formControl} fullWidth>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="false">BNB</MenuItem>
          <MenuItem value="true">BUSD</MenuItem>
        </Select>
      </FormControl>
      <div id="tv_chart_container"></div>
    </>
  );
}
