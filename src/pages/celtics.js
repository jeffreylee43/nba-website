import React, {useEffect} from 'react';
import "../styles/team.css"
import kemba from "../roster-images/celtics/kemba-walker.png"
import celtics from "../logos/celtics-logo.png"


function Celtics() {
    useEffect(() => {
        window.scrollTo(0,0);
    });

    return (
        <div className = "page">
            <div className="team"> 
                <img src = {celtics} className="team-logo" alt="Boston Celtics" />
            </div>
            <p className = "title">Boston Celtics</p>
            
            <div className="member" style={{"backgroundImage": "linear-gradient(rgb(15,15,15),rgb(0,122,51))"}}>
                <div className = "player-name">
                    PG | Kemba Walker
                </div>
                <img src = {kemba} className="player-image" alt="Kemba Walker" />
                
                <span className="statSec1">
                    <span className="stat1">
                        Height: 6' 0'' <br/>
                        Weight: 184lbs.
                    </span>
                    <span className="line1" />
                </span>

                <span className="statSec2">           
                    <span className="line2" />
                    <span className="stat2">
                        Career Stats<br/>
                        PPG: 20.0 <br/>
                        RPG: 3.8 <br/>
                        APG: 5.4
                    </span>
                </span>

                <span className="statSec3">           
                    <span className="stat3">
                        Awards: <br/>
                        4 Time All-Star <br/>
                        1 All-NBA 3rd Team
                    </span>
                    <span className="line1" />
                </span>
            </div>

            <div className="spacing" />
            <div className="member" style={{"backgroundImage": "linear-gradient(rgb(15,15,15),rgb(0,122,51))"}}>
                <div className = "player-name">
                    PG | Kemba Walker
                </div>
                <img src = {kemba} className="player-image" alt="Kemba Walker" />
                
                <span className="statSec1">
                    <span className="stat1">
                        Height: 6' 0'' <br/>
                        Weight: 184lbs.
                    </span>
                    <span className="line1" />
                </span>

                <span className="statSec2">           
                    <span className="line2" />
                    <span className="stat2">
                        Career Stats<br/>
                        PPG: 20.0 <br/>
                        RPG: 3.8 <br/>
                        APG: 5.4
                    </span>
                </span>

                <span className="statSec3">           
                    <span className="stat3">
                        Awards: <br/>
                        4 Time All-Star <br/>
                        1 All-NBA 3rd Team
                    </span>
                    <span className="line1" />
                </span>
            </div>
            
        </div>
    )
}

export default Celtics;