import { Link } from "react-router-dom";
import './Header.css';

function Header(){
    return(
      <div className="container">
      <div className="Header">
       
        <nav className="nav">

          <ul className="ul">
            <p className="component" id="logo-name"><span className="span-text">T</span>erminator么GAMER</p>
            <li className="component" >
            <Link className="link" to="/">Home</Link>
            </li>
            <li className="component">
              <Link className="link" to="/Team">Team</Link>
              </li>
            <li className="component">
              <Link className="link" to="/Profile">About</Link>
              </li>
              <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-warning" type="submit">Search</button>
      </form>
          </ul>
      </nav>
      </div>

      </div>
    );
}

export default Header;