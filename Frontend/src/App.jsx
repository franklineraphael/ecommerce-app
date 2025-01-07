import { useState } from "react";
// import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Collection from "./Page/Collection";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Product from "./Page/Product";
import Cart from "./Page/Cart";
import Login from "./Page/Login";
import Orders from "./Page/Orders";
import PlaceOrders from "./Page/PlaceOrders";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import SearchBar from "./component/SearchBar";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/product/:product id" element={<Product />} /> */}
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrders />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
