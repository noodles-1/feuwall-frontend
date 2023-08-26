import Footer from "./Footer"
import Header from "./Header"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import Create from "./Create"
import General from "./General"
import Romantic from "./Romantic"
import Platonic from "./Platonic"
import Senti from "./Senti"
import Random from "./Random"

function App() {
  return (
    <>
      <Router>
        <Footer />

        <Routes>
          <Route path="/" element={<Header />}>
            <Route exact path="/" element={<Navigate to="home" />} />
            <Route path="home" element={<General />} />
            <Route path="romantic" element={<Romantic />} />
            <Route path="platonic" element={<Platonic />} />
            <Route path="senti" element={<Senti />} />
            <Route path="random" element={<Random />} />
          </Route>
          <Route path="create" element={<Create />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
