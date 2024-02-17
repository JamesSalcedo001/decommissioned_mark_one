import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <NavLink className="header-nav" to="/">
                <button>Home</button>
            </NavLink>
            <NavLink className="header-nav" to="/environment">
                <button>Environment</button>
            </NavLink>
            <NavLink className="header-nav" to="/languages">
                <button>Languages</button>
            </NavLink>
            <NavLink className="header-nav" to="/databases">
                <button>Databases</button>
            </NavLink>
            <NavLink className="header-nav" to="/frameworks">
                <button>Frameworks</button>
            </NavLink>
        </div>
    )
}

export default Header;