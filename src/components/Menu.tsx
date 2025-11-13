import { Link } from 'react-router-dom';

type MenuProps = { 
  onClose: () => void 
}

const Menu = ({ onClose }: MenuProps) => {
  return (
    <nav className="menu">
      <Link to="/" onClick={onClose}>Home</Link>
      <Link to="/favourites" onClick={onClose}>Favourites</Link>
      <Link to="/about" onClick={onClose}>About</Link>
    </nav>
  );
};

export default Menu;
