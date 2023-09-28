import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LandingPage from './components/LandingPage'
import RegisterPage from './components/RegisterPage'
// import Footer from './components/Footer'
import ContactPage from './components/ContactPage'
import Navbar from './components/Navbar'
import Virtualglasses from './components/virtualglasses';
import Thebigidea from './components/Thebigidea';
import Rulesandpolicy from './components/Rulesandpolicy';
import Judgingcriteria from './components/Judgingcriteria';
import Faqsection from './components/Faqsection';
import Timeline from './components/Timeline';
import Prizes from './components/Prizes';
import Partners from './components/Partners';
import PrivacyTerms from './components/PrivacyTerms';
import Footer from './components/Footer';
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
        <div className="line"></div>
        <Routes>
          <Route exact path="/" element={ 
            <>
            <Virtualglasses />
            <Thebigidea />
            <Rulesandpolicy />
            <Judgingcriteria />
            <Faqsection />
            <Timeline />
            <Prizes />
            <Partners />
            <PrivacyTerms />
            <Footer />
            </>
          }/>
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
