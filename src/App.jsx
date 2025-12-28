import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Components from "./pages/ComponentsIndex";
import ButtonDoc from "./components/docs/ButtonDocs";
import CardsDoc from "./components/docs/CardDocs";
import Navbar from "./components/layout/Navbar";
import HeroDoc from "./components/docs/HeroDoc";
import Search from "./pages/Search";
import BadgeDoc from "./components/docs/BadgeDoc";
import Favorites from "./pages/Favorites";
import ToastDoc from "./components/docs/ToastDoc";
import ModalDoc from "./components/docs/ModalDoc";
import ErrorBoundary from "./components/system/ErrorBoundary";
import ProtectedRoute from "./components/system/ProtectedRote";
import Login from "./pages/Login";
import PricingDoc from "./components/docs/PricingDoc";
import TexturedBackgroundDoc from "./components/docs/TexturedBackgroundDoc";
import ScrollRevealDoc from "./components/docs/ScrollRevealDoc";
import Card3DDoc from "./components/docs/Card3DDoc";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
        <Route path="/favorites" element={<ProtectedRoute><Favorites /></ProtectedRoute>} />
        <Route path="/search" element={<Search />} />
        <Route path="/test" element={<TestModal />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/docs/buttons" element={<ButtonDoc />} />
        <Route path="/docs/cards" element={<CardsDoc />} />
        <Route path="/docs/hero" element={<HeroDoc />} />
        <Route path="/docs/badges" element={<BadgeDoc />} />
        <Route path="/docs/modal" element={<ModalDoc />} />
        <Route path="/docs/pricing" element={<PricingDoc />} />
        <Route path="/docs/textured-background" element={<TexturedBackgroundDoc />} />
        <Route path="/docs/scroll-reveal" element={<ScrollRevealDoc />} />
        <Route path="/docs/card-3d" element={<Card3DDoc />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
