import { Route, Routes } from 'react-router-dom'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home'
import About from './Pages/About'
import Login from './Pages/UserAuthentication/Login'
import Signup from './Pages/UserAuthentication/Signup'
import NotFound from './Components/NotFound';


function App() {
  return (
    <div className='flex'>

      <Navbar></Navbar>

      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>

      <ToastContainer />

    </div>
  );
}

export default App;
