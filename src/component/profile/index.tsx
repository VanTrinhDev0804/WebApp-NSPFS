import React from 'react'
import './styles.module.scss'

const UserProfile = () => {
    return (
        <div className='Profile'>
            <div className="Profile-Header">
                <img className='Profile-Header_image'
                    src={require('../../assets/img/header.jpg')}
                // width ={'100%'}
                // height={'100%'}
                />
                <div className="Profile-Header_GroupTitle">

                    <h2 className='Profile-Header_Title'>Giải Pháp Tài Chính</h2>
                    <h2 className='Profile-Header_SubTitle'>Hoàn Hảo</h2>
                </div>


            </div>
            <div className="Profile-Content">
                <div className="Profile-Content_bgAvatar">
                    <div className="Profile-Content_bgAvatar-card">

                        <img className='Profile-Content_bgAvatar-image' src={require('../../assets/img/avartar.jpg')} />

                    </div>
                </div>
                <div className="Profile-Content_Description">

                    <h3 className='Profile-Content_Info-Name'>Chu Thị Ánh Tuyết</h3>
                    <div className="Profile-Content_Description-Worker">
                        <div className="Profile-Content_Description-Worker_title">
                            <h2>MSNV:</h2>
                            <h2>Chức vụ:</h2>
                            <h2>Phòng:</h2>
                            <h2>Nơi làm việc:</h2>

                        </div>
                        <div className="Profile-Content_Description-Worker_value">
                            <p>1000</p> {/* ma nv */}
                            <p>Chuyên Viên Giao Dịch</p> {/*Chức vụ */}
                            <p>Phòng Giao Dịch</p> {/*Phòng ban */}
                            <p>Hội Sở</p>  {/*Nơi làm việc */}
                        </div>

                    </div>
                    <div className="Profile-Content_Description-Contact">
                        <div className="Profile-Content_Description-Contact_title">
                            <h2>Ngày Sinh:</h2>
                            <h2>email:</h2>
                            <h2>SĐT Cá Nhân:</h2>

                        </div>
                        <div className="Profile-Content_Description-Contact_value">
                            <p>1989</p> {/*Ngày Sinh*/}
                            <p>tuyetEmail@gmail.com</p>  {/*email*/}
                            <p>113</p> {/*Số điện Thoại*/}
                        </div>

                    </div>

                </div>
            </div>

            <div className="Profile-Footer">


            </div>
            {/* <img src={require("../assets/img/footer.jpg")} /> */}
        </div>
    )
}

export default UserProfile