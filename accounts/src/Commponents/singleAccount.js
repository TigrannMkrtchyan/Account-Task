import { Card } from 'antd';
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AccountContext } from '../Context/accountContext';

const SingleAccount = () => {
  const { accounts } = useContext(AccountContext)
  const { id } = useParams()
  const account = accounts.find((value) => value.id.toString() === id)

  return (
    <div>
      <Card title="Default size card" style={{ width: 300 }}>
        <p>{account.id}</p>
        <p>{account.name}</p>
        <p>{account.owner}</p>
        <p>{account.createdOn}</p>
      </Card>
    </div>
  )
}

export default SingleAccount
