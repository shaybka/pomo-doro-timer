import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faChartBar, faGear, faCircleUser, faEllipsisVertical,faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
      <FontAwesomeIcon icon={faCircleCheck} className='logoicon' />
       
        <span>Pomo Focus</span>
      </div>
      <nav className="menues">
        <ul>
          <li>
          <FontAwesomeIcon icon={faChartBar}  className="icon"/>
          Report
          </li>
          <li>
          <FontAwesomeIcon icon={faGear}  className="icon"/>
          Settings
          </li>
          <li>
          <FontAwesomeIcon icon={faCircleUser}  className="icon"/>
           signin
          </li>
          <li>
          <FontAwesomeIcon icon={faEllipsisVertical}  className="icon" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
