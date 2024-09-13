import { Routes, Route } from "react-router-dom";
// import CampusWebsite, { LoginPage } from "./pages/CampusWebsite";
import NavBar, { LoginPage } from "./pages/NavBar";
import Footer from "./pages/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        {/* <Route path="/" element={} /> */}
        {/* <Route path="/login" element={<LoginPage />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
