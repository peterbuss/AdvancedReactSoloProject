import React from "react"
import useToggle from "../../hooks/useToggle"

const BadgesContext = React.createContext()
export { BadgesContext }

export default function Badges({ children, onOpen}) {

    //const open = 
    console.log(children)

    const [open, toggleOpen] = useToggle(true, onOpen)
    console.log("on ", open)

    return(
        <BadgesContext.Provider value={{ open, toggleOpen }}>
            <div className="badges-page">
                <div className="badges-header">
                    <h1 className="badges-heading">Badges</h1>
                </div>

                {children}

                {   open ?
                        <div>
                            <p>badge selected</p>
                        </div> :
                        null
                }
            </div>
        </BadgesContext.Provider>
    )
}