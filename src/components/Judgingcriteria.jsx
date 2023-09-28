import './judgingcriteria.css'
import listData from "./data/data"
import img01 from '../../public/Images/8046554 1.png'

function Judgingcriteria() {
  return (
    <div>
      <div className="line"></div>
      <div className="fourthPart">
        <div className="humanAnalysis">
          <img className='judges' src={img01}alt="" />
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
