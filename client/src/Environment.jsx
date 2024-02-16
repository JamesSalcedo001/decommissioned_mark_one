import Accordion from "./Accordion";
import Basic from "./Environment/Basic";


const Environment = () => {
    return (
        <div>
            <h1>Environment Setup Here</h1>

            <ul>

                <Accordion title="Basic">
                    <Basic/>
                </Accordion>

                <Accordion title="Ruby">
                    <p>Ruby</p>
                    <p>Rails</p>
                    <p>RVM</p>
                    <p>Sinatra</p>
                </Accordion>

                <Accordion title="Python">
                    <p>Python</p>
                </Accordion>

                <Accordion title="Node">
                    <p>NVM</p>
                    <p>Node.js</p>
                </Accordion>

                <Accordion title="Database">
                    <p>PostgreSQL</p>
                    <p>SQLite</p>
                </Accordion>
                
            </ul>
        </div>
    )
}

export default Environment;