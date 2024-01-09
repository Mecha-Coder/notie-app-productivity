import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './login/login'
import Configure from './configure/configure'
import Main from './main/main'
import Error404 from "./reuse/Error404"
import './style/app.css';

function App() {

  return (
    <div id="app">
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Login />} />
          <Route path="/app" element={<Main />} />
          <Route path="/configure" element={<Configure />} />
          <Route path="*" element={<Error404/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
