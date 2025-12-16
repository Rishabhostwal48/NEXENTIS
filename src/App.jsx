import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Components from "./pages/Components"
import ComponentPreview from "./pages/ComponentPreview"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
        <Route path="/components/:name" element={<ComponentPreview />} />
      </Routes>
    </BrowserRouter>
  )
}
