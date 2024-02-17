import Accordion from "../Accordion";

const Environment = () => {
    return (
        <div>
            <h1>Environment Setup Here</h1>

      <section>
        <h1>Environment Section</h1>
        <p> Here I will talk about how to set up the environment </p>

        <Accordion title="ENV">
        <div>
            <h1>Basic Section</h1>
            <p>Homebrew</p>
            <p>Visual Studio Code</p>
            <p>Bundler</p>
          </div>

          <div>
            <h1>Node Section</h1>
            <p>NVM</p>
            <p>Node.js</p>
          </div>
          
          <div>
            <h1>Python Section</h1>
            <p>Python</p>
          </div>

          <div>
            <h1>Ruby Section</h1>
            <p>Ruby</p>
            <p>Rails</p>
            <p>RVM</p>
            <p>Sinatra</p>
          </div>
         
          <div>
            <h1>SQL Section</h1>
            <p>PostgreSQL</p>
            <p>SQLite</p>
          </div>
  
        </Accordion>
      </section>
            
        </div>
    )
}

export default Environment;