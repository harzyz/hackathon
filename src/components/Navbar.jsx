import PropTypes from 'prop-types'
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import exs from '../../public/Images/Close.png'
import './navbar.css'

function Navbar({styleContact}) {
  // const [bgBtn, setBgBtn] = useState(false)
  const [close, setClose] = useState(true)
  // const handlebgBtn = () => {
  //   setBgBtn(true)
  // }
  // let foo = document.getElementById('menuShow')
  const handleClose = () => {
    // foo.classList.toggle('open')
    setClose(!close)
  }
  // const btnClose = () => {
  //   foo.classList.toggle('open')
  //   // setClose(false)
  // }
  // const handleBoth = () => {
  //   // handlebgBtn();
  //   btnClose();
  // }
  
  

  return (
    <nav className="header">
      <Link to='/'><div className='brand'>get<span className="linked">linked</span></div></Link>
      <div className="navbar">
        <a href="#timeline"><p>Timeline</p></a>
        <a href="#overview"><p>Overview</p></a>
        <p>FAQs</p>
        <Link to='/contact'><p className={styleContact ? 'contact' : ''}>Contact</p></Link>
        <Link to='/register'><button className='registerBtn'>Register</button></Link>
      </div>
      <span onClick={handleClose} className="hamburger">
      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="14" viewBox="0 0 19 14" fill="none">
        <path d="M1.35714 0H8.14286C8.50279 0 8.84799 0.1475 9.1025 0.410051C9.35701 0.672601 9.5 1.0287 9.5 1.4C9.5 1.7713 9.35701 2.1274 9.1025 2.38995C8.84799 2.6525 8.50279 2.8 8.14286 2.8H1.35714C0.997206 2.8 0.652012 2.6525 0.397498 2.38995C0.142984 2.1274 0 1.7713 0 1.4C0 1.0287 0.142984 0.672601 0.397498 0.410051C0.652012 0.1475 0.997206 0 1.35714 0ZM10.8571 11.2H17.6429C18.0028 11.2 18.348 11.3475 18.6025 11.6101C18.857 11.8726 19 12.2287 19 12.6C19 12.9713 18.857 13.3274 18.6025 13.5899C18.348 13.8525 18.0028 14 17.6429 14H10.8571C10.4972 14 10.152 13.8525 9.8975 13.5899C9.64298 13.3274 9.5 12.9713 9.5 12.6C9.5 12.2287 9.64298 11.8726 9.8975 11.6101C10.152 11.3475 10.4972 11.2 10.8571 11.2ZM1.35714 5.6H17.6429C18.0028 5.6 18.348 5.7475 18.6025 6.01005C18.857 6.2726 19 6.6287 19 7C19 7.3713 18.857 7.7274 18.6025 7.98995C18.348 8.2525 18.0028 8.4 17.6429 8.4H1.35714C0.997206 8.4 0.652012 8.2525 0.397498 7.98995C0.142984 7.7274 0 7.3713 0 7C0 6.6287 0.142984 6.2726 0.397498 6.01005C0.652012 5.7475 0.997206 5.6 1.35714 5.6Z" fill="white"/>
      </svg>
      </span>
      <div id="menuShow" className={`hambugerMenu ${close ? '' : 'open'}`}>
        {/* <span className="closeContainer">
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
            <circle cx="11.5" cy="11.5" r="11" stroke="url(#paint0_linear_181_74)"/>
            <defs>
              <linearGradient id="paint0_linear_181_74" x1="11.5" y1="0" x2="11.5" y2="23" gradientUnits="userSpaceOnUse">
                <stop stopColor="#903AFF"/>
                <stop offset="1" stopColor="#FF26B9"/>
              </linearGradient>
            </defs>
          </svg>
        </span> */}
        {/* <img  className='closeImg' src={exs} alt="" /> */}
        
        <ul className="hamburgerList">
          <Link to='/'><li onClick={handleClose} className="hamburgerListItem"><a href="#timeline"><p>Timeline</p></a></li></Link>
          <Link to='/'><li onClick={handleClose} className="hamburgerListItem"><a href="#overview"><p>Overview</p></a></li></Link>
          <Link to='/'><li onClick={handleClose}  className="hamburgerListItem"><a href="#faqs">FaQs</a></li></Link>
          <li onClick={handleClose} className="hamburgerListItem"><Link to='/contact'><p className={styleContact ? 'contact' : ''}>Contact</p></Link></li>
          <Link to='/register'><button onClick={handleClose} className='registerBtn'>Register</button></Link>
        </ul>
      </div>
    </nav>
   
  )
}
// className={close ? 'hambugerMenu' : 'hambugerMenu1'}
Navbar.propTypes ={
  styleContact: PropTypes.bool
}
export default Navbar
