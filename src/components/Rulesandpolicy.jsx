import './rulesandpolicy.css'
import img07 from '../../public/Images/7450159 1.png'
import star1 from '../../public/Images/starReg.png'
import star2 from '../../public/Images/starWhite.png'

function Rulesandpolicy() {
  return (
    <div>
      <div className="line"></div>
      <div className="thirdPart">
        <img src={star1} alt="" className="starBlur2" />
        <img src={star2} alt="" className="starWhite2" />
        <img src={star2} alt="" className="starWhite3" />
        <div className="glare3rd"></div>
        <div className="glare3rd2"></div>
        <div className="introducionText2">
          <span className='intro2Container'>
            <h1 className="subTitle3" >Rules and</h1>
            <h1 className="subTitle3 linked" >Guidelines</h1>
            <p className="participateNote3">Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you&apos;re a coding genius, a  design maverick, or a concept wizard, you&apos;ll have the chance to transform  your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that&apos;s what we&apos;re all about!</p>
          </span>
        </div>
        <div className="thirdPartImg">
          <img className='LadySitting' src={img07} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Rulesandpolicy
