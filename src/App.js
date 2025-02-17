import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./component/navbar";
import Footer from "./component/Footer";

function App() {
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
