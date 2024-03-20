import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <span className="dropdown">
          <Link to="/products">Products 🔽 </Link>
            <div className="dropdown-content">
              <Link to="/products/remeras">Remeras</Link>
              <Link to="/products/cuadernos">Cuadernos</Link>
            </div>
          </span>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
