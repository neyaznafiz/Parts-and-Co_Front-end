import { Route, Routes } from 'react-router-dom'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home'
import About from './Pages/About'
import Login from './Pages/UserAuthentication/Login'
import Signup from './Pages/UserAuthentication/Signup'
import NotFound from './Components/NotFound';
import MyPortfolio from './Pages/MyPortfolio';
import Dashboard from './Pages/Dashboard/Dashboard';
import Blog from './Pages/Blog';
import MyOrders from './Pages/Dashboard/MyOrders';
import PrivateRoute from './Routes/PrivateRoute';
import AddProduct from './Pages/Dashboard/AddProduct';
import MyProfile from './Pages/Dashboard/MyProfile';
import AddaReview from './Pages/Dashboard/AddaReview';


function App() {
  return (
    <div className='flex'>

      <Navbar>


        <Routes>

          <Route path='/' element={<Home></Home>}></Route>

          {/* private route */}
          <Route element={<PrivateRoute></PrivateRoute>}>
            <Route path='/dashboard' element={<Dashboard></Dashboard>} >
              <Route path='myprofile' element={<MyProfile></MyProfile>} ></Route>
              <Route path='myorders' element={<MyOrders></MyOrders>} ></Route>
              <Route path='addproduct' element={<AddProduct></AddProduct>} ></Route>
              <Route path='addareview' element={<AddaReview></AddaReview>} ></Route>
            </Route>
          </Route>

          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>

        </Routes>

        <ToastContainer />

      </Navbar>
    </div>
  );
}

export default App;
