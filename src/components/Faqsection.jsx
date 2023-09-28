import './faqsection.css'
import img01 from '../../public/Images/plusIcon.png'
import img02 from '../../public/Images/overThinker.png'

function Faqsection() {
  return (
    <div>
      <div className="line mb2"></div>
      <div className="fifthPart">
        <div className="faQsContainer">
          <div className="faQs">
            <div className='subHeader'>
              <span className="subTitle3" >Frequently Ask</span><br />
              <span className="subTitle3 linked" >Question</span>
            </div>
            <span className='answers'>
              <p>We got answers to the questions that you might want to ask about getlinked Hackathon 1.0</p>
            </span>
            <span className="asked">
              <span className="frequently">
              <p>Can I work on a project I started before the hackathon?</p>
              <img src={img01} alt="" />
              </span>
              <div className="lined"></div>
              <span className="frequently">
                <p>What happens if I need help during the hackathon?</p>
                <img src={img01} alt="" />
              </span>
              <div className="lined"></div>
              <span className="frequently">
                <p>What happens if I don't have an idea for a project?</p>
                <img src={img01} alt="" />
              </span>
              <div className="lined"></div>
              <span className="frequently">
                <p>Can I join a team or do I have to come with one?</p>
                <img src={img01} alt="" />
              </span>
              <div className="lined"></div>
              <span className="frequently">
                <p>What happens after the hackathon <br /> ends</p>
                <img src={img01} alt="" />
              </span>
              <div className="lined"></div>
              <span className="frequently">
                <p>Can I work on a project I started before the hackathon?</p>
                <img src={img01} alt="" />
              </span>
              <div className="lined"></div>
            </span>
          </div>
        </div>
        <div className="questionMarks">
          <span className="questionMarkImg">
            <h1 className="questionMark">?</h1>
            <h1 className="questionMark questionMark2">?</h1>
            <h1 className="questionMark questionMark3">?</h1>
            <img className='overthinker' height={'741px'} src={img02} alt="" />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Faqsection
