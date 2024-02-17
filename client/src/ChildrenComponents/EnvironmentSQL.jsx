import CopyCode from "../ParentComponents/CopyCode";


const EnvironmentSQL = () => {
    return (
        <div>
            <br/>
            <h1>SQL Section: I would like to specify this is for MacOS currently. I will update for Windows as well in the future</h1>
            <br/>
            <div>
                <h1>PostgreSQL</h1>
                <a href="https://www.postgresql.org/download/macosx/">PostgreSQL Site</a>
                <p>process: navigate to terminal, run the command: </p> 
                <CopyCode code="brew install postgresql" /> 
                <p> and then to start postgresql, run the command <b>brew services start postgresql</b></p>
                

            </div>
            <div>
                <h1>SQLite</h1>
                <a href="https://www.sqlite.org/download.html">SQLite Site</a>
                <p>process: SQLite does come with macOS, but to install the latest version, run the command <b>brew install sqlite</b> in the terminal using Homebrew</p>
            </div>
        </div>
    )
} 

export default EnvironmentSQL;


