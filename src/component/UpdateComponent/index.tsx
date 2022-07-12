import { Button, Form, Input, Result, Upload, UploadFile, UploadProps } from 'antd'
import { RcFile } from 'antd/lib/upload';
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { UpdateData, WriteDataGenerateID } from '../../firebase/AsyncActtions';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { updateProfileSlice } from '../../redux/slice/profileSlice';
import { IParams } from '../../types';
import './styles.scss'

const UpdateNhanSu = () => {
    const dispatch = useAppDispatch()
    const { id }: IParams = useParams();
    const { data } = useAppSelector(state => state.profile)

    const curr = data?.find(item => item.maNV === id)

    const [imgText, setImgText] = useState(curr?.img);
    const [maNV, setMaNV] = useState(curr?.maNV)
    const [tenNV, setTenNV] = useState(curr?.tenNV)
    const [chucVu, setChucVu] = useState(curr?.chucVu)
    const [phong, setPhong] = useState(curr?.phong)
    const [noiLV, setNoiLV] = useState(curr?.noiLV)
    const [ngaySinh, setNgaySinh] = useState(curr?.ngaySinh)
    const [email, setEmail] = useState(curr?.email)
    const [sdt, setSdt] = useState(curr?.sdt)






    // Upload ảnh 
    const [fileList, setFileList] = useState<UploadFile[]>([
        {
            uid: '',
            name: '',
            status: 'done',
            url: curr?.img,
        },
    ]);

    const pr: UploadProps = {
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        listType: 'picture-card',
        beforeUpload(file) {
            return new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    const img = document.createElement('img');
                    
                    img.src = reader.result as string;
                    img.onload = () => {

                        const canvas = document.createElement('canvas') 
                        canvas.width = img.naturalWidth;
                        canvas.height = img.naturalHeight;
                      

                        const ctx = canvas.getContext('2d')!;
                        ctx.drawImage(img, 0, 0 , 400, 600);
                    
                        ctx.textBaseline = 'middle';
                        canvas.toBlob(result => resolve(result as any));
                        if (reader.result) {
                            setImgText(reader.result as string);
                        }
                        
                    };
                };
            });
        },
    };
    const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };


    const onPreview = async (file: UploadFile) => {
        let src = file.url as string;
        if (!src) {
            src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj as RcFile);
                reader.onload = () => {


                    resolve(reader.result as string)
                };
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
        // console.log(imgText)

    };




    // handle

    const handleUpdate = () => {
        const dataUpdate = {
            id : curr?.id,
            maNV: maNV,
            tenNV: tenNV,
            chucVu: chucVu,
            phong: phong,
            noiLV: noiLV,
            ngaySinh: ngaySinh,
            email: email,
            sdt: sdt,
            update: '/update',
            img: imgText
        }





        const isEmty = Object.values(dataUpdate).includes('')

        if (isEmty) {
            alert("Phải điền đầy đủ thông tin")
        }
        else {
            const ID = curr?.id
            UpdateData(dataUpdate,"dsNhanVien", ID )
            dispatch(updateProfileSlice(dataUpdate))
            alert("Cập nhật Thành Công")

        }

    }


    return (
        <div className="main-app">
            <div className="main-app_header">
                <h2>
                    CẬP NHẬT THÔNG TIN
                </h2>

            </div>
            <div className="main-app_content">
                <div className="Users-Profile">
                    <div className="Users-Profile_Avatar">

                        <Upload
                            {...pr}
                            fileList={fileList}
                            onChange={onChange}
                            onPreview={onPreview}
                        >
                            {fileList.length < 1 && 'Chọn ảnh'}
                        </Upload>
                    </div>
                    <div className="Users-Profile_Form">
                        <Form
                            layout="vertical"
                            className='Users-Profile_FormLeft'
                        >
                            <Form.Item
                                label="Mã Nhân Viên "
                                name="maNV"

                                initialValue={maNV}
                            >
                                <Input
                                    type="text"
                                    name="maNV"
                                    onChange={(e) => setMaNV(e.target.value)}
                                />
                            </Form.Item>
                            <Form.Item
                                label="Họ Tên Nhân Viên"
                                name="tenNV"
                                initialValue={tenNV}
                            >
                                <Input
                                    type="text"
                                    name="tenNV"
                                    onChange={(e) => setTenNV(e.target.value)}
                                />
                            </Form.Item>
                            <Form.Item
                                label="Chức Vụ:"
                                name="chucVu"
                                initialValue={chucVu}
                            >
                                <Input
                                    type="text"
                                    name="chucVu"
                                    onChange={(e) => setChucVu(e.target.value)}
                                />
                            </Form.Item>
                            <Form.Item
                                label="Phòng/Ban:"
                                name="phong"

                                initialValue={phong}
                            >
                                <Input
                                    type="text"
                                    name="phong"
                                    onChange={(e) => setPhong(e.target.value)}
                                />
                            </Form.Item>

                        </Form>

                        <Form
                            layout="vertical"
                            className='Users-Profile_FormRight'
                        >
                            <Form.Item
                                label="Nơi làm việc"
                                name="noiLV"
                                initialValue={noiLV}
                            >
                                <Input
                                    type="text"
                                    name="noiLV"
                                    onChange={(e) => setNoiLV(e.target.value)}
                                />
                            </Form.Item>
                            <Form.Item
                                label="Ngày Sinh"
                                name="ngaySinh"
                                initialValue={ngaySinh}
                            >
                                <Input
                                    type="text"
                                    name="ngaySinh"
                                    onChange={(e) => setNgaySinh(e.target.value)}
                                />
                            </Form.Item>
                            <Form.Item
                                label="Email:"
                                name="email"
                                initialValue={email}
                            >
                                <Input
                                    type="email"
                                    name="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Item>
                            <Form.Item
                                label="Số điện thoại:"
                                name="sdt"
                                initialValue={sdt}
                            >
                                <Input
                                    type="text"
                                    name="sdt"
                                    onChange={(e) => setSdt(e.target.value)}
                                />
                            </Form.Item>
                        </Form>

                    </div>


                </div>

            </div>
            <div className='ContentThietbiMoi-btn-group'>
                <Button
                    type="primary"
                    className="btn-cancel" >
                    <Link to={'/dsns'}>
                        Hủy
                    </Link>


                </Button>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="btn-continue"
                    onClick={handleUpdate}
                >
                    Cập nhật


                </Button>


            </div>

        </div>
    )
}

export default UpdateNhanSu