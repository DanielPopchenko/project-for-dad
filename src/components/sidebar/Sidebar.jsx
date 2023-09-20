import { Link } from 'react-router-dom';
import { ROUTES } from '../../assets/routes';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebarList">
        <Link to={ROUTES.home}>Home</Link>
        <Link to={ROUTES.gallery}>Gallery</Link>
      </ul>
    </div>
  );
};

export default Sidebar;
