import './judgingcriteria.css'
import listData from "./data/data"
import img01 from '../../public/Images/8046554 1.png'
import star1 from '../../public/Images/starPurple.png'
import star2 from '../../public/Images/starWhite.png'
import star3 from '../../public/Images/starReg.png'

function Judgingcriteria() {
  return (
    <div>
      <div className="line"></div>
      <div className="fourthPart">
        <img className='starPurpleJ' src={star1} alt="" />
        <img className='starWhiteJ' src={star2} alt="" />
        <img className='starBlurJ' src={star3} alt="" />
        <div className='glare5th'></div>
        <div className='glare6th'></div>
        <div className="humanAnalysis">
          <span className='jusdesWrapper'>
            <img className='judges' src={img01}alt="" />
          </span>
        </div>
        <div className="judgingCriteria">
          <span className='criteriaContainer'>
            <span className="subTitle3" >Judging Criteria</span><br />
            <span className="subTitle3 linked mb1" >Key attributes</span>
            <ul className="listGroup">
              {listData.map((list) => (
                <li key={list.title} className="listItem mb1"><span className="inlineTopics">{list.title}</span>: {list.text}</li>
              ))}
            </ul>
            <button className="registerBtn">Read More</button>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Judgingcriteria
