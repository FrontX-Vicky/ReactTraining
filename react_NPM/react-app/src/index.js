import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import AppAPI from './App_api';
// import RenderProps from './Render_props';
import {ReactRouter, About, Contact, History} from './react_router';
import {BrowserRouter, Routes, Route} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
    <br/><hr/><br/>
    <AppAPI />
    <br/><hr/><br/>
    <RenderProps />
    <br/><hr/><br/>

      <Routes>
          <Route path="/" element={<ReactRouter />} />
          <Route path="/about" element={<About />} >
            <Route path='history' element={<History />}/>
          </Route>
          <Route path="/contact" element={<Contact />} />
      </Routes>
  </BrowserRouter>
);

