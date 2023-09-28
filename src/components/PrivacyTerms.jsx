import './privacyterms.css'
import img01 from '../../public/Images/manWithLock.png'
import img02 from '../../public/Images/listTerms.png'

function PrivacyTerms() {
  return (
    <div>
      <div className="line"></div>
      <div className="lastPart">
        <div className="policy">
          <div className="policyWrapper">
            <span className='policyHead'>
              <span>
                <h1 className="subTitle3" >Privacy Policy and</h1>
                <h1 className="subTitle3 linked" >Terms</h1>
              </span>
              <p className="lastUpd">Last updated on September 12, 2023</p>
              <p className="privacyNote">Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant</p>
            </span>
            <div className="policyTerms">
              <span className="policyContainer">
                <span className="paragraphs">
                  <p >At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.</p>
                </span>
                <ul className="paragraphs">
                  <span className='licensingControl'>
                    <h1 className="licensing">Licensing Policy</h1>
                    <p>Here are terms of our Standard License:</p>
                  </span>
                  <div className='listWrapper'>
                    <span className="listing"><img src={img02} alt="" /></span>
                    <span className='listItems'>The Standard License grants you a non-exclusive right to navigate and register for our event</span>
                  </div>
                  <div className='listWrapper'>
                    <span className="listing"><img src={img02} alt="" /></span>
                    <span className='listItems'>You are licensed to use the item available at any free source sites, for your project developement</span>
                  </div>
                </ul>
              </span>
              <button className="registerBtn mt7">Read More</button>
            </div>
          </div>
        </div>
        <div className="policyImg">
          <img className="manLock" src={img01} alt="" />
        </div>
      </div>
    </div>
  )
}

export default PrivacyTerms
