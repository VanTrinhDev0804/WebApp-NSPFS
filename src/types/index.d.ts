import { ColumnsType } from "antd/lib/table"
import { Link } from "react-router-dom"
import { Interface } from "readline"
// interface path react rourter
export interface IParams {
  page?: string
  controll?: string
  id?: string
}



export interface IProfile{
  id?:string
  maNV?: string
  tenNV?: string
  chucVu?: string
  phong?:string
  noiLV?: string
  ngaySinh?: string
  email?: string
  sdt?: string
  img?: string
}

export interface IAdmin{
  name : string
  password: string
}

