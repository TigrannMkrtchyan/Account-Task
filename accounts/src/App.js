import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Accounts from './Commponents/accounts';
import SingleAccount from './Commponents/singleAccount';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/account" element={<Accounts />} />
          <Route path="/account/:id" element={<SingleAccount />} />
          <Route path="*" element={< Navigate replace to="account" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
