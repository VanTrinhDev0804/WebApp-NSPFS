import { Button, Form, Input } from 'antd'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { enCode } from '../../common/enCode'
import { UpdateData } from '../../firebase/AsyncActtions'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { addAdmin, updateAdmin } from '../../redux/slice/authSlice'
import './styles.scss'


const ChangePassPage = () => {

    const { userAdmin } = useAppSelector(state => state.admin)
    const [checkUser, setCheckUser] = useState(true);
    const history = useHistory();
    const dispatch = useAppDispatch()

    const ad = userAdmin ? userAdmin[0] : null
  
    const onFinish = (values: any) => {
     
        if (ad?.password === enCode(values.old_password)
            && values.new_password === values.confirm_password
            && values.old_password !== values.new_password) {
            let datanew = {
                name: 'admin',
                password: enCode(`${values.new_password}`)
            }
          
            UpdateData(datanew, "manage", "admin")
            dispatch(updateAdmin(datanew))
            alert("Cập nhật thành công!")
        }
        else{
            alert("Dữ liệu nhập chưa chính xác , vui lòng nhập đúng mật khẩu cũ , mật khẩu mới phải khác so với mật khẩu cũ")
        }

    }



    return (
        <div className="main-app">
            <div className="main-app_header">
                <h2>
                    Đổi mật khẩu
                </h2>

            </div>

            <div className="main-app_login">

                <Form
                    className="FormReset_Password"
                    layout='vertical'
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <h3>Đổi mật khẩu</h3>
                    <Form.Item
                        label="Mật khẩu cũ"
                        name="old_password"
                        className='lableInput '

                    >
                        <Input
                            type='password'
                            required />
                    </Form.Item>
                    <Form.Item
                        label="Mật khẩu mới"
                        name="new_password"
                        className='lableInput '

                    >
                        <Input
                            type='password'
                            required />
                    </Form.Item>
                    <Form.Item
                        label="Nhập lại mật khẩu "
                        name="confirm_password"
                        className='lableInput'
                    >
                        <Input
                            type='password'
                            required />
                    </Form.Item>
                    <Form.Item >
                        <div className='btn-group'>

                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Xác nhận
                            </Button>
                            <Button className="login-form-button btn-out">
                                <Link to={`/`}>
                                    Hủy
                                </Link>
                            </Button>
                        </div>


                        {/* Or <a href="">register now!</a> */}
                    </Form.Item>
                </Form>
            </div>

        </div>
    )
}

export default ChangePassPage