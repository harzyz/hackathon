import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage'
import RegisterPage from './components/RegisterPage'
// import Footer from './components/Footer'
import ContactPage from './components/ContactPage'
import Navbar from './components/Navbar'
// import Navbar from './components/Navbar'

function App() {
  const styleContact = true;
  return (
    <>
    <div className='wrapper'>
      <div className="container">
      <Router> 
      <div>
        <Navbar styleContact={styleContact} />
        
        <Routes>
          {/* Define routes for each page */}
          <Route exact path="/" element={ <LandingPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
      </div>
    </div>
    </>
  )
}

export default App
