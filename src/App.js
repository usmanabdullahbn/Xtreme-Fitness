import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import Loader from "./component/Loader";
import Navbar from "./component/navbar";
import ScrollToTop from "./component/ScrollUp";
import Home from "./pages/Home";

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
