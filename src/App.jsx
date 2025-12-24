import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Components from "./pages/Components"
import ButtonDoc from "./components/docs/ButtonDocs"; 
import CardsDoc from "./components/docs/CardDocs";
import Navbar from "./components/layout/navbar";
import HeroDoc from "./components/docs/HeroDoc";
import Search from "./pages/Search";
import BadgeDoc from "./components/docs/BadgeDoc";
import Favorites from "./pages/Favorites";
import ToastDoc from "./components/docs/ToastDoc";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/search" element={<Search />} />
        <Route path="/docs/buttons" element={<ButtonDoc />} />
        <Route path="/docs/cards" element={<CardsDoc />} />
        <Route path="/docs/hero" element={<HeroDoc />} />
        <Route path="/docs/badges" element={<BadgeDoc />} />
        <Route path="/docs/toast" element={<ToastDoc />} />
      </Routes>
    </div>
  )
}
