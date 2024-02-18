import CopyCode from "../ParentComponents/CopyCode";

const installPG = "brew install postgresql"
const startPG = "brew services start postgresql"
const installSQLite = "brew install sqlite"


const EnvironmentSQL = () => {
    return (
        <div>
            <br/>
            <h3>SQL Section: MacOS</h3>
            <br/>
            <div>
                <h3>PostgreSQL</h3>
                <br/>
                <a href="https://www.postgresql.org/download/macosx/">PostgreSQL Site</a>
                <br/>
                <p>process: navigate to terminal, run the command: </p> 
                <br/>
                <CopyCode code={installPG} /> 
                <br/>
                <p> and then to start postgresql, run the command:</p>
                <br/>
                <CopyCode code={startPG}/>
                <br/>
            </div>
            <div>
                <h3>SQLite</h3>
                <br/>
                <a href="https://www.sqlite.org/download.html">SQLite Site</a>
                <br/>
                <p>process: SQLite does come with macOS, but to install the latest version, run the command:</p>
                <br/>
                <CopyCode code={installSQLite}/>
                <br/>
                <p>in the terminal using Homebrew</p>
                <br/>
            </div>
        </div>
    )
} 

export default EnvironmentSQL;


