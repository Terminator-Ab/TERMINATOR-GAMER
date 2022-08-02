import './Profile.css';
import Videoplayer from "react-video-js-player";

function Profile() {
  return (
    <div className="profile">
      <div className='empty'>
          <video  className='video'   autoPlay muted loop>
          <source  src='video.mp4.mp4' type='video/mp4'/></video>
          <video  className='video'  autoPlay muted loop>
          <source  src='video.mp4.mp4' type='video/mp4'/></video>
      </div>
      <div className='content'>
        <p className='prop-para'>
          Battlegrounds Mobile India, or BGMI, is a player-versus-player shooter game in which up to 100 players compete in a battle royale, a type of large-scale last man standing deathmatch in which players compete to be the last one standing. Players can enter the match as individuals or as small groups of up to four.</p><br />
        Each match starts with players parachuting from a plane onto one of the following six maps:<br />
        <ul className='ul-list'>
          <li className='list'> Erangel (Themed / Normal)</li>
          <li className='list'> Miramar </li>
          <li className='list'>Sanhok</li>
          <li className='list'>Vikendi</li>
          <li className='list'>Livik (Themed / Normal)</li>
          <li className='list'>Karakin</li>
        </ul>
        <p className='prop-para'>Each round, the plane's flight path across the map changes, requiring players to quickly determine the best time to eject and parachute to the ground. Players begin with no equipment other than customised clothing options that have no effect on gameplay. Once on the ground, players can search buildings, ghost towns, and other locations for weapons, vehicles, armour, and other items. At the start of a match, these items are procedurally distributed throughout the map, with higher-risk zones typically having better equipment. Finished players can also be looted for their gear. Players can choose to play in first-person or third-person, with each having advantages and disadvantages in combat and situational awareness; however, server-specific settings can be used to force all players into one perspective, removing some advantages.<br />

          Every few minutes, the map's playable area shrinks towards a random location, with any player caught outside the safe zone taking incremental damage and eventually being eliminated if the safe zone is not entered in time; in game, the boundary appears as a shimmering blue wall that contracts over time. This results in a more constrained map, which increases the likelihood of encounters. Random regions of the map are highlighted in red and bombed during the match, posing a threat to players who remain in that area. Players are warned a few minutes before these events in both cases, giving them time to relocate to safety. A plane will occasionally fly over different parts of the playable map at random, or wherever a player uses a flare gun, and drop a loot package containing items that are normally unobtainable during normal gameplay. These packages emit highly visible red or yellow smoke, attracting interested players and resulting in additional confrontations. A full round takes about 30 minutes on average.<br />

          Players earn in-game currency based on their performance at the end of each round. The currency can be used to buy cosmetic items in-game.
        </p>


      </div>
    </div>
  );
}

export default Profile;