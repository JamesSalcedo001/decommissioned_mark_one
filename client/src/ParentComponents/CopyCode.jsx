const CopyCode = ({ code }) => {
    const clipBoard = () => {
        navigator.clipboard.writeText(code).then(() => {
        }, (err) => {
            console.error("Could not copy", err)
        })
    }
    return (
        <div className="copy-container">
            <pre><code>{code}</code></pre>
            <button onClick={clipBoard} className="copy-button">Copy</button>
        </div>
    )
}

export default CopyCode;