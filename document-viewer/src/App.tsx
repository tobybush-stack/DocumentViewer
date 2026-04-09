import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Viewer from "./pages/Viewer"
import Navbar from "./components/Navbar"

function App() {

  return (
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/Home" element={<Home></Home>}/>
          <Route path="/Viewer/:fileName" element={<Viewer />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App

