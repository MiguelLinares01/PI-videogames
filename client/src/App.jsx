import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import LandingP from './components/LandingP.jsx';
import HomeP from './components/HomeP.jsx';
import DetailP from './components/DetailP.jsx';
import PagesP from './components/PagesP.jsx';
import FormP from './components/FormP.jsx';
import ErrorP from './components/ErrorP.jsx';

function App(){
    return(
        <div className='App'>
            <Routes>
              <Route
                path='/'
                element={<LandingP/>}
              />
              <Route
                path='/home'
                element={<HomeP/>}
              />
              <Route
                path='/detail/:id'
                element={<DetailP/>}
              />
              <Route
                path='/pages/:page'
                element={<PagesP/>}
              />
              <Route
                path='/newGame'
                element={<FormP/>}
              />
              <Route
                path='*'
                element={<ErrorP/>}
              /> 
            </Routes>
        </div>
    );
}

export default App;