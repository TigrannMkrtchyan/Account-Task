import React, { useState, useEffect } from 'react'
import { getData } from '../Data/getData'

export const AccountContext = React.createContext()

const AccountProvider = ({ children }) => {
  const [data, setData] = useState([])
  useEffect(() => { getData().then((result) => setData(result)) }, [])

  return (
    <AccountContext.Provider value={data}>{children}</AccountContext.Provider>
  )
}

export default AccountProvider