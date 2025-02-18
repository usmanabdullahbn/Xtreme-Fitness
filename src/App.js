import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./component/navbar";
import Footer from "./component/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
