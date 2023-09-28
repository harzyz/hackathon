import img01 from '../../public/Images/the big idea 1.png'
import './thebigidea.css'


function Thebigidea() {
  return (
    <div>
      <div className="line"></div>
      <div className="secondPart">
        <div className="theBigIdea">
          <img className='bigIdea' src={img01} alt="" />
        </div>
        <div className="introducionText">
            <span className="subTitle3" id="overview" >Introduction to getlinked</span>
            <span className="subTitle3 linked" >tech Hackathon 1.0</span>
            <p className="participateNote2">Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you`re a coding genius, a  design maverick, or a concept wizard, you`ll have the chance to transform  your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that`s what we`re all about!</p>
        </div>
      </div>
      {/* <div className="line"></div> */}
    </div>
  )
}

export default Thebigidea
