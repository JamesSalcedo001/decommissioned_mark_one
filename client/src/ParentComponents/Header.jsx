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
            <NavLink>
                <button>Frameworks</button>
            </NavLink>
            <NavLink>
                <button>SQL</button>
            </NavLink>
        </div>
    )
}

export default Header;