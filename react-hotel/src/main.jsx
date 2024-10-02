import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavbarComponent from './component/Navbar/NavbarComponent.jsx';
import FooterComponent from './component/Footer/Footer.jsx';
import About from './component/RoomConponent/About.jsx';
import Contact from './component/RoomConponent/Contact.jsx';
import Wwa from './component/RoomConponent/Wwa.jsx';
import RegisterComponent from './component/login/RegisterComponent.jsx';
import LoginComponent from './component/login/LoginComponent.jsx';
import Middleware from './component/service/token/Middleware.jsx';
import AdminViewComponent from './component/admin/AdminViewComponent.jsx';
import RoomDetail from './component/RoomConponent/RoomDetail.jsx';
import Roomlist from './component/RoomConponent/RoomList.jsx';
import RoomDetailUser from './component/user/RoomDetailUser.jsx';
import AdminViewRecord from './component/admin/AdminViewRecord.jsx';
import AdminMiddleware from './component/service/token/AdminMiddleware.jsx';
import SecurityMiddlware from './component/service/token/SecurityMiddlware.jsx';
import UserRecord from './component/user/UserRecord.jsx';
import UserMiddleware from './component/service/token/UserMiddleware.jsx';
 
   createRoot(document.getElementById('root')).render(
   <StrictMode>
    <BrowserRouter>
    <NavbarComponent/>
    <Routes>
      <Route path='/' element={<About/>}/>
      <Route  path='/service' element={<Roomlist/>}/>
      <Route path='/contact-us' element={
       
          <Contact/>
        
      }/>
      <Route path='/about' element={<Wwa/>}/>
      <Route path='/register-page' element={<SecurityMiddlware>
        <RegisterComponent/>
      </SecurityMiddlware> }/>
      <Route path='/login-page' element={ 
        <SecurityMiddlware>
          <LoginComponent/>
        </SecurityMiddlware>
      }/>
      <Route path='/admin-view' element={ 
        <AdminMiddleware>
          <AdminViewComponent/>
        </AdminMiddleware>
      }/>
      <Route path='/my-reservation' element={
        <Middleware>
          <RoomDetailUser/>
        </Middleware>
        }/>
        <Route path='/admin-record' element={
        <AdminMiddleware>
          <AdminViewRecord/>
        </AdminMiddleware>
        }/>
        <Route path='/user-record' element={
          <UserRecord/>         
        } />
       
      <Route path='/book/:id' element={ 
        <Middleware>
          <RoomDetail/>
        </Middleware>
      }/> 
     </Routes>
    <App />
    <FooterComponent/>
    </BrowserRouter>
  </StrictMode>,
)
