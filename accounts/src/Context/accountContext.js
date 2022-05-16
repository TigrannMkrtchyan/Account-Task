import React, { useState } from 'react'
import { getData, createData, deleteData } from '../Service/data.service'

export const AccountContext = React.createContext()

const AccountProvider = ({ children }) => {
  const [accounts, setAccounts] = useState([])

  const postAccountData = async (value) => {
    const data = await createData(value)
    setAccounts(data)
  }

  const getAccountData = async () => {
    const data = await getData()
    setAccounts(data)
  }

  const deleteAccountData = async () => {
    const data = await deleteData()
    setAccounts(data)
  }

  const data={
    accounts,
    getAccountData,
    postAccountData,
    deleteAccountData
  }

  return (
    <AccountContext.Provider value={data}>{children}</AccountContext.Provider>
  )
}

export default AccountProvider
