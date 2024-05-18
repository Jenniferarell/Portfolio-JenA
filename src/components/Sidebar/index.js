import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoJ from '../../assets/images/LogoJ.png';
import LogoSubtitle from '../../assets/images/namelogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
  <div className='nav-bar'>
    <Link className='logo' to='/'>
      <img src={LogoJ} alt="logo" />
      <img className='name-logo' src={LogoSubtitle} alt="Jennifer Arellano" />
    </Link>
    <nav>
      <NavLink exact="true" activeClassName="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink exact="true" activeClassName="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink exact="true" activeClassName="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
        <li>
            <a target="_blank" 
            rel='noreferrer' 
            href='https://www.linkedin.com/in/jennifer-arellano-109831309?trk=people-guest_people_search-card'>
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
         </li>
         <li>
            <a target="_blank" 
            rel='noreferrer' 
            href='https://github.com/Jenniferarell'>
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
         </li>
        </ul>
     </div>
)

export default Sidebar
