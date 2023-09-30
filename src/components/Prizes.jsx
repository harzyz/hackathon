import './prizes.css'
import img01 from '../../public/Images/trophy.png'
import img02 from '../../public/Images/silver_medal 1.png'
import img03 from '../../public/Images/gold_medal 1.png'
import img04 from '../../public/Images/bronze_medal 1.png'
import star1 from '../../public/Images/starPurple.png'
import star2 from '../../public/Images/starWhite.png'
import star3 from '../../public/Images/starReg.png'

function Prizes() {
  return (
    <div>
      <div className="seventhPart">
        <div className="glareP"></div>
        <div className="glareP1"></div>
        <img className='starPurpleP' src={star1} alt="" />
        <img className='starWhiteP' src={star2} alt="" />
        <img className='starWhiteP1' src={star2} alt="" />
        <img className='starWhiteP2' src={star2} alt="" />
        <img className='starBlurP' src={star3} alt="" />
        <div className="trophy">
          <div className='trophyTrack'>
            <img className='trophyImg' src={img01} alt="" />
          </div>
        </div>
        <div className="prizes">
          <span className="prize">
            <h1 className="subTitle3" >Prizes and</h1>
            <h1 className="subTitle3 linked" >Rewards</h1>
            <p className="prizesNote">Highlight of the prizes or rewards for winners and for participants.</p>
          </span>
          <div className='trophyTrack2'>
            <img className='trophyImg2' src={img01} alt="" />
          </div>
          <div className="rewards">
            <div className="secondWinner">
              <img className="secondPrize" src={img02} alt="" />
              <span className='prizeRunner'>
                <span className='runner'>
                  <h1>2nd</h1>
                  <p>Runner</p> 
                </span>
                <p className='prizeMoney'>N300,000</p>
              </span>
            </div>
            <div className="firstWinner">
              <img className="firstPrize" src={img03} alt="" />
              <span className='prizeRunner1'>
                <span className='runner'>
                  <h1>1st</h1>
                  <p>Runner</p> 
                </span>
                <p className='prizeMoney1'>N400,000</p>
              </span>
            </div>
            <div className="secondWinner">
              <img className="secondPrize" src={img04} alt="" />
              <span className='prizeRunner'>
                <span className='runner'>
                  <h1>3rd</h1>
                  <p>Runner</p> 
                </span>
                <p className='prizeMoney'>N150,000</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Prizes
