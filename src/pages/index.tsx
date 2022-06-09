import React from 'react'
import { useParams } from 'react-router-dom'
import UserProfile from '../component/profile';
import { IParams } from '../types'
// import './styles.scss';


const Home = () => {

  const { id }: IParams = useParams();
  console.log(id)
  return (
    <div className="HomePage">
        <UserProfile/>
    </div>

  )
}

export default Home