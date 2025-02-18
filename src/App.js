import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./component/navbar";
import Footer from "./component/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import ScrollToTop from "./component/ScrollUp";
import Loader from "./component/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
