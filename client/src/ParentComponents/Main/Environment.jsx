import { NavLink } from "react-router-dom";

const Environment = () => {
    return (
        <div>
            <h1>Environment Setup Here</h1>
            <br/>
            <section>
                <h1>Environment Section</h1>
                <br/>
                <p> Here I will talk about how to set up the environment </p>
                <br/>

                <NavLink to="/env">
                    <button>Environment</button>
                </NavLink>
                <NavLink to="/env/node">
                    <button>Node</button>
                </NavLink>
                <NavLink to="/env/ruby">
                    <button>Ruby</button>
                </NavLink>
                <NavLink to="/env/python">
                    <button>Python</button>
                </NavLink>
                <NavLink to="/env/sql">
                    <button>SQL</button>
                </NavLink>
            </section>
        </div>
    )
}

export default Environment;