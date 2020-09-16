import React from 'react';
import { Link } from 'react-router-dom';

import celtics from './logos/celtics-logo.png';
import nets from './logos/nets-logo.png';
import knicks from './logos/knicks-logo.png';
import sixers from './logos/sixers-logo.png';
import raptors from './logos/raptors-logo.png';
import bulls from './logos/bulls-logo.png';
import cavs from './logos/cavs-logo.png';
import pistons from './logos/pistons-logo.png';
import pacers from './logos/pacers-logo.png';
import bucks from './logos/bucks-logo.png';
import hawks from './logos/hawks-logo.png';
import hornets from './logos/hornets-logo.png';
import heat from './logos/heat-logo.png';
import magic from './logos/magic-logo.png';
import wizards from './logos/wizards-logo.png';
import nuggets from './logos/nuggets-logo.png';
import timberwolves from './logos/timberwolves-logo.png';
import thunder from './logos/thunder-logo.png';
import blazers from './logos/blazers-logo.png';
import jazz from './logos/jazz-logo.png';
import warriors from './logos/warriors-logo.png';
import clippers from './logos/clippers-logo.png';
import lakers from './logos/lakers-logo.png';
import suns from './logos/suns-logo.png';
import kings from './logos/kings-logo.png';
import mavs from './logos/mavericks-logo.png';
import rockets from './logos/rockets-logo.png';
import grizzlies from './logos/grizzlies-logo.png';
import pelicans from './logos/pelicans-logo.png';
import spurs from './logos/spurs-logo.png';


import tatum from './players/jayson-tatum.jpg';
import mitch from './players/mitchell-robinson.jpg';
import kyrie from './players/kyrie-irving.jpg';
import embiid from './players/joel-embiid.jpg';
import siakam from './players/pascal-siakam.jpg';
import lavine from './players/zach-lavine.jpg';
import love from './players/kevin-love.jpg';
import blake from './players/blake-griffin.jpg';
import oladipo from './players/victor-oladipo.jpg';
import giannis from './players/giannis.jpg';
import trae from './players/trae-young.jpg';
import devonte from './players/devonte-graham.jpg';
import butler from './players/jimmy-butler.jpg';
import gordon from './players/aaron-gordon.jpg';
import beal from './players/bradley-beal.jpg';
import jokic from './players/nikola-jokic.jpg';
import karl from './players/karl-anthony-towns.jpg';
import paul from './players/chris-paul.jpg';
import lillard from './players/damien-lillard.jpg';
import mitchell from './players/donovan-mitchell.jpg';
import curry from './players/stephen-curry.jpg';
import kawhi from './players/kawhi-leonard.jpg';
import lebron from './players/lebron.jpg';
import booker from './players/devin-booker.jpg';
import fox from './players/deaaron-fox.jpg';
import luka from './players/luka-doncic.jpg';
import harden from './players/james-harden.jpg';
import morant from './players/ja-morant.jpg';
import zion from './players/zion-williamson.jpg';
import derozan from './players/demar-derozan.jpg';


import './home.css';


function Home() {
  const colors = ["rgb(0,122,51)", "rgb(0,0,0)", "rgb(245,132,38)", "rgb(0,107,182)", "rgb(206,17,65)",
                  "rgb(206,17,65)", "rgb(134,0,56)", "rgb(200,16,46)", "rgb(0,45,98)", "rgb(0,71,27)",
                  "rgb(225,68,52)", "rgb(0,120,140)", "rgb(152,0,46)", "rgb(0,125,197)", "rgb(0,43,92)",
                  "rgb(13,34,64)", "rgb(35,97,146)", "rgb(239,59,36)", "rgb(224,58,62)", "rgb(0,43,92)",
                  "rgb(255,199,44)", "rgb(200,16,46)", "rgb(85,37,130)", "rgb(29,17,96)", "rgb(91,43,130)",
                  "rgb(0,83,188)", "rgb(206,17,65)", "rgb(93,118,169)", "rgb(0,22,65)", "rgb(196,206,211)"];
  const offColors = ["rgb(20,142,71)", "rgb(20,20,20)", "rgb(265,152,58)", "rgb(20,127,202)", "rgb(226,37,85)",
                     "rgb(226,37,85)", "rgb(154,20,76)", "rgb(220,36,66)", "rgb(20,65,118)", "rgb(20,91,47)",
                     "rgb(245,88,72)", "rgb(20,140,160)", "rgb(172,20,66)", "rgb(20,145,217)", "rgb(20,63,112)",
                     "rgb(33,54,84)", "rgb(55,117,166)", "rgb(259,79,56)", "rgb(244,78,82)", "rgb(20,63,112)",
                     "rgb(275,219,64)", "rgb(220,36,66)", "rgb(105,57,150)", "rgb(49,37,116)", "rgb(111,63,150)",
                     "rgb(20,103,208)", "rgb(226,37,85)", "rgb(113,138,189)", "rgb(20,42,85)", "rgb(216,226,231)"];


  function handleColor(i) {
    var boxes = document.querySelectorAll('.box');
    var page = document.querySelector('.Page');
    page.style.backgroundColor = colors[i];
  
  
    boxes.forEach(box => {
      box.style.backgroundColor = offColors[i];
    })
  }


  function handleLeave() {
    var boxes = document.querySelectorAll('.box');
    var page = document.querySelector('.Page');
    page.style.backgroundColor = "";
  
    boxes.forEach(box => {
      box.style.backgroundColor = "";
    })
  }


    return (
      <div className="Page" id="home">
        <header className="title">
          NBA Teams
          <p className="caption">Select an NBA team and check out their roster...</p>
        </header>


        {/* Atlantic Division*/}
        <div className = "division" id="Atlantic">
          <div className = "row">
            <h2>Atlantic Division</h2>
          </div>


          <div className = "row">
            <Link to = "/pages/celtics" className = "box">
              <div onMouseOver={()=>handleColor(0)} onMouseOut={handleLeave}> 
                <img src = {celtics} className = "Logo" alt="Celtics (from ESPN)" /> 
                <img src = {tatum} className = "player" alt="Jayson Tatum" />
              </div>
            </Link>
            
            <a href = "/pages/nets" className = "box">
              <div onMouseOver={()=>handleColor(1)} onMouseOut={handleLeave}> 
                <img src={nets} className="Logo" alt="Nets (from ESPN)" />
                <img src = {kyrie} className = "player" alt="Kyrie Irving" />
              </div>
            </a>

            <a href = "/pages/knicks" className = "box">
              <div onMouseOver={()=>handleColor(2)} onMouseOut={handleLeave}> 
                <img src = {knicks} className = "Logo" alt="Knicks (from ESPN)" />
                <img src = {mitch} className = "player" alt="Mitchell Robinson" />
              </div>
            </a>
          {/* </div>

          <div className = "row"> */}
            <a href = "/pages/76ers" className = "box">
              <div onMouseOver={()=>handleColor(3)} onMouseOut={handleLeave}> 
                <img src = {sixers} className = "Logo" alt="76ers (from ESPN)" /> 
                <img src = {embiid} className = "player" alt="Joel Embiid" />
              </div>
            </a>

            <a href = "/pages/raptors" className = "box">
              <div onMouseOver={()=>handleColor(4)} onMouseOut={handleLeave}> 
                <img src = {raptors} className = "Logo" alt="Raptors (from ESPN)" />
                <img src = {siakam} className = "player" alt="Pascal Siakam"  />
              </div>
            </a>
          </div>
        </div>


        {/* Central Division*/}
        <div className = "division" id="Central">

          <div className = "row">
            <h2>Central Division</h2>
          </div>

          <div className = "row">
            <a href = "/pages/bulls" className = "box">
              <div onMouseOver={()=>handleColor(5)} onMouseOut={handleLeave}> 
                <img src = {bulls} className = "Logo" alt="Bulls (from ESPN)" /> 
                <img src = {lavine} className = "player" alt="Zach Lavine" />
              </div>
            </a>
            
            <a href = "/pages/cavs" className = "box">
              <div onMouseOver={()=>handleColor(6)} onMouseOut={handleLeave}> 
                <img src={cavs} className="Logo" alt="Cavs (from ESPN)" />
                <img src = {love} className = "player" alt="Kevin Love" />
              </div>
            </a>

            <a href = "/pages/pistons" className = "box">
              <div onMouseOver={()=>handleColor(7)} onMouseOut={handleLeave}> 
                <img src = {pistons} className = "Logo" alt="Pistons (from ESPN)" />
                <img src = {blake} className = "player" alt="Blake Griffin" />
              </div>
            </a>
          {/* </div>

          <div className = "row"> */}
            <a href = "/pages/pacers" className = "box">
              <div onMouseOver={()=>handleColor(8)} onMouseOut={handleLeave}> 
                <img src = {pacers} className = "Logo" alt="Pacers (from ESPN)" /> 
                <img src = {oladipo} className = "player" alt="Victor Oladipo" />
              </div>
            </a>

            <a href = "/pages/bucks" className = "box">
              <div onMouseOver={()=>handleColor(9)} onMouseOut={handleLeave}> 
                <img src = {bucks} className = "Logo" alt="Bucks (from ESPN)" />
                <img src = {giannis} className = "player" alt="Giannis Antetokounmpo" />
              </div>
            </a>
          </div>
        </div>


        {/* Southeast Division*/}
        <div className = "division" id="Southeast">

          <div className = "row">
            <h2>Southeast Division</h2>
          </div>

          <div className = "row">
            <a href = "/pages/hawks" className = "box">
              <div onMouseOver={()=>handleColor(10)} onMouseOut={handleLeave}> 
                <img src = {hawks} className = "Logo" alt="Hawks (from ESPN)" /> 
                <img src = {trae} className = "player" alt="Trae Young" />
              </div>
            </a>
            
            <a href = "/pages/hornets" className = "box">
              <div onMouseOver={()=>handleColor(11)} onMouseOut={handleLeave}> 
                <img src={hornets} className="Logo" alt="Hornets (from ESPN)" />
                <img src = {devonte} className = "player" alt="Devonte Graham" />
              </div>
            </a>

            <a href = "/pages/heat" className = "box">
              <div onMouseOver={()=>handleColor(12)} onMouseOut={handleLeave}> 
                <img src = {heat} className = "Logo" alt="Heat (from ESPN)" />
                <img src = {butler} className = "player" alt="Jimmy Butler" />
              </div>
            </a>
          {/* </div>

          <div className = "row"> */}
            <a href = "/pages/magic" className = "box">
              <div onMouseOver={()=>handleColor(13)} onMouseOut={handleLeave}> 
                <img src = {magic} className = "Logo" alt="Magic (from ESPN)" /> 
                <img src = {gordon} className = "player" alt="Aaron Gordon" />
              </div>
            </a>

            <a href = "/pages/wizards" className = "box">
              <div onMouseOver={()=>handleColor(14)} onMouseOut={handleLeave}> 
                <img src = {wizards} className = "Logo" alt="Wizards (from ESPN)" />
                <img src = {beal} className = "player" alt="Bradley Beal" />
              </div>
            </a>
          </div>
        </div>


        {/* Northwest Division*/}
        <div className = "division" id="Northwest">
          <div className = "row">
            <h2>Northwest Division</h2>
          </div>

          <div className = "row">
            <a href = "/pages/nuggets" className = "box">
              <div onMouseOver={()=>handleColor(15)} onMouseOut={handleLeave}> 
                <img src = {nuggets} className = "Logo" alt="Nuggets (from ESPN)" /> 
                <img src = {jokic} className = "player" alt="Nikola Jokic" />
              </div>
            </a>
            
            <a href = "/pages/timberwolves" className = "box">
              <div onMouseOver={()=>handleColor(16)} onMouseOut={handleLeave}> 
                <img src={timberwolves} className="Logo" alt="Timberwolves (from ESPN)" />
                <img src = {karl} className = "player" alt="Karl Anthony-Towns" />
              </div>
            </a>

            <a href = "/pages/thunder" className = "box">
              <div onMouseOver={()=>handleColor(17)} onMouseOut={handleLeave}> 
                <img src = {thunder} className = "Logo" alt="Thunder (from ESPN)" />
                <img src = {paul} className = "player" alt="Chirs Paul" />
              </div>
            </a>
          {/* </div>

          <div className = "row"> */}
            <a href = "/pages/trail-blazers" className = "box">
              <div onMouseOver={()=>handleColor(18)} onMouseOut={handleLeave}> 
                <img src = {blazers} className = "Logo" alt="Trail Blazers (from ESPN)" /> 
                <img src = {lillard} className = "player" alt="Damien Lillard" />
              </div>
            </a>

            <a href = "/pages/jazz" className = "box">
              <div onMouseOver={()=>handleColor(19)} onMouseOut={handleLeave}> 
                <img src = {jazz} className = "Logo" alt="Jazz (from ESPN)" />
                <img src = {mitchell} className = "player" alt="Donovan Mitchell" />
              </div>
            </a>
          </div>
        </div>



        {/* Pacific Division*/}
        <div className = "division" id="Pacific">
          <div className = "row">
            <h2>Pacific Division</h2>
          </div>

          <div className = "row">
            <a href = "/pages/warriors" className = "box">
              <div onMouseOver={()=>handleColor(20)} onMouseOut={handleLeave}> 
                <img src = {warriors} className = "Logo" alt="Warriors (from ESPN)" /> 
                <img src = {curry} className = "player" alt="Stephen Curry" />
              </div>
            </a>
            
            <a href = "/pages/clippers" className = "box">
              <div onMouseOver={()=>handleColor(21)} onMouseOut={handleLeave}> 
                <img src={clippers} className="Logo" alt="Clippers (from ESPN)" />
                <img src = {kawhi} className = "player" alt="Kawhi Leonard" />
              </div>
            </a>

            <a href = "/pages/lakers" className = "box">
              <div onMouseOver={()=>handleColor(22)} onMouseOut={handleLeave}> 
                <img src = {lakers} className = "Logo" alt="Lakers (from ESPN)" />
                <img src = {lebron} className = "player" alt="Lebron James" />
              </div>
            </a>
          {/* </div>

          <div className = "row"> */}
            <a href = "/pages/suns" className = "box">
              <div onMouseOver={()=>handleColor(23)} onMouseOut={handleLeave}> 
                <img src = {suns} className = "Logo" alt="Suns (from ESPN)" /> 
                <img src = {booker} className = "player" alt="Devin Booker" />
              </div>
            </a>

            <a href = "/pages/kings" className = "box">
              <div onMouseOver={()=>handleColor(24)} onMouseOut={handleLeave}> 
                <img src = {kings} className = "Logo" alt="Kings (from ESPN)" />
                <img src = {fox} className = "player" alt="De'aaron Fox" />
              </div>
            </a>
          </div>
        </div>



        {/* Southwest Division*/}
        <div className = "division" id="Southwest">
          <div className = "row">
            <h2>Southwest Division</h2>
          </div>

          <div className = "row">
            <a href = "/pages/mavericks" className = "box">
              <div onMouseOver={()=>handleColor(25)} onMouseOut={handleLeave}> 
                <img src = {mavs} className = "Logo" alt="Mavericks (from ESPN)" /> 
                <img src = {luka} className = "player" alt="Luka Doncic" />
              </div>
            </a>
            
            <a href = "/pages/rockets" className = "box">
              <div onMouseOver={()=>handleColor(26)} onMouseOut={handleLeave}> 
                <img src={rockets} className="Logo" alt="Rockets (from ESPN)" />
                <img src = {harden} className = "player" alt="James Harden" />
              </div>
            </a>

            <a href = "/pages/grizzlies" className = "box">
              <div onMouseOver={()=>handleColor(27)} onMouseOut={handleLeave}> 
                <img src = {grizzlies} className = "Logo" alt="Grizzlies (from ESPN)" />
                <img src = {morant} className = "player" alt="Ja Morant" />
              </div>
            </a>
          {/* </div>

          <div className = "row"> */}
            <a href = "/pages/pelicans" className = "box">
              <div onMouseOver={()=>handleColor(28)} onMouseOut={handleLeave}> 
                <img src = {pelicans} className = "Logo" alt="Pelicans (from ESPN)" /> 
                <img src = {zion} className = "player" alt="Zion Williamson" />
              </div>
            </a>

            <a href = "/pages/spurs" className = "box">
              <div onMouseOver={()=>handleColor(29)} onMouseOut={handleLeave}> 
                <img src = {spurs} className = "Logo" alt="Spurs (from ESPN)" />
                <img src = {derozan} className = "player" alt="Demar Derozan" />
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }


export default Home;
