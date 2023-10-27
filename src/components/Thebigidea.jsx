import img01 from '../../public/Images/the big idea 1.png'
import star1 from '../../public/Images/starPurple.png'
import arrow from '../../public/Images/arrow.png'
import './thebigidea.css'


function Thebigidea() {
  return (
    <div>
      <div id="overview" className="secondPart">
        <div className="linepa"></div>
        <img src={star1} alt="" className="starPurple" />
        <img src={star1} alt="" className="starPurple1" />
        <img src={arrow} alt="" className="arrow" />
        <div className="theBigIdea">
          <img className='bigIdea' src={img01} alt="" />
        </div>
        <div className="introducionText">
          <span className="subTitle3"  >Introduction to getlinked</span>
          <span className="subTitle3 linked" >tech Hackathon 1.0</span>
          <p className="participateNote2">Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you&apos;re a coding genius, a  design maverick, or a concept wizard, you&apos;ll have the chance to transform  your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that&apos;s what we&apos;re all about!</p>
        </div>
      </div>
      {/* <div className="line"></div> */}
    </div>
  )
}

export default Thebigidea
