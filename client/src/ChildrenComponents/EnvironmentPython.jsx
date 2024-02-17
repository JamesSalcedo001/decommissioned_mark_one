import screenshot3 from "../Images/Screen Shot 2024-02-17 at 12.56.27 AM.png"

const EnvironmentPython = () => {
    return (
        <div>
            <br/>
                <h1>Python Section: I would like to specify this is for MacOS currently. I will update for Windows as well in the future</h1>
             <br/>
                 <p>Python</p>
                 <a href="https://www.python.org/downloads/macos/">Python Site</a>
                 <p>process: navigate to the terminal, and enter the command <b>brew install pyenv</b> which is a version manager. afterwards, open zshrc file with <b> code ~/.zshrc</b> and then add the following to the end of the file:</p>
                 <img src={screenshot3}/>
                 <p>afterwards load your settings with this command: <b>source ~/.zshrc</b></p>
                 <p>next, Python itself needs to be installed. run the command <b>pyenv install --list</b> and select the newest stable version, which on the website is listed as 3.11.8 as of Feb. 6th 2024. After installing, set it globally as the default version with the command <b>pyenv global insert_version_number_here</b></p>
        </div>
    )
}

export default EnvironmentPython;