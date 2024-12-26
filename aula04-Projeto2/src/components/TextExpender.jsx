import { Children, useState } from "react"

const TextExpender = ({children,
    collapseNumWords=10, expandButtonText='Show more',
    collapseButtonText='Show less', buttonColor='blue',
    buttonInline, className}) => {
    const [isOpen, setIsOpen] = useState(false);
    const words = children.split(" ").splice(0, collapseNumWords).join(' ');

    let showWords = isOpen ? children : words+' ...'

    function handleShowWords(){
        setIsOpen(isOpen=>!isOpen);
    }
    
    return(
        <>
        <div className={className}>
        {showWords}
        <span style={{color:buttonColor}} onClick={handleShowWords}>
            {!isOpen ?
            expandButtonText : collapseButtonText}
        </span>
        </div>
        </>
    )
}
export default TextExpender