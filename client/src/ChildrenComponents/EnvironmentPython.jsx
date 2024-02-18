import CopyCode from "../ParentComponents/CopyCode";


const pyenvInitCode = `if which pyenv > /dev/null; then
eval "$(pyenv init -)";
fi`;
const brewInstallCode = "brew install pyenv"
const zshCode = "code ~/.zshrc"
const zshLoad = "source ~/.zshrc"
const pyEnvInstall = `pyenv install --list 
pyenv install version_number_here`


const EnvironmentPython = () => {
    return (
        <div>
            <br/>
                <h3>Python Section: I would like to specify this is for MacOS currently</h3>
             <br/>
                 <a href="https://www.python.org/downloads/macos/">Python Site</a>
                 <br/>
                 <p>process: navigate to the terminal, and enter the command </p>  
                 <br/>
                 <CopyCode code={brewInstallCode} />
                 <br/>
                 <p>which is a version manager. afterwards, open zshrc file with </p> 
                 <br/>
                 <CopyCode code={zshCode} />
                 <br/>
                 <p>and then add the following to the end of the file:</p>
                 <br/>
                 <CopyCode code={pyenvInitCode} />
                 <br/>
                 <p>afterwards load your settings with this command:</p>
                 <br/>
                 <CopyCode code={zshLoad} />
                 <br/>
                 <p>Next, Python itself needs to be installed. run the command:</p>
                 <br/>
                 <CopyCode code={pyEnvInstall}/>
                 <br/>
                 <p>select the newest stable version, which on the website is listed as 3.11.8 as of Feb. 6th 2024. After installing, set it globally as the default version with the command: </p>
                 <br/>
                 <CopyCode code="pyenv global version_number_here"/>
        </div>
    )
}

export default EnvironmentPython;