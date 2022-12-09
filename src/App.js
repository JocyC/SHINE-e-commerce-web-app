import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar, Sidebar, Footer } from "./components";
import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
  // AuthWrapper,
} from "./pages";

const App = () => {
  return (
    // <AuthWrapper>
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
        <Route path="products" element={<Products />} />
        <Route path="products/" element={<SingleProduct />} />
        {/* check if products/ works later */}
        <Route
          path="checkout"
          element={
            // <PrivateRoute>
            <Checkout />
            // </PrivateRoute>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    // </AuthWrapper>
  );
};

export default App;
