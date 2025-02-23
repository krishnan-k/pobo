import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Doctor from "./pages/Doctor";
import Hospital from "./pages/Hospital";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="font-script">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctor />} />
          <Route path="/hospitals" element={<Hospital />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
