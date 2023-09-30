import './timeline.css'
import star1 from '../../public/Images/starPurple.png'
import star2 from '../../public/Images/starWhite.png'
import star3 from '../../public/Images/starReg.png'

function Timeline() {
  return (
    <div>
      <div className="line mb3"></div>
      <div className="sixthPart">
        <img className='starPurpleT' src={star1} alt="" />
        <img className='starWhiteT' src={star2} alt="" />
        <img className='starBlurT' src={star3} alt="" />
        <h1 className="subTitle3" id="timeline" >Timeline</h1>
        <p className="timelineNote mb3">Here is the breakdown of the time we anticipate  using for the upcoming event..</p>
        <div className="timelineGrid">
          <span className="firstTimeline">
            <div className="messageOntheLeft">
              <span className="subTitle6" >Hackathon Announcement</span>
              <p className="participateNote3">The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
            </div>
            <div className="pipeCircle">
              <div className="verticalPipe"></div>
              <div className="circle">1</div>
            </div>
            <div className="messageOntheRight">
              <span className="subTitle6" >November 18, 2023</span>
            </div>
          </span>
          <span className="firstTimeline">
            <div className="messageOntheLeft">
              <span className="subTitle6" >November 18, 2023</span>
            </div>
            <div className="pipeCircle">
              <div className="verticalPipe"></div>
              <div className="circle">2</div>
            </div>
            <div className="messageOntheRight">
            <span className="subTitle6" >Teams Registration begins</span>
            <p className="participateNote4">Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register</p>
          </div>
          </span>
          <span className="firstTimeline">
            <div className="messageOntheLeft">
              <span className="subTitle6" >Teams Registration ends</span>
              <p className="participateNote3">Interested Participants are no longer Allowed to register</p>
            </div>
            <div className="pipeCircle">
              <div className="verticalPipe"></div>
              <div className="circle">3</div>
            </div>
            <div className="messageOntheRight">
              <span className="subTitle6" >November 18, 2023</span>
            </div>
          </span>
          <span className="firstTimeline">
            <div className="messageOntheLeft">
              <span className="subTitle6" >November 18, 2023</span>
            </div>
            <div className="pipeCircle">
              <div className="verticalPipe"></div>
              <div className="circle">4</div>
            </div>
            <div className="messageOntheRight">
              <span className="subTitle6" >Announcement of the accepted teams and ideas</span>
              <p className="participateNote4">All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced</p>
            </div>
          </span>
          <span className="firstTimeline">
            <div className="messageOntheLeft">
              <span className="subTitle6" >Getlinked Hackathon 1.0 Offically Begins</span>
              <p className="participateNote3">Accepted teams can now proceed to build their ground breaking skill driven solutions</p>
            </div>
            <div className="pipeCircle">
              <div className="verticalPipe"></div>
              <div className="circle">5</div>
            </div>
            <div className="messageOntheRight">
            < span className="subTitle6" >November 18, 2023</span>
            </div>
          </span>
          <span className="firstTimeline">
            <div className="messageOntheLeft">
              <span className="subTitle6" >November 18, 2023</span>
            </div>
            <div className="pipeCircle">
              <div className="verticalPipe"></div>
              <div className="circle">6</div>
            </div>
            <div className="messageOntheRight">
              <span className="subTitle6" >Demo Day</span>
              <p className="participateNote4">Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day</p>
            </div>
          </span>
        </div>


        <div className="timelineGridMobile">
          <span className="firstTimelineMobile">
            <span className='road'>
              <div className="notePipe">
                <div className="verticalPipeMobile"></div>
                <span>
                  <span className="subTitle6" >Hackathon Announcement</span>
                  <p className="participateNote3">The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
                </span>
              </div>
              <div className="circleNote">
                <div className="circleMobile">1</div>
                <span className="subTitle6" >November 18, 2023</span>
              </div>
            </span>
          </span>
          <span className="firstTimelineMobile">
            <span className='road'>
              <div className="notePipe">
                <div className="verticalPipeMobile"></div>
                <span>
                  <span className="subTitle6" >Teams Registration begins</span>
                  <p className="participateNote4">Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register</p>
                </span>
              </div>
              <div className="circleNote">
                <div className="circleMobile">2</div>
                <span className="subTitle6" >November 18, 2023</span>
              </div>
            </span>
          </span>
          <span className="firstTimelineMobile">
            <span className='road'>
              <div className="notePipe">
                <div className="verticalPipeMobile"></div>
                <span>
                  <span className="subTitle6" >Teams Registration ends</span>
                  <p className="participateNote3">Interested Participants are no longer Allowed to register</p>
                </span>
              </div>
              <div className="circleNote">
                <div className="circleMobile">3</div>
                <span className="subTitle6" >November 18, 2023</span>
              </div>
            </span>
          </span>
          <span className="firstTimelineMobile">
            <span className='road'>
              <div className="notePipe">
                <div className="verticalPipeMobile"></div>
                <span>
                  <span className="subTitle6" >Announcement of the accepted teams and ideas</span>
                  <p className="participateNote4">All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced</p>
                </span>
              </div>
              <div className="circleNote">
                <div className="circleMobile">4</div>
                <span className="subTitle6" >November 18, 2023</span>
              </div>
            </span>
          </span>
          <span className="firstTimelineMobile">
            <span className='road'>
              <div className="notePipe">
                <div className="verticalPipeMobile"></div>
                <span>
                  <span className="subTitle6" >Getlinked Hackathon 1.0 Offically Begins</span>
                  <p className="participateNote3">Accepted teams can now proceed to build their ground breaking skill driven solutions</p>
                </span>
              </div>
              <div className="circleNote">
                <div className="circleMobile">5</div>
                <span className="subTitle6" >November 18, 2023</span>
              </div>
            </span>
          </span>
          <span className="firstTimelineMobile">
            <span className='road'>
              <div className="notePipe">
                <div className="verticalPipeMobile"></div>
                <span>
                  <span className="subTitle6" >Demo Day</span>
                  <p className="participateNote4">Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day</p>
                </span>
              </div>
              <div className="circleNote">
                <div className="circleMobile">6</div>
                <span className="subTitle6" >November 18, 2023</span>
              </div>
            </span>
          </span>

          
          {/* <span className="firstTimeline">
            <div className="messageOntheLeft">
              <span className="subTitle6" >November 18, 2023</span>
            </div>
            <div className="pipeCircle">
              <div className="verticalPipe"></div>
              <div className="circle">2</div>
            </div>
            <div className="messageOntheRight">
            <span className="subTitle6" >Teams Registration begins</span>
            <p className="participateNote4">Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register</p>
          </div>
          </span>
          <span className="firstTimeline">
            <div className="messageOntheLeft">
              <span className="subTitle6" >Teams Registration ends</span>
              <p className="participateNote3">Interested Participants are no longer Allowed to register</p>
            </div>
            <div className="pipeCircle">
              <div className="verticalPipe"></div>
              <div className="circle">3</div>
            </div>
            <div className="messageOntheRight">
              <span className="subTitle6" >November 18, 2023</span>
            </div>
          </span>
          <span className="firstTimeline">
            <div className="messageOntheLeft">
              <span className="subTitle6" >November 18, 2023</span>
            </div>
            <div className="pipeCircle">
              <div className="verticalPipe"></div>
              <div className="circle">4</div>
            </div>
            <div className="messageOntheRight">
              <span className="subTitle6" >Announcement of the accepted teams and ideas</span>
              <p className="participateNote4">All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced</p>
            </div>
          </span>
          <span className="firstTimeline">
            <div className="messageOntheLeft">
              <span className="subTitle6" >Getlinked Hackathon 1.0 Offically Begins</span>
              <p className="participateNote3">Accepted teams can now proceed to build their ground breaking skill driven solutions</p>
            </div>
            <div className="pipeCircle">
              <div className="verticalPipe"></div>
              <div className="circle">5</div>
            </div>
            <div className="messageOntheRight">
            < span className="subTitle6" >November 18, 2023</span>
            </div>
          </span>
          <span className="firstTimeline">
            <div className="messageOntheLeft">
              <span className="subTitle6" >November 18, 2023</span>
            </div>
            <div className="pipeCircle">
              <div className="verticalPipe"></div>
              <div className="circle">6</div>
            </div>
            <div className="messageOntheRight">
              <span className="subTitle6" >Demo Day</span>
              <p className="participateNote4">Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day</p>
            </div>
          </span> */}
        </div>
      </div>
    </div>
  )
}

export default Timeline
