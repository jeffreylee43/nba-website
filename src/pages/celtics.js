import React, {useEffect} from 'react';
import "../styles/team.css"
import "../styles/animations.css"
import kemba from "../roster-images/celtics/kemba-walker.png"
import jaylen from "../roster-images/celtics/jaylen-brown.png"
import tatum from "../roster-images/celtics/jayson-tatum.png"
import hayward from "../roster-images/celtics/gordon-hayward.png"
import theis from "../roster-images/celtics/daniel-theis.png"

import celtics from "../logos/celtics-logo.png"


function Celtics() {
    useEffect(() => {
        window.scrollTo(0,0);

        /*Animation for 1st Stat*/
        const line = document.querySelectorAll(".anim")
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    entry.target.style.animation = `anim1 2s ${entry.target.dataset.delay} forwards ease-out`
                }
            })
        })
      
        line.forEach(sec => {
            observer.observe(sec)
        })

    });

    return (
        <div className = "page">
            {/* <header>
                <iframe src = "https://www.youtube.com/embed/OjRMRqZ45xI?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1" frameborder="0" allowfullscreen />
                <video loop autoplay>
                    <source src="https://www.youtube.com/embed/OjRMRqZ45xI"/>
                </video>
                <div className="team"> 
                    <img src = {celtics} className="team-logo" alt="Boston Celtics" />
                </div>
                <p className = "title">Boston Celtics</p>
            </header> */}
            <header className="team-header">
                <div className="team"> 
                    <img src = {celtics} className="team-logo" alt="Boston Celtics" />
                </div>
                <p className = "title">Boston Celtics</p>
            </header>
            
            
            <div className="member" style={{"backgroundImage": "linear-gradient(rgb(15,15,15),rgb(0,122,51))"}}>
                <div className = "player-name">
                    PG | Kemba Walker
                </div>
                <img src = {kemba} className="player-image" alt="Kemba Walker" />
                
                <span className="statSec1 anim" data-delay="0s">
                    <span className="stat1">
                        Height: 6' 0'' <br/>
                        Weight: 184lbs.
                    </span>
                    <span className="line1" />
                </span>

                <span className="statSec2 anim" data-delay="0.4s">           
                    <span className="line2" />
                    <span className="stat2">
                        Career Stats<br/>
                        PPG: 20.0 <br/>
                        RPG: 3.8 <br/>
                        APG: 5.4
                    </span>
                </span>

                <span className="statSec3 anim" data-delay="0.8s">           
                    <span className="stat3">
                        4 Time All-Star (2017-20) <br/>
                        All-NBA 3rd Team (2019)
                    </span>
                    <span className="line1" />
                </span>
            </div>

            <div className="spacing" />
            <div className="member" style={{"backgroundImage": "linear-gradient(rgb(15,15,15),rgb(0,122,51))"}}>
                <div className = "player-name">
                    SG | Jaylen Brown
                </div>
                <img src = {jaylen} className="player-image" alt="Jaylen Brown" />
                
                <span className="statSec1 anim" data-delay="0s">
                    <span className="stat1">
                        Height: 6' 6'' <br/>
                        Weight: 223lbs.
                    </span>
                    <span className="line1" />
                </span>

                <span className="statSec2 anim" data-delay="0.4s">           
                    <span className="line2" />
                    <span className="stat2">
                        Career Stats<br/>
                        PPG: 13.1 <br/>
                        RPG: 4.5 <br/>
                        APG: 1.4
                    </span>
                </span>

                <span className="statSec3 anim" data-delay="0.8s">           
                    <span className="stat3">
                        All-Rookie 2nd Team (2017) <br/>
                        Drafted #3 Overall (2016)
                    </span>
                    <span className="line1" />
                </span>
            </div>

            <div className="spacing" />
            <div className="member" style={{"backgroundImage": "linear-gradient(rgb(15,15,15),rgb(0,122,51))"}}>
                <div className = "player-name">
                    SF | Jayson Tatum
                </div>
                <img src = {tatum} className="player-image" alt="Jayson Tatum" />
                
                <span className="statSec1 anim" data-delay="0s">
                    <span className="stat1">
                        Height: 6' 8'' <br/>
                        Weight: 210lbs.
                    </span>
                    <span className="line1" />
                </span>

                <span className="statSec2 anim" data-delay="0.4s">           
                    <span className="line2" />
                    <span className="stat2">
                        Career Stats<br/>
                        PPG: 17.3 <br/>
                        RPG: 6.0 <br/>
                        APG: 2.2
                    </span>
                </span>

                <span className="statSec3 anim" data-delay="0.8s">           
                    <span className="stat3">
                        NBA All-Star (2020) <br/>
                        All-Rookie 1st Team (2018)
                    </span>
                    <span className="line1" />
                </span>
            </div>

            <div className="spacing" />
            <div className="member" style={{"backgroundImage": "linear-gradient(rgb(15,15,15),rgb(0,122,51))"}}>
                <div className = "player-name">
                    PF | Gordon Hayward
                </div>
                <img src = {hayward} className="player-image" alt="Gordon Hayward" />
                
                <span className="statSec1 anim" data-delay="0s">
                    <span className="stat1">
                        Height: 6' 7'' <br/>
                        Weight: 225lbs.
                    </span>
                    <span className="line1" />
                </span>

                <span className="statSec2 anim" data-delay="0.4s">           
                    <span className="line2" />
                    <span className="stat2">
                        Career Stats<br/>
                        PPG: 15.3 <br/>
                        RPG: 4.4 <br/>
                        APG: 3.5
                    </span>
                </span>

                <span className="statSec3 anim" data-delay="0.8s">           
                    <span className="stat3">
                        NBA All-Star (2017) <br/>
                        College: Butler
                    </span>
                    <span className="line1" />
                </span>
            </div>
            
            <div className="spacing" />
            <div className="member" style={{"backgroundImage": "linear-gradient(rgb(15,15,15),rgb(0,122,51))"}}>
                <div className = "player-name">
                    C | Daniel Theis
                </div>
                <img src = {theis} className="player-image" alt="Daniel Theis" />
                
                <span className="statSec1 anim" data-delay="0s">
                    <span className="stat1">
                        Height: 6' 8'' <br/>
                        Weight: 245lbs.
                    </span>
                    <span className="line1" />
                </span>

                <span className="statSec2 anim" data-delay="0.4s">           
                    <span className="line2" />
                    <span className="stat2">
                        Career Stats<br/>
                        PPG: 6.7 <br/>
                        RPG: 4.8 <br/>
                        APG: 1.2
                    </span>
                </span>

                <span className="statSec3 anim" data-delay="0.8s">           
                    <span className="stat3">
                        3x German League Champion (2015-17) <br/>
                        Undrafted (2013)
                    </span>
                    <span className="line1" />
                </span>
            </div>            
            
        </div>
    )
}

export default Celtics;