import { Avatar } from 'antd';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { ProfileState } from '../../redux/slice/profileSlice';
import { IParams, IProfile } from '../../types';


import './styles.scss'

const UserProfile = () => {

    const { data } = useAppSelector(state => state.profile)
    const { page }: IParams = useParams();
    let Curr  = data ? data.filter((it)=>{
        return it.maNV === page
    }) : []

    const showNV = Curr?.map((item, key) => {
        return (
            <div className='Profile' key={key}>
                <div className="Profile-Header">
                    <img className='Profile-Header_image'
                        src={require('../../assets/img/header.jpg')}
                    />
                    <div className="Profile-Header_GroupTitle">

                        <h2 className='Profile-Header_Title'>Giải Pháp Tài Chính</h2>
                        <h2 className='Profile-Header_SubTitle'>Hoàn Hảo</h2>
                    </div>


                </div>
                <div className="Profile-Content">
                    <div className="Profile-Content_bgAvatar">

                    <Avatar shape="square" size={'default'} icon={<img className='Profile-Content_bgAvatar-image' src={item.img}  />} />
                    </div>
                    <div className="Profile-Content_Description">

                        <h3 className='Profile-Content_Info-Name'>{item.tenNV}</h3>
                        <div className="Profile-Content_Description-Worker">
                            <div className="Profile-Content_Description-Worker_title">
                                <h2>MSNV:</h2>
                                <h2>Chức vụ:</h2>
                                <h2>Phòng:</h2>
                                <h2>Nơi làm việc:</h2>

                            </div>
                            <div className="Profile-Content_Description-Worker_value">
                                <p>{item.maNV}</p> {/* ma nv */}
                                <p>{item.chucVu}</p> {/*Chức vụ */}
                                <p>{item.phong}</p> {/*Phòng ban */}
                                <p>{item.noiLV}</p>  {/*Nơi làm việc */}
                            </div>

                        </div>
                        <div className="Profile-Content_Description-Contact">
                            <div className="Profile-Content_Description-Contact_title">
                                <h2>Ngày Sinh:</h2>
                                <h2>email:</h2>
                                <h2>SĐT Cá Nhân:</h2>

                            </div>
                            <div className="Profile-Content_Description-Contact_value">
                                <p>{item.ngaySinh}</p> {/*Ngày Sinh*/}
                                <p>{item.email}</p>  {/*email*/}
                                <p>{item.sdt}</p> {/*Số điện Thoại*/}
                            </div>

                        </div>

                    </div>
                </div>

                <div className="Profile-Footer">
                    <img src={require("../../assets/img/footer.jpg")} />
                </div>

            </div>
        )

    })



    return (
        <>
            {showNV}
        </>
    )
}

export default UserProfile