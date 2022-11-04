import React from 'react'
import { BrowserRouter, Route, Routes, redirect } from "react-router-dom";
import App from './App';
import Error from './Error';
import Home from './Home';

export default function Router() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chess" element={<App />} />
              <Route path="*" element={<Error />} />
          </Routes>
      </BrowserRouter>
  )
}
