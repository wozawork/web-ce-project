import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Switch ,Router, Routes, Route, Link } from 'react-router-dom';
//import {Switch} from 'react-router'
import WebComponent from './WebComponent';
import IOSComponent from './IOSComponent';
import AndroidComponent from './AndroidComponent';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import NavBar from './NavBar';
import CEMappingHome from './CEMappingHome';
import ButtonsGroup from './ButtonsGroup';

function App() {
  return (
        <>


       
        <Routes>
          <Route path="/web" element={<WebComponent />} />
            
          <Route path="/ios" element={
            <IOSComponent />}/>
          
          <Route path="/android" element={
            <AndroidComponent /> }/>
          
          </Routes>
      
        </>
  );
}

export default App;
