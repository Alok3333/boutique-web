import { Routes, Route } from "react-router-dom";
// import CampusWebsite, { LoginPage } from "./pages/CampusWebsite";
import NavBar, { LoginPage } from "./pages/NavBar";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
