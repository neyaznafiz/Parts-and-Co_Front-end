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
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import PrivateRoute from './Routes/PrivateRoute';
import AddProduct from './Pages/Dashboard/AddProduct';
import MyProfile from './Pages/Dashboard/MyProfile/MyProfile';
import AddaReview from './Pages/Dashboard/AddaReview';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders/ManageAllOrders';
import AllProducts from './Pages/Products/AllProducts';
import Purchase from './Pages/Purchase/Purchase';
import EditProfile from './Pages/Dashboard/MyProfile/EditProfile';
import MyAddedItems from './Pages/Dashboard/MyAddedItems/MyAddedItems';
import AllUsers from './Pages/Dashboard/AllUser/AllUsers';
import MyReview from './Pages/Dashboard/MyReviews/MyReview';
import Payment from './Pages/Dashboard/Payment/Payment';
// import Payment from './Pages/Dashboard/Payment/Payment';



function App() {
  return (
    <div className='flex'>

      <Navbar>


        <Routes>

          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/allproducts' element={<AllProducts></AllProducts>}></Route>


          {/* private route */}
          <Route element={<PrivateRoute></PrivateRoute>}>
            <Route path='/editprofile' element={<EditProfile></EditProfile>}></Route>

            <Route path='/dashboard' element={<Dashboard></Dashboard>} >
              <Route path='myprofile' element={<MyProfile></MyProfile>} >
              {/* <Route path='/editprofile' element={<EditProfile></EditProfile>} />
              <Route path='/editprofile/:Id' element={<EditProfile></EditProfile>} /> */}
              </Route>
              <Route path='allusers' element={<AllUsers></AllUsers>} ></Route>
              <Route path='myorders' element={<MyOrders></MyOrders>} ></Route>
              {/* <Route path='myorders/:Id' element={<MyOrders></MyOrders>} ></Route> */}
              <Route path='payment/:Id' element={<Payment></Payment>} ></Route>
              <Route path='manageallorders' element={<ManageAllOrders></ManageAllOrders>} ></Route>
              <Route path='addproduct' element={<AddProduct></AddProduct>} ></Route>
              <Route path='addareview' element={<AddaReview></AddaReview>} ></Route>
              <Route path='myreview' element={<MyReview></MyReview>} ></Route>
              <Route path='myaddeditems' element={<MyAddedItems></MyAddedItems>} ></Route>
            </Route>

            <Route path='/purchase' element={<Purchase />} ></Route>
            <Route path='/purchase/:Id' element={<Purchase />} ></Route>
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
