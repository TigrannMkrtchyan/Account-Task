import { useContext, useState, useEffect } from 'react';
import { Table, Space, Modal, Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { AccountContext } from '../Context/accountContext';
import "antd/dist/antd.css";

const Accounts = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { deleteAccountData, accounts, getAccountData, postAccountData } = useContext(AccountContext);

  useEffect(() => { getAccountData() }, [])

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    postAccountData(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const { Column } = Table;

  return (<div>
    <Table dataSource={accounts}>
      <Column title="ID" dataIndex="id" key="id" />
      <Column title="Name" dataIndex="name" key="name" />
      <Column title="Created On" dataIndex="createdOn" key="createdOn" />
      <Column title="Owner" dataIndex="owner" key="owner" />
      <Column
        title="Action"
        key="id"
        render={(text, record) => (
          <Space size="middle">
            <Link to={`/account/${record.id}`}>View {record.id}</Link>
          </Space>
        )}
      />
    </Table>

    <Button type="primary" onClick={showModal}>
      Open Modal
    </Button>
    <br />
    <br />
    <Button type="primary" onClick={() => deleteAccountData()}> Delete </Button>

    <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleOk}>

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Owner"
          name="owner"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

    </Modal>

  </div>
  )
}

export default Accounts
