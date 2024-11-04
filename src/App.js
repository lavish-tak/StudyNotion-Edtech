import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/common/Navbar';
import OpenRoute from './components/core/Auth/OpenRoute';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import VerifyEmail from './pages/VerifyEmail';
import About from "./pages/About"
import MyProfile from './components/core/Dashboard/MyProfile';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/core/Auth/PrivateRoute';

function App() {
  return (
   <>
   <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
    <Navbar/>
    <Routes >
       <Route path="/" element={<Home/>} />
       <Route path="/about" element={<About />} />
       {/* <Route path='/contact' element={<Contact/>}/> */}
       <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route
        path='forgot-password'
        element={
          <OpenRoute>
            <ForgotPassword/>
          </OpenRoute>
        }
        />
        <Route
        path='verify-email'
        element={
          <OpenRoute>
            <VerifyEmail/>
          </OpenRoute>
        }
        />
        <Route
          element={<PrivateRoute>
            <Dashboard/>
          </PrivateRoute>}
        >
          <Route path='dashboard/my-profile' element={<MyProfile/>}/>
          {/* <Route path='dashboard/setting' element={<Setting/>}/> */}

        </Route>
        
    </Routes>
   </div>
   </>
  );
}

export default App;
