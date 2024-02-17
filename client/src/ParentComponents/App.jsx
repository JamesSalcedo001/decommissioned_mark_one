import './App.css'
// import { Route, Routes } from 'react-router-dom'

import Accordion from './Accordion'

function App() {

  return (
    <div>
    
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


      <section>
        <h1>Languages Section</h1>

        <div>
          <h1>Ruby section</h1>
          <p>talking about ruby here blah blah blah</p>
        </div>

        <div>
          <h1>JavaScript section</h1>
          <p>talking about JavaScript here blah blah blah</p>
        </div>

        <div>
          <h1>Java section</h1>
          <p>talking about Java here blah blah blah</p>
        </div>

        <div>
          <h1>Python section</h1>
          <p>talking about Python here blah blah blah</p>
        </div>

      </section>

      <section>
        <h1>Framework Section</h1>
        <div>
          <h1>React</h1>
          <p>talking about React here blah blah blah</p>
        </div>

        <div>
          <h1>Ruby on Rails</h1>
          <p>talking about Ruby on Rails here blah blah blah</p>
        </div>
      </section>

      <section>
        <h1>Database</h1>

        <div>
          <h1>SQL</h1>
          <p>talking about SQL here blah blah blah</p>
        </div>

        <div>
          <h1>SQLite</h1>
          <p>talking about SQLite here blah blah blah</p>
        </div>

        <div>
          <h1>PostgreSQL</h1>
          <p>talking about PostgreSQL here blah blah blah</p>
        </div>

      </section>

    </div>
  )
}

export default App


