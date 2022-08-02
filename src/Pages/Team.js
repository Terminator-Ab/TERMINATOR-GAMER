import './Team.css';


function Team() {
  return (
    <div className="about" role="alert">
      <h1 className='heading'>TERMINATOR TEAM LEADERS:</h1>
      <div id='cards'>
        <div class="card1">
          <div className='img-card'>
            <img src="images/ab.jpg" className="image-ab" alt="AB" />
          </div>
          <div className='card-body'>
            <span className='card-name'>Terminator么AB</span>

            <div className='card-text'>
              Terminator么AB is the Elite of the Terminator Team, A players has a ability to finish a squads of four member In each match , The goal is to be the  team standing by eliminating all other opponents
              to  win match.
            </div>
            <div className='icon-ul'>
              <a href=' https://instagram.com/biradarabhishek2?igshid=YmMyMTA2M2Y=' target="_blank" ><img src="images/insta.jpg" className='img-icon' alt="" /></a>
              <a href='https://youtube.com/channel/UC1kYPH6cwKp9TJIeRzDhE0w' target="_blank" ><img src="images/yt.jpg" className='img-icon2' alt="" /></a>
              <a href='https://twitter.com/Abhishe81374505?t=fMhA7nVU46HFHkRRTHqVKQ&s=01'   target="_blank"   ><img src="images/tw.jpg" className='img-icon3' alt="" /></a>
            </div>
          </div>
        </div>

        <div class="card1" id='card2'>
          <div className='img-card'>
            <img src="images/mb.jpg" className="image-ab" alt="mb" />
          </div>
          <div className='card-body'>
            <span className='card-name'>Terminator么MB</span>
            <div className='card-text'>
              Terminator 么 Mb is the Leader of the Terminator Team, A players has a ability to finish a squad  in one spary, the goal this player to protect teamates by other squad. A perfect Assault riffle gun user the Attacker.
            </div>
            <div className='icon-ul'>
              <a href='https://instagram.com/manjunath9244?igshid=YmMyMTA2M2Y=' target="_blank" ><img src="images/insta.jpg" className='img-icon'  alt=""/></a>
              <a href='https://youtube.com/channel/UC1kYPH6cwKp9TJIeRzDhE0w' target="_blank" > <img  src="images/yt.jpg" className='img-icon2' alt="" /></a>
              <a href='#' target="_blank" ><img src="images/tw.jpg" className='img-icon3' alt="" /></a>
            </div>
          </div>
        </div>


        <div class="card1" id='card3'>
          <div className='img-card'>
            <img src="images/up.jpg" className="image-ab" alt="up" />
          </div>
          <div className='card-body'>
            <span className='card-name'>Terminator么UP</span>
            <div className='card-text'>
              Terminator 么 UP is the co-Leader of the Terminator Team, A players has a ability to finish a Ememy with a Granade,  A perfec Granader. a solo player he can use both Assault riffle and snipper riffle  in a good manner.

            </div>
            <div className='icon-ul'>
              <a href='https://instagram.com/itz__me__sonu_007?igshid=YmMyMTA2M2Y=' target='blank-'><img src="images/insta.jpg" className='img-icon' alt="" /></a>
              <a href="https://youtube.com/channel/UC1kYPH6cwKp9TJIeRzDhE0w" target="_blank" ><img src="images/yt.jpg" className='img-icon2' alt="" /></a>
              <a href="#" target="_blank"  ><img src="images/tw.jpg" className='img-icon3' alt="" /></a>
            </div>
          </div>
        </div>
        <div className=''>
          
        </div>
      </div>
    </div>
  );
}

export default Team;