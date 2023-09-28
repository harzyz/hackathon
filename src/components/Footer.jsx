import './footer.css'
import { Link } from 'react-router-dom'
import img01 from '../../public/Images/insta.png'
import img02 from '../../public/Images/twitterX.png'
import img03 from '../../public/Images/meta.png'
import img04 from '../../public/Images/linkedin.png'
import img05 from '../../public/Images/tel.png'
import img06 from '../../public/Images/locate.png'

function Footer() {
  return (
    <div className='mb9'>
      <div className="footer">
        <div className="description">
          <span className="descContainer">
            <span>
              <Link to='/'><div className='footerBrand'>get<span className="linked">linked</span></div></Link>
              <p className="footerNote">Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology</p>
            </span>
            <span className='footerNote'>Terms of Use <span className="linked">| </span> Privacy Policy</span>
          </span>
        </div>
        <div className="socials">
          <div className="usefulLinks">
            <p className='linked'>Useful Links</p>
            <p>Overview</p>
            <p>Timeline</p>
            <p>FaQs</p>
            <p>Register</p>
            <span className='followUs'>
              <p className='linked'>Follow Us</p>
              <span className='socialsIcon'>
                <img src={img01} alt="" />
                <img src={img02} alt="" />
                <img src={img03} alt="" />
                <img src={img04} alt="" />
              </span>
            </span>
          </div>
          <div className="contactUs">
            <p className='linked'>Contact Us</p>
            <span className='telLocate'>
              <span><img src={img05}alt="" /></span>
              <span>+234 6707653444</span>
            </span>
            <span className='telLocate'>
              <span><img src={img06}alt="" /></span>
              <p>27,Alara Street<br />Yaba 100012<br />Lagos State</p>
            </span>
          </div>
        </div>
      </div>
      <div className="copyRight">All rights reserved. © getlinked Ltd.</div>
    </div>
  )
}

export default Footer

