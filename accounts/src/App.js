import React from 'react'
import Accounts from './Commponents/accounts';
import SingleAccount from './Commponents/singleAccount';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Account" element={<Accounts />} />
          <Route path="/Account/:id" element={<SingleAccount />} />
          <Route path="*" element={< Navigate replace to="Account" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

