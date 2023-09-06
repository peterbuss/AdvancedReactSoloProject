import React from "react"
import useToggle from "../../hooks/useToggle"

const BannersContext = React.createContext()
export { BannersContext }

export default function Banners({children, onOpen}) {

    const [open, toggleOpen] = useToggle(false, onOpen) 

/*     console.log("children ", children)

    console.log("children ", children[0].props.children[0].props.category)

    const category = children[0].props.children[0].props.category
 */
    //const category = "temp"

    return(
        <BannersContext.Provider value={{open, toggleOpen}}>
            <h1 className="banners-heading">Banners</h1>
            {   open ?
                        <div>
                            <a href="#" onClick={toggleOpen}
                                className="banner-button">
                                    Click Me!
                                </a>
                        </div> :
                        null
            }

            <div className="line-titles">
                <h4>MULTI LINE</h4>
                <h4>SINGLE LINE</h4>
            </div>
 
            <div className="banners">
                {children}
            </div>

        </BannersContext.Provider>
    )
}
