import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Box} from "@mui/material";
import {MainStyles} from "./components/theme/styles";
import Main from "./components/Main/Main";

function App() {
  return (
    <Box sx={{...MainStyles.appBox}}>
      <Main />
    </Box>
  );
}

export default App;
