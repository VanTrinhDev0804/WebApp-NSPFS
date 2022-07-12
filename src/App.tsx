import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageRender from './PageRender';
import { useAppDispatch } from './redux/hooks';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase/cofig';
import { addProFile } from './redux/slice/profileSlice';
import { addAdmin } from './redux/slice/authSlice';

function App() {

  const dispatch = useAppDispatch()

  // get data fire base
  const dataCollectionRef = collection(db, 'dsNhanVien');
  const dataCollectionRefAdmin = collection(db, 'manage');
  useEffect(() => {
    let result: any = []
    const getData = async () => {
      const querySnapshot = await getDocs(dataCollectionRef)
      querySnapshot.forEach((doc) => {
        result.push({ id: `${doc.id}`, ...doc.data() })
      })
      dispatch(addProFile(result))
    }
    const ad : any =[]
    const getAdmin =async () => {
      const querySnapshot = await getDocs(dataCollectionRefAdmin)
      querySnapshot.forEach((doc) => {
        ad.push({ id: `${doc.id}`, ...doc.data() })
      })
      dispatch(addAdmin(ad))
    } 
    getAdmin()
    getData()
  }, [])
  return (
    <>
    <BrowserRouter>
        <Switch>
            <Route path="/" component={PageRender} exact />
            <Route path="/:page" component={PageRender} exact />
            <Route path="/:page/:id" component={PageRender} exact />
        </Switch>
    </BrowserRouter>
</>
  );
}

export default App;
