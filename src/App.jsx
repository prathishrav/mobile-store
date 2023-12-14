// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Landing from './Components/Landing';
import Footer from './Components/Footer';
import Brand from './Components/sections/Brand';
import Error from './Components/Error';
import Login from './Components/pages/logins/Login';
import Signup from './Components/pages/logins/Signup';
import DashBoard from './Components/pages/logins/DashBoard';
import Mycart from './Components/pages/Mycart';
import ProductDetails from './Components/Mobiles/ProductDetails';
import BrandDetails from './Components/Mobiles/BrandDetails';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/brand/:brandId" element={<BrandDetails />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/404" element={<Error />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/Mycart" element={<Mycart />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
