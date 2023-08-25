import Footer from "./Footer"
import Header from "./Header"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Create from "./Create"
import General from "./General"
import Romantic from "./Romantic"
import Platonic from "./Platonic"

function App() {
  return (
    <>
      <Router>
        <Footer />
        <Routes>
          <Route exact path="/" element={<Header />}>
            <Route path="/general" element={<General />} />
            <Route path="/romantic" element={<Romantic />} />
            <Route path="/platonic" element={<Platonic />} />
          </Route>
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
