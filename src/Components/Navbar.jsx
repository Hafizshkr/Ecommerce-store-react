// esNavLinknt-disable-next-NavLinkne no-unused-vars
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="bg-white-400 flex items-center h-20 flex-row justify-around font-semibold">
      <ul>
        <NavLink to="/" className="pl-6">
          Home
        </NavLink>
        <NavLink to="/Store" className="pl-6">
          Store
        </NavLink>
        <NavLink to="/About" className="pl-6">
          About Us
        </NavLink>
      </ul>
      <div>
        <button>
          <NavLink to="/Cart">
            <FontAwesomeIcon icon={faCartShopping} />
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
