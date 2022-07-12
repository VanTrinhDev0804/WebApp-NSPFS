import React from 'react'
import TableUser from './table';
import './styles.scss';
import Controll from './controll';
import { useAppSelector } from '../../redux/hooks';
import { useHistory } from 'react-router-dom';



const ListNSComponent = () => {

  const { loading } = useAppSelector(state => state.admin)
  const history = useHistory()
  if(loading === false){
    history.push("/")
  }


  return (
    <div className="main-app">
      <div className="main-app_header">
        <h2>
          DANH SÁCH NHÂN VIÊN
        </h2>
        <div className="main-app_header-controler">
          <Controll />
        </div>
      </div>
      <div className="main-app_content">
        <TableUser />
      </div>


    </div>

  )
}

export default ListNSComponent