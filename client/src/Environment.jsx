import Accordion from "./Accordion";

const Environment = () => {
    return (
        <div>
            <h1>Environment Setup Here</h1>

            <ul>

                <Accordion title="Basic">
                    <p>Bundler</p>
                    <p>Homebrew</p>
                    <p>Visual Studio Code</p>
                </Accordion>

                <Accordion title="Ruby">
                    <p>Ruby</p>
                    <p>Rails</p>
                    <p>RVM</p>
                    <p>Sinatra</p>
                </Accordion>

                <Accordion title="Python">
                    
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