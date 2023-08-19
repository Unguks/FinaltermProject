import React, { useState, useEffect } from 'react';
import { Layout, theme, Space, Typography, Card, Alert, Button, Form, Input } from 'antd';
import useApiRequest from '../../hooks/useApiRequest';
import CommentDateFormatUtil from '../../utils/CommentDateFormatUtil';
import '../../styles/components/detailPageComponent/commentsection.css';

const { Sider, Content } = Layout;
const { TextArea } = Input;
const { Title } = Typography;

const CommentSection = ({ id }) => {
  const { token: { colorBgContainer } } = theme.useToken();
  const { data, refetch } = useApiRequest(`http://localhost:8000/comment/${id}`);
  const [comments, setComments] = useState(null);
  const [response, setResponse] = useState(null);
  const [form, setForm] = useState({
    userName: '',
    comment: ''
  });

  useEffect(() => {
    if (sessionStorage.getItem('user')) {
      setForm({
        userName: JSON.parse(sessionStorage.getItem('user')).userName,
        comment: ''
      });
    }
    if (data) {
      setComments(data);
    }
  }, [data, comments]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(form);
  }, [form]);

  const handleNewCommentSubmit = async (values) => {
    try {
      const response = await fetch(`http://localhost:8000/comment/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        refetch();
        const data = await response.json();
        setResponse(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleForm = () => {
    handleNewCommentSubmit(form);
    handleClearForm();
  };

  const handleClearForm = () => {
    setForm({
      userName: '',
      comment: ''
    });
  };

  const clearResponse = () => {
    setResponse(null);
  };

  useEffect(() => {
    if (response) {
      const timeout = setTimeout(clearResponse, 2000);
      return () => clearTimeout(timeout);
    }
  }, [response]);

  return (
    <Sider className='sider' width={320} style={{ background: { colorBgContainer } }}>
      <Content className='comment-content-title'>
        <Title level={3} style={{ color: 'white' }}>COMMENT</Title>
        <hr style={{ width: '100%' }} />
      </Content>

      <Content className='comment-content-form'>
        {response && (
          <Alert
            message="Success"
            description={response}
            type="success"
            showIcon
            style={{ marginBottom: '10px' }}
          />
        )}
        <Form className='comment-content-form-form' onFinish={handleForm}>
          <Form.Item
            name="userName"
            initialValue={JSON.parse(sessionStorage.getItem('user'))?.userName || ''}
            defaultValue={form.userName}
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
            style={{ width: '100%' }}
          >
            <Input
              name='userName'
              placeholder='Username'
              defaultValue={form.userName}
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item
            name="comment"
            initialValue={form.comment}
            defaultValue={form.comment}
            rules={[
              {
                required: true,
                message: 'Please input your comment!',
              },
            ]}
            style={{ width: '100%' }}
          >
            <TextArea
              name='comment'
              placeholder="Share your comment"
              allowClear
              autoSize={{ minRows: 2 }}
              defaultValue={form.comment}
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </Content>

      <Content className='comment-content-display'>
        <Space direction="vertical" size={20}>
          {comments && comments.commentList.map((comment) => (
            <Card size="small" style={{ width: 260 }}>
              <span className='comment-content-display-card-name'>{comment.userName}</span>
              <span className='comment-content-display-card-date'>{CommentDateFormatUtil(comment.createdAt)}</span>
              <hr />
              <span className='comment-content-display-card-comment'>{comment.comment}</span>
            </Card>
          ))}
        </Space>
      </Content>
    </Sider>
  );
};

export default CommentSection;
