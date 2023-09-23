import listData from "./data/data"
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

function LandingPage() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const targetDate = new Date('2023-11-18T00:00:00');
  const calculateTimeRemaining = () => {
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      clearInterval();
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landingpage">
      <div className="line"></div>  
      <div className="revoText">
        <span>
          <h1>Igniting a Revolution in HR Innovation</h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="255" height="17" viewBox="0 0 255 17" fill="none">
          <path d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043" stroke="#FF26B9" strokeWidth="5"/>
          </svg>
        </span>
      </div>
      <div className="topPart">
        <div className="firstHalf">
          <span className="holding">
            <img className="creative" src="../../public/Creative 1.png" alt="" />
            <h1 className="subTitle" >getlinked Tech</h1>
            <h1 className="subTitle" >Hackathon <span className="linked">1.0</span></h1>
            <img className="chain" src="../../public/chain-9365116-7621444.png" alt="" />
          </span>
          <span className="participateNote">
            <p >Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
          </span>
          <Link to='/register'><button className="registerBtn">Register</button></Link>
          <div className="countdownTimer">
            <div className="countdown">
              <div className="countdown-item">
                <h1>{countdown.days}</h1>
                <p>D</p>
              </div>
              <div className="countdown-item">
                <h1>{countdown.hours}</h1>
                <p>H</p>
              </div>
              <div className="countdown-item">
                <h1>{countdown.minutes}</h1>
                <p>M</p>
              </div>
              <div className="countdown-item">
                <h1>{countdown.seconds}</h1>
                <p>S</p>
              </div>
            </div>
          </div>
        </div>
        <div className="secondHalf">
          <img className="picOpacity" src="/public/man-wearing-smart-glasses-touching-virtual-screen 1.png" alt="" />
          <img className="picIndex" src="/public/globe.png" alt="" />
          <img className="picIndex" src="/public/metrix 1.png" alt="" />
        </div>
      </div>
      <div className="line"></div>
      <div className="secondPart">
        <div className="theBigIdea">
          <img src="../../public/the big idea 1.png" alt="" />
        </div>
        <div className="introducionText">
          <span>
            <h1 className="subTitle2" id="overview" >Introduction to getlinked</h1>
            <h1 className="subTitle2 linked" >tech Hackathon 1.0</h1>
            <p className="participateNote">Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you`re a coding genius, a  design maverick, or a concept wizard, you`ll have the chance to transform  your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that`s what we`re all about!</p>
          </span>
        </div>
      </div>
      <div className="line"></div>
      <div className="thirdPart">
        <div className="introducionText">
        <span>
            <h1 className="subTitle2" >Rules and</h1>
            <h1 className="subTitle2 linked" >Guidelines</h1>
            <p className="participateNote">Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you`re a coding genius, a  design maverick, or a concept wizard, you`ll have the chance to transform  your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that`s what we`re all about!</p>
          </span>
        </div>
        <div className="theBigIdea">
          <img src="../../public/7450159 1.png" alt="" />
        </div>
      </div>
      <div className="line"></div>
      <div className="fourthPart">
        <div className="humanAnalysis">
          <img src="../../public/8046554 1.png" alt="" />
        </div>
        <div className="judgingCriteria">
          <span>
            <h1 className="subTitle2" >Judging Criteria</h1>
            <h1 className="subTitle2 linked mb1" >Key attributes</h1>
            <ul className="listGroup">
              {listData.map((list) => (
                <li key={list.title} className="listItem mb1"><span className="inlineTopics">{list.title}</span>: {list.text}</li>
              ))}
            </ul>
            <button className="registerBtn">Read More</button>
          </span>
        </div>
      </div>
      <div className="line"></div>
      <div className="fifthPart">
        <div className="faQs">
          <h1 className="subTitle2" >Frequently Ask</h1>
          <h1 className="subTitle2 linked" >Question</h1>
          <p className="participateNote">We got answers to the questions that you might want to ask about getlinked Hackathon 1.0</p>
          <span className="asked">
            <span className="frequently">
            <p>Can I work on a project I started before the hackathon?</p>
            <img src="/public/plusIcon.png" alt="" />
          </span>
          <div className="lined"></div>
          <span className="frequently">
            <p>Can I work on a project I started before the hackathon?</p>
            <img src="/public/plusIcon.png" alt="" />
          </span>
          <div className="lined"></div>
          <span className="frequently">
            <p>Can I work on a project I started before the hackathon?</p>
            <img src="/public/plusIcon.png" alt="" />
          </span>
          <div className="lined"></div>
          <span className="frequently">
            <p>Can I work on a project I started before the hackathon?</p>
            <img src="/public/plusIcon.png" alt="" />
          </span>
          <div className="lined"></div>
          <span className="frequently">
            <p>Can I work on a project I started before the hackathon?</p>
            <img src="/public/plusIcon.png" alt="" />
          </span>
          <div className="lined"></div>
          <span className="frequently">
            <p>Can I work on a project I started before the hackathon?</p>
            <img src="/public/plusIcon.png" alt="" />
          </span>
          <div className="lined"></div>
          </span>
        </div>
        <div className="questionMarks">
          <span className="holding">
            <h1 className="questionMark">?</h1>
            <h1 className="questionMark questionMark2">?</h1>
            <h1 className="questionMark questionMark3">?</h1>
            <img width={'100%'} height={'741px'} src="../../public/overThinker.png" alt="" />
          </span>
        </div>
      </div>
      <div className="line"></div>
      <div className="sixthPart">
        <h1 className="subTitle2" id="timeline" >Timeline</h1>
        <p className="participateNote">Here is the breakdown of the time we anticipate  using for the upcoming event..</p>
        <div className="timelineGrid">
          <div className="messageOntheLeft">
            <h1 className="subTitle2 linked" >Hackathon Announcement</h1>
            <p className="participateNote">The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
          </div>
          <div className="pipeCircle">
            <div className="verticalPipe"></div>
            <div className="circle">1</div>
          </div>
          <div className="messageOntheRight">
            <h1 className="subTitle2 linked" >November 18, 2023</h1>
          </div>
          
          <div className="messageOntheLeft">
            <h1 className="subTitle2 linked" >November 18, 2023</h1>
          </div>
          <div className="pipeCircle">
            <div className="verticalPipe"></div>
            <div className="circle">2</div>
          </div>
          <div className="messageOntheRight">
            <h1 className="subTitle2 linked" >Teams Registration begins</h1>
            <p className="participateNote">Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register</p>
          </div>

          <div className="messageOntheLeft">
            <h1 className="subTitle2 linked" >Teams Registration ends</h1>
            <p className="participateNote">Interested Participants are no longer Allowed to register</p>
          </div>
          <div className="pipeCircle">
            <div className="verticalPipe"></div>
            <div className="circle">3</div>
          </div>
          <div className="messageOntheRight">
            <h1 className="subTitle2 linked" >November 18, 2023</h1>
          </div>

          <div className="messageOntheLeft">
            <h1 className="subTitle2 linked" >November 18, 2023</h1>
          </div>
          <div className="pipeCircle">
            <div className="verticalPipe"></div>
            <div className="circle">4</div>
          </div>
          <div className="messageOntheRight">
            <h1 className="subTitle2 linked" >Announcement of the accepted teams and ideas</h1>
            <p className="participateNote">All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced</p>
          </div>

          <div className="messageOntheLeft">
            <h1 className="subTitle2 linked" >Getlinked Hackathon 1.0 Offically Begins</h1>
            <p className="participateNote">Accepted teams can now proceed to build their ground breaking skill driven solutions</p>
          </div>
          <div className="pipeCircle">
            <div className="verticalPipe"></div>
            <div className="circle">5</div>
          </div>
          <div className="messageOntheRight">
          < h1 className="subTitle2 linked" >November 18, 2023</h1>
          </div>

          <div className="messageOntheLeft">
            <h1 className="subTitle2 linked" >November 18, 2023</h1>
          </div>
          <div className="pipeCircle">
            <div className="verticalPipe"></div>
            <div className="circle">6</div>
          </div>
          <div className="messageOntheRight">
            <h1 className="subTitle2 linked" >Demo Day</h1>
            <p className="participateNote">Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day</p>
          </div>
        </div>
      </div>
      <div className="seventhPart">
        <div className="trophy">
          <img src="../../public/trophy.png" alt="" />
        </div>
        <div className="prizes">
          <span className="prize">
            <h1 className="subTitle2" >Prizes and</h1>
            <h1 className="subTitle2 linked" >Rewards</h1>
            <p className="participateNote">Highlight of the prizes or rewards for winners and for participants.</p>
          </span>
          <div className="rewards">
            <div className="secondWinner">
              <img className="secondPrize" src="../../public/silver_medal 1.png" alt="" />
              <p>2nd</p>
              <p>Runner</p>
              <p>N300,000</p>
            </div>
            <div className="firstWinner">
              <img className="firstPrize" src="../../public/gold_medal 1.png" alt="" />
              <p>1st</p>
              <p>Runner</p>
              <p>N400,000</p>
            </div>
            <div className="secondWinner">
              <img className="secondPrize" src="../../public/bronze_medal 1.png" alt="" />
              <p>3rd</p>
              <p>Runner</p>
              <p>N150,000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="eightPart">
        <h1 className="subTitle2" >Partners and Sponsors</h1>
        <p className="participateNote">Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>
        <div className="sponsors">
          <span className="sporsorsLogo">
            <img src="../../public/Liberty company logo white colour.png" alt="" />
            <div className="verticalPipe"></div>
          </span>
          <span>
            <img src="/public/Liberty company logo white.png" alt="" />
          </span>
          <span className="sporsorsLogo">
            <div className="verticalPipe"></div>
            <img src="/public/Winwise logo White colour 1.png" alt="" />
          </span>
          <div className="horizontalPipe"></div>
          <div className="horizontalPipe"></div>
          <div className="horizontalPipe"></div>
          <span className="sporsorsLogo">
            <img src="../../public/wisper logo white.png" alt="" />
            <div className="verticalPipe"></div>
          </span>
          <span className="sporsorsLogo">
            <img src="/public/Paybox.png" alt="" />
            <div className="verticalPipe"></div>
          </span>
          <span className="sporsorsLogo">
            <img src="/public/Vizual Plus.png" alt="" />
          </span>
        </div>
      </div>
      <div className="line"></div>
      <div className="lastPart">
        <div className="policy">
          <h1 className="subTitle2" >Privacy Policy and</h1>
          <h1 className="subTitle2 linked" >Terms</h1>
          <p className="participateNote">Last updated on September 12, 2023</p>
          <p className="participateNote">Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant</p>
          <div className="policyTerms">
            <span className="paragraphs">
            <p >At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.</p>
            </span>
            <h1 className="subTitle2 linked" >Licensing Policy</h1>
            <ul className="paragraphs listing">
              <p>Here are terms of our Standard License:</p>
              <li>The Standard License grants you a non-exclusive right to navigate and register for our event</li>
              <li>You are licensed to use the item available at any free source sites, for your project developement</li>
            </ul>
            <button className="registerBtn">Read More</button>
          </div>
        </div>
        <div className="policyImg">
          <img className="manLock" src="/public/manWithLock.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default LandingPage
