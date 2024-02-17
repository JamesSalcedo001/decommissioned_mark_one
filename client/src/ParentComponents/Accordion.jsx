import { useState } from "react"

const Accordion = ({title, children}) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <h2 style={{ cursor: 'pointer'}} onClick={() => setIsOpen(!isOpen)}>
                {title}
            </h2>
            {isOpen && <div>{children}</div>}
        </div>
    )
}

export default Accordion;