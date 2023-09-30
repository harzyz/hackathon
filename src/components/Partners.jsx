import './partners.css'
import img01 from '../../public/Images/Liberty company logo white colour.png'
import img02 from '../../public/Images/Liberty company logo white.png'
import img03 from '../../public/Images/Winwise logo White colour 1.png'
import img04 from '../../public/Images/wisper logo white.png'
import img05 from '../../public/Images/Paybox.png'
import img06 from '../../public/Images/Vizual Plus.png'
import img07 from '../../public/Images/libertyMobile.png'
import img08 from '../../public/Images/Liberty2Mobile.png'
import img09 from '../../public/Images/WinwiseMobile.png'
import img10 from '../../public/Images/wisperMobile.png'
import img11 from '../../public/Images/PayboxMobile.png'
import img12 from '../../public/Images/VuzualPlusMobile.png'
import star1 from '../../public/Images/starPurple.png'
import star2 from '../../public/Images/starWhite.png'

function Partners() {
  return (
    <div>
      <div className="eightPart">
        <div className="glareS"></div>
        <div className="glareS1"></div>
        <img className='starPurpleS' src={star1} alt="" />
        <img className='starPurpleS1' src={star1} alt="" />
        <img className='starWhiteS' src={star2} alt="" />
        <h1 className="subTitle3" >Partners and Sponsors</h1>
        <p className="partnersNote">Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>
        <div className="sponsors">
          <span className='sporsorsContainer'>
            <span className='sporsorsLogo'>
            <img className='paybox' src={img01} alt="" />
            </span>
            <div className="verticalPipes"></div>
            <span className='sporsorsLogo'>
            <img className='liberty' src={img02} alt="" />
            </span>
            <div className="verticalPipes"></div>
            <span className='sporsorsLogo'>
            <img className='paybox' src={img03} alt="" />
            </span>
          </span>
          <span className='horizontalContainer'>
            <div className="horizontalPipe"></div>
            <div className="horizontalPipe"></div>
            <div className="horizontalPipe"></div>
          </span>
          <span className='sporsorsContainer'>
            <span className='sporsorsLogo'>
            <img className='paybox' src={img04} alt="" />
            </span>
            <div className="verticalPipes"></div>
            <span className='sporsorsLogo'>
            <img className='paybox' src={img05} alt="" />
            </span>
            <div className="verticalPipes"></div>
            <span className='sporsorsLogo'>
            <img className='paybox' src={img06} alt="" />
            </span>
          </span>
          <span className='sporsorsContainer2'>
            <span className='sporsorsLogo'>
            <img  src={img07} alt="" />
            </span>
            <div className="verticalPipes"></div>
            <span className='sporsorsLogo'>
            <img src={img08} alt="" />
            </span>
            <div className="verticalPipes"></div>
            <span className='sporsorsLogo'>
            <img  src={img09} alt="" />
            </span>
          </span>
          <span className='horizontalContainer2'>
            <div className="horizontalPipe"></div>
            <div className="horizontalPipe"></div>
            <div className="horizontalPipe"></div>
          </span>
          <span className='sporsorsContainer2'>
            <span className='sporsorsLogo'>
            <img  src={img10} alt="" />
            </span>
            <div className="verticalPipes"></div>
            <span className='sporsorsLogo'>
            <img  src={img11} alt="" />
            </span>
            <div className="verticalPipes"></div>
            <span className='sporsorsLogo'>
            <img  src={img12} alt="" />
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Partners
