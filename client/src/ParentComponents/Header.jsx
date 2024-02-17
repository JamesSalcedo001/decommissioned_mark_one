import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <NavLink to="/">
                <button>Home</button>
            </NavLink>
            <NavLink to="/environment">
                <button>Environment</button>
            </NavLink>
            <NavLink to="/languages">
                <button>Languages</button>
            </NavLink>
            <NavLink to="/frameworks">
                <button>Frameworks</button>
            </NavLink>
            <NavLink to="/database">
                <button>Databases</button>
            </NavLink>
        </div>
    )
}

export default Header;