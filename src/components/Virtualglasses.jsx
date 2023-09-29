import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import img01 from '../../public/Images/man-wearing-smart-glasses-touching-virtual-screen 1.png'
import img02 from '../../public/Images/Creative 1.png'
import img03 from '../../public/Images/chain-9365116-7621444.png'
import img04 from '../../public/Images/globe.png'
import img05 from '../../public/Images/metrix 1.png'
import img06 from '../../public/Images/glareVirtual.png'
import img22 from '../../public/Images/lit.png'
import img23 from '../../public/Images/starReg.png'
import './virtualglasses.css'

function Virtualglasses() {
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
    <div>
      <div className="wrapper">
        <div className="revoText">
          <span>
            <div>Igniting a Revolution in HR Innovation</div>
            <span className='revoStroke'>
            <svg xmlns="http://www.w3.org/2000/svg" width="255" height="17" viewBox="0 0 255 17" fill="none">
            <path d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043" stroke="#FF26B9" strokeWidth="5"/>
            </svg>
            </span>
          </span>
        </div>
        <div className="topPart">
          <div className="firstHalf">
            <span className="holding">
              <div className="subTitle1">
                <img className="creative" src={img02} alt="" />
                <span>getlinked Tech</span>
              </div>
              <div className="subTitle2">
                <span>Hackathon <span className="linked">1.0</span></span>
                <img className="chain" src={img03} alt="" />
                <img className="litMobile" src={img22} alt="" />
              </div> 
            </span>
            <span className="makeLeft">
              <span className="participateNote">
                <p>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
              </span>
              <Link to='/register'><button className="registerBtn">Register</button></Link>
              <div className="countdownTimer">
                <div className="countdown">
                  <div className="countdown-item">
                    <span>{countdown.days}</span>
                    <p>D</p>
                  </div>
                  <div className="countdown-item">
                    <span>{countdown.hours}</span>
                    <p>H</p>
                  </div>
                  <div className="countdown-item">
                    <span>{countdown.minutes}</span>
                    <p>M</p>
                  </div>
                  <div className="countdown-item">
                    <span>{countdown.seconds}</span>
                    <p>S</p>
                  </div>
                </div>
              </div>
            </span>
          </div>
            <div className="secondHalf">
              <img src={img06} alt="" className="glare" />
              <img className="lit" src={img22} alt="" />
              <img className="manIndex" src={img01} alt="" />
              <img className="picIndex" src={img04} alt="" />
              <img className="metrix" src={img05} alt="" />
              <img className="starFirstPart" src={img23} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Virtualglasses
