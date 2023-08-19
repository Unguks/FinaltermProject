import React, { useEffect } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/loginpage.css';

const LoginPage = () => {
  const { login, user, error } = useAuth();
  const navigate = useNavigate();

  const onFinish = (values) => {
    const { email, password } = values;
    login(email, password);
    console.log('Received values of form: ', values);
  };

  useEffect(() => {
    if (sessionStorage.getItem('user')) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div className="login-container">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <h1 className="login-title">LOG IN</h1>
        {error && (
          <p className="error-message">
            <span style={{ color: 'red' }}>*</span>
            {error}
          </p>
        )}
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Space size='small'>
            <Button type="primary" htmlType="submit" ghost>
              Log in
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
