import React from 'react'

import { Table } from 'antd'
import './styles.scss';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../redux/hooks';


const TableUser = () => {
    const { data } = useAppSelector(state => state.profile);
    // const data = [{
    //     id:'1053',
    //     maNV: '1053',
    //     tenNV: 'Chu Thị Ánh Tuyết',
    //     chucVu: 'Giao Dịch Viên',
    //     phong:'Phòng Giao Dịch',
    //     noiLV: 'Hội Sở',
    //     ngaySinh: '1998',
    //     email: 'tuyet@gmail.com',
    //     sdt: '113',
    //     update: '/update',
    //     img: 'https://firebasestorage.googleapis.com/v0/b/pfs-ns-99fd1.appspot.com/o/Image%2Favartar.jpg?alt=media&token=fecd72e9-8bf8-4bf6-b721-a2677aacf8fe'
        
    // }]

    const columns = [
        {
            title: 'Mã Nhân Viên',
            dataIndex: 'maNV',
            key: 'maNV',
        },
        {
            title: 'Họ Tên ',
            dataIndex: 'tenNV',
            key: 'tenNV',
        },
        {
            title: 'Chức Vụ',
            dataIndex: 'chucVu',
            key: 'chucVu',
        },
        {
            title: 'Phòng',
            dataIndex: 'phong',
            key: 'phong',
        },
        {
            title: 'Nơi Làm Việc',
            dataIndex: 'noiLV',
            key: 'noiLV',
        },
        {
            title: 'Ngày Sinh',
            dataIndex: 'ngaySinh',
            key: 'ngaySinh',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Số Điện Thoại',
            dataIndex: 'sdt',
            key: 'sdt',
        },
        // {
        //     title: 'Ảnh Hồ Sơ',
        //     dataIndex: 'img',
        //     key: 'img',
        // },
        {
            title: '',
            dataIndex: 'update',
            render: (link: string, record: any) => (
                <Link to={ `${link}/${record.maNV}`}
                    style={{
                        whiteSpace: 'nowrap'
                    }}
                >Sửa</Link>
            )
        },
    ]


  return (
    <div>

        <Table 
            dataSource={data} 
            columns = {columns}
            />
    </div>
  )
}

export default TableUser