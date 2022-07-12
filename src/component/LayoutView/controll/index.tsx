import React from 'react'
import {Input, Button } from 'antd'

import './styles.scss'
import { Link } from 'react-router-dom'

const Controll = () => {

    const { Search } = Input
 
    const onSearch = (value: string) => {
        console.log(value)
    }
  return (
    <div className="ContentThietbi-control">
                    {/* Button */}
                    <div className="ContentThietbi-control-GroupBtn">
                    <Button
                    type="primary"
                    className="btn-Them" >
                    <Link to={'/addns'}>
                        Thêm
                    </Link>


                </Button>
                {/* <Button
                    type="primary"
                    htmlType="submit"
                    className="btn-continue"
                    // onClick={handleThemThietbi}
                >
                    Thêm thiết bị
                </Button>  */}



                    </div>
                    {/* Từ khóa*/}
                    <div className="ContentThietbi-control-search">
                        <h5 className='labelSelect'>
                            Từ khóa
                        </h5>
                        <Search
                            placeholder="Nhập từ khóa"
                            onSearch={onSearch}
                            bordered={false}
                            style={{ width:240 }} />

                    </div>
                </div>

  )
}

export default Controll