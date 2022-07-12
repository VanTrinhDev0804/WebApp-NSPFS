import { Button, Form, Input } from 'antd'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import {  decryption, enCode } from '../../common/enCode'
import { useAppSelector } from '../../redux/hooks'
import { loadAdminSuccess } from '../../redux/slice/authSlice'
import './styles.scss'


const Login = () => {

    const { userAdmin } = useAppSelector(state =>state.admin)
    const [checkUser, setCheckUser] = useState(true);
    const history = useHistory();
    const dispatch = useDispatch();
 
    const onFinish = (values: any) => {

        const user = userAdmin?.filter((user: any, key: any) => {
      
            return user.name === values.username && user.password=== enCode(values.password)
        })

        if (!user?.[0]) {
            setCheckUser(false)
        }
        else {
            dispatch(loadAdminSuccess(true));
            history.push('/dsns')
        }
      
    };

    return (
        <div className="main-app">
            <div className="main-app_header">
                <h2>
                    Đăng nhập
                </h2>

            </div>

            <div className="main-app_login">

                <Form
                    name="normal_login"
                    className="login-form"
                    layout='vertical'
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="Tên đăng nhập *"
                        name="username"
                        className='lableInput'
                    // initialValue={'lequynhaivan01'}
                    >
                        <Input required />
                    </Form.Item>
                    <Form.Item
                        label="Mật khẩu *"
                        name="password"
                    // initialValue={'311940211'}

                    >
                        <Input
                            type="password"
                            required
                        />
                    </Form.Item>
                    <Form.Item >
                        {
                            checkUser ?
                                <>
                                    <Link className="login-form-forgot" to={`/changepassword`}>
                                        Đổi mật khẩu?
                                    </Link>
                                </> :
                                <div className='login__Status'>
                                    <span>
                                        Sai mật khẩu hoặc tên đăng nhập
                                    </span>
                                </div>

                        }

                    </Form.Item>

                    <Form.Item >
                        <div className='btn-group'>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Đăng nhập
                            </Button>

                         

                        </div>


                        {/* Or <a href="">register now!</a> */}
                    </Form.Item>
                </Form>
            </div>

        </div>
    )
}

export default Login