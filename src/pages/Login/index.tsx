import { useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { setCredentials } from '../../features/auth-slice.tsx/authSlice'

import ApiLogin from '../../services/ApiLogin';
import './main.css'

export const Login: React.FC = () => {

  const userRef = useRef<HTMLInputElement>(null);
  const [form] = Form.useForm();
  const navigate = useNavigate()
  const dispatch = useDispatch();
  useEffect(() => {
    if (userRef.current) userRef.current.focus();
  }, [])



  const onFinish = (values: any) => {
    ApiLogin({email: values.email, password: values.password }).then(res => {
      console.log('llego', res)
      if (res?.status===200) {
        const dataApi = {
          email: res.data.user.email,
          accesToken: res.data.token
        }
       
        dispatch(setCredentials({ ...dataApi }))
        navigate('/home')
      }
      form.resetFields();
    }).catch(error=>{
      console.error(error)
      alert('User invalid')
    })

    
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='containerLogin'>
    <h1>Login</h1>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"

      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}

        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <div className='containerBtnLogin'>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          </div>
         
        </Form.Item>
      </Form>

    </div>
  );
}

