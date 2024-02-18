import CopyCode from "../ParentComponents/CopyCode";

const EnvironmentNode = () => {
    return (
        <div>
             <br/>
             <h3>Node Section: MacOS</h3>
             <br/>
             <div>
                <br/>
                 <p>NVM</p>
                 <br/>
                 <a href="https://github.com/nvm-sh/nvm">Node Version Manager Site</a>
                 <br/>
                 <p>process: follow directions on site using the terminal</p>
                 <br/>
             </div>
             <div>
             <br/>
                 <p>Node.js</p>
                 <br/>
                 <a href="https://nodejs.org/en">Node.js Site</a>
                 <br/>
                 <p>process: once you have downloaded NVM, simply run this command in your terminal</p>
                 <br/>
                 <CopyCode code="nvm install node"/>
                 <br/>
             </div>
         </div>
    )
}

export default EnvironmentNode;