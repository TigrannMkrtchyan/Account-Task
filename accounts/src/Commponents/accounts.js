import { useContext } from 'react';
import { Table, Space } from 'antd';
import { Link } from 'react-router-dom';
import { AccountContext } from '../Context/accountContext';
import "antd/dist/antd.css";

const Accounts = () => {

  const value = useContext(AccountContext);
  const { Column } = Table;

  return (
    <Table dataSource={value}>
      <Column title="ID" dataIndex="id" key="id" />
      <Column title="Name" dataIndex="name" key="name" />
      <Column title="Created On" dataIndex="createdOn" key="createdOn" />
      <Column title="Owner" dataIndex="owner" key="owner" />
      <Column
        title="Action"
        key="id"
        render={(text, record) => (
          <Space size="middle">
            <Link to={`/Account/${record.id}`}>View {record.id}</Link>
          </Space>
        )}
      />
    </Table>
  )
}

export default Accounts