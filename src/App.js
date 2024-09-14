import { Routes, Route } from "react-router-dom";
import NavBar from "./pages/NavBar";
import Footer from "./pages/Footer";
import BoutiqueMain from "./pages/BoutiqueMain";
import LoginPage from "./pages/LoginPage";
import { ContactPage } from "./pages/Contact";
import SoulfulBenaras from "./pages/SoulfulBenaras";
import DeccanHeritage from "./pages/DeccanHeritage";
import ShonarBangla from "./pages/ShonarBangla ";
import RangiloRajasthan from "./pages/RangiloRajasthan";
import KashmirkiKali from "./pages/KashmirkiKali";
import OrissaOdyssey from "./pages/OrissaOdyssey";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<BoutiqueMain />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/soulfulbanaras" element={<SoulfulBenaras />} />
        <Route path="/deccanheritage" element={<DeccanHeritage />} />
        <Route path="/shonarbangla" element={<ShonarBangla />} />
        <Route path="/rangilorajasthan" element={<RangiloRajasthan />} />
        <Route path="/kashmirkali" element={<KashmirkiKali />} />
        <Route path="/orissaodyssey" element={<OrissaOdyssey />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product" element={<ProductDetails productId="1"/>} />
        <Route path="*" element={<h1>page not found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
