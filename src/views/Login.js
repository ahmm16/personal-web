import React, { useState } from 'react'
import {
    Layout, Divider, Typography, Form, Input, Button, Checkbox,
    Row, Col, Result, Spin
} from 'antd';
import Footer from '../components/Footer';
import SquareAnimation from '../components/Animations/SquareAnimation'
import PropTypes from 'prop-types'
import { useUser } from '../context/user.context'
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;

const Login = ({ setToken }) => {
    const { logIn, darkMode, setDarkMode } = useUser()
    const [form, setForm] = useState({});
    const [loginLoader, setLoginLoader] = useState(false)
    const [loginResponse, setLoginResponse] = useState(false)

    const onFinishFailed = () => {
        return setLoginResponse(-1)
    }
    const evalResponse = (response) => {
        if (response.code === 400) {
            return setLoginResponse(-1)
        } else {
            setToken(response.data.authToken)
        }
        setLoginLoader(false)
    }
    const handleSubmit = async () => {
        setLoginResponse(false)
        try {
            setLoginLoader(true)
            const response = await logIn(form)
            evalResponse(response)
            setLoginLoader(false)
        } catch (err) {
            setLoginLoader(false)
            console.log("🚀 ~ file: Login.js ~ line 39 ~ handleSubmit ~ err", err)
            return setLoginResponse(-1)
        }
    }
    const handleChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    }
    return (
        <Layout className={`layout primary-bg ${darkMode ? 'dark-mode' : ''}`}>
            <SquareAnimation />
            <Content className="login">
                <Row justify="space-around">
                    <Col xs={24} sm={18}>
                        <Form
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={handleSubmit}
                            onFinishFailed={onFinishFailed}
                        >
                            <Form.Item
                                label="Username"
                                name="username"
                                id="username"
                                onChange={handleChange}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Campo requerido',
                                    },
                                ]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                            </Form.Item>
                            <Form.Item
                                label="Password"
                                name="password"
                                id="password"
                                onChange={handleChange}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Campo requerido',
                                    },
                                ]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>
                            {/* {loginResponse === -1 &&
                                <Result
                                    status="warning"
                                    title="Error"
                                    extra={<Text>Compruebe sus credenciales!</Text>
                                    }
                                />
                            } */}
                            {loginLoader && <Spin size="large" />}
                            <Form.Item name="remember" valuePropName="checked">
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Submit
                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </Content>
            <Divider style={{ backgroundColor: '#f0f2f5' }}></Divider>
            <Footer />
        </Layout>
    );
}
Login.propTypes = {
    setToken: PropTypes.func.isRequired
}
export default Login