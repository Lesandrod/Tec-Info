import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Buscador from "./pages/Buscador"
import Footer from "./components/Footer"
function App() {



  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buscador" element={<Buscador />} />

      </Routes>
      <Footer />


    </>
  )
}

export default App

