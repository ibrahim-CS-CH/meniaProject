import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import AboutUS from './pages/AboutUS'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import Login from './pages/Login'
import Ourservices from './pages/Ourservices'
import OurTeam from './pages/OurTeam'
import Latest from './components/Latest'
import ChangePasswd from './components/ChangePasswd'
import DashBoard from './pages/DashBoard'
import Landing from './components/Landing'
import SharedLayout from './components/SharedLayout'
import Error from './pages/Error'
import Signup from './pages/Signup'
import NewAdmin from './components/dashboard/NewAdmin'
import Cases from './components/dashboard/Cases'
import Admin from './components/dashboard/Admin'
import Doctors from './components/dashboard/Doctors'
import Users from './components/dashboard/Users'
import HomeUser from './pages/HomeUser'
import Diagnos from './pages/Diagnos'
import Profile from './pages/Profile'
import FeedBackUser from './pages/FeedBackUser'
import HomeDoc from './pages/HomeDoc'
import DignosDoc from './pages/DignosDoc'
import ProfileDoc from './pages/ProfileDoc'
import FeedDoctor from './pages/FeedDoctor'
import Verified from './pages/Verified'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path='*' element={<Error />} />
          </Route>
        </Route>
        <Route>
          <Route path='/dashboard' element={<DashBoard />}/>
          <Route path='/newadmin' element={<NewAdmin/>}/>
          <Route path='/cases' element={<Cases/>}/>
          <Route path='/admin' element={<Admin />}/>
          <Route path='/doctors' element={<Doctors />}/>
          <Route path='/users' element={<Users />}/>
        </Route>
        <Route>
          <Route path='/home' element={<HomeUser />}/>
          <Route path='/diagnos' element={<Diagnos />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/fedUser' element={<FeedBackUser />}/>
        </Route>
        <Route>
          <Route path='homeDoctor' element={<HomeDoc />} />
          <Route path='dignosDoctor' element={<DignosDoc />} />
          <Route path='profileDoctor' element={<ProfileDoc />} />
          <Route path='feedDoctor' element={<FeedDoctor />} />
          <Route path='verified' element={<Verified />} />
        </Route>
        <Route path='login' element={<Login />}/>
        <Route path='register' element={<Signup />}/>
        
      </Routes>
    </BrowserRouter>
  )
}
export default App
