import "./MenuStyle.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import {  FaShoppingCart,} from "react-icons/fa";



const Menu = () => {
  return (
    <nav className="Menu">
      <div className="logomenu">
        <Link to="/">
          <img src={logo} alt="logoprincipal" width={200} />
        </Link>
      </div>

      <ul>
        <li className="item">
          <Link to="/">Início</Link>
        </li>
        <li className="item">
          <Link to="/Catalog">Catálogo</Link>
        </li>
        <li className="item">
          <Link to="/About">Sobre</Link>
        </li>
        <li className="item">
          <Link to="/Contact">Contato</Link>
        </li>
        <li className="item">  
          < Link to="/Cart"><FaShoppingCart color="white" size={40}/></Link>
        </li>
      </ul>
      
    </nav>
  );
};

export default Menu;
