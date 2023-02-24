import './App.css';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
import Home from './Pages/Home/Home';
import Cart from './Pages/cart/Cart.jsx';
import Contact from './Pages/contact/Contact.jsx';
import Shop from './Pages/shop/Shop.jsx';
=======
import Home from './Pages/Home';
import ProductDetails from './Pages/ProductDetails';
import Profile from './Pages/Profile';
import Products from './Pages/Products';
import Footer from './Components/Footer/Footer';
import Page404 from './Pages/Page404';
>>>>>>> 33eb0ad51a8fe67cd6b79bfc4c9c2b3e833627e3

function App() {
  return (
    <>
      <div className='APP_bg'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
<<<<<<< HEAD
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='Cart' element={<Cart />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='home' element={<Home />} />
          <Route path='shop' element={<Shop />} />
=======
          <Route path='*' element={<Page404 />} />
          <Route path='/login' element={<Login />} />
          <Route path='/products' element={<Products />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/productdetails' element={<ProductDetails />} />
          <Route path='/home/productdetails' element={<ProductDetails />} />
          <Route path='/profile' element={<Profile />} />
>>>>>>> 33eb0ad51a8fe67cd6b79bfc4c9c2b3e833627e3
        </Routes>
        <Footer />
      </div>

    </>
  );
}

export default App;
