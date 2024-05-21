import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from "./Pages/Homepage/Homepage"
import AboutUs from "./Pages/About us/AboutUs"
import Store from "./Pages/Store/Store"
import NotFound from "./Pages/404/NotFound"


const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
    </>
  )
}

export default App