import React, { useEffect, useState } from 'react'
// import { BrowserRouter as Router, Switch, Route, BrowserRouter, Routes } from 'react-router-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import styled, { ThemeProvider } from 'styled-components';
import Menu from './Components/Navbars/Menu';
import NavBar from './Components/Navbars/NavBar';
import SideBar from './Components/Navbars/SideBar';
import { darkTheme, lightTheme } from './Components/utils/Theme';
import DashboardHome from './Pages/Dashboard/DashboardHome';
import Gainers from './Pages/GainersLosers/Gainers';
import Kyc from './Pages/KycComponent/Kyc';
import PairExplorer from './Pages/PairsComponent/PairExplorer';
import Trends from './Pages/TrendsComponent/Trends';

const Mainsidebar = styled.div`
  display:flex;
`
const Main = styled.div`
  flex: 7;
`
const Wrapper = styled.div`
  background: ${({ theme }) => theme.bgitems}; 
  padding: 3rem 0 ; 
  color: ${({ theme }) => theme.text}; 
  height:100%;
`

const App = () => {
  const [darkMode, setDarkMode] = useState(true)


  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Mainsidebar>
        <BrowserRouter>
        {/*<Menu darkMode={darkMode} setDarkMode={setDarkMode} />*/}
          <Main>
            <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Wrapper>
              <Routes>
                <Route path="/" element={<DashboardHome />} />
                <Route path="/home" element={<DashboardHome />} />
                <Route path="/pair-explorer" element={<PairExplorer />} />
                <Route path="/gainers-losers" element={<Gainers />} />
                <Route path="/trends" element={<Trends />} />
                <Route path="/kyc" element={<Kyc />} />
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Mainsidebar>
 
    </ThemeProvider>
  )
}

export default App;