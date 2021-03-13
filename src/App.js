import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Route} from 'react-router-dom';
import {checkUserSession} from './redux/user/user.actions';
//components
// import Header from './components/header';
import AdminToolbar from './components/admintoolbar/AdminToolbar';

//hoc
import WithAuth from './hoc/WithAuth';
import WithAdminAuth from './hoc/WIthAdminAuth';
//layouts
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';
import AdminLayout from './layouts/AdminLayout';
import DashboardLayout from './layouts/DashboardLayout';

//pages
import Homepage from './pages/homepage/Homepage';
import Registration from './pages/registration/Registration';
import Login from './pages/login/Login';
import Recovery from './pages/recovery/Recovery';
import Dashboard from './pages/dashboard/Dashboard';
import Admin from './pages/admin/Admin';
import Search from './pages/search/Search';
import './default.scss';


const App = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <div className="App">
      <AdminToolbar/>

          <Route exact path="/" render={() => (
           <HomepageLayout>
             <Homepage/>
           </HomepageLayout>
         )}/>
         <Route exact path="/search" render={() => (
           <MainLayout>
             <Search/>
           </MainLayout>
         )} /> 
         <Route path="/search/:filterType" render={() => (
           <MainLayout>
             <Search/>
           </MainLayout>
         )} /> 
          <Route path="/registration" render={() =>  (
           <MainLayout>
             <Registration/>
           </MainLayout>
         )}/>
          <Route path="/Login" 
          render={() => (
            <MainLayout>
              <Login/>
            </MainLayout>
          )}/>
          <Route path="/recovery" render={() => (
            <MainLayout>
              <Recovery/> 
            </MainLayout>
          )} />
          <Route path="/dashboard" render={() => (
            <WithAuth>
             <DashboardLayout>
               <Dashboard/>     
             </DashboardLayout>
            </WithAuth>
          )} />
          <Route path="/admin" render={() => (
            <WithAdminAuth>
              <AdminLayout>
                <Admin/> 
              </AdminLayout>
            </WithAdminAuth>
          )} />
          <Route path="/lgu" render={() => (
            <WithAdminAuth>
              <AdminLayout>
                <Admin/> 
              </AdminLayout>
            </WithAdminAuth>
          )} />=
  
    </div>
  );
}


export default App;
