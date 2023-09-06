import React from "react"
import { BannersContext } from "./Banners"


export default function Banner({children, color, lines, category, onOpen}) {

    const { open, toggleOpen } = React.useContext(BannersContext)

    const category2 = category

    console.log("category ", category)
    
    const style_of = {color: color}

    const banner_name = `banner-name-${category} banner-name`

    const banner_line = `banner-line-${category} banner-line`

    const line_indicator = `line-indicator ${category}-${lines}line`

    console.log(banner_name)

    console.log("lines ", lines)

    

    return(
        <>
            <div className="banner-group">

                <div className={line_indicator}>
                    <p>{category}-{lines}line</p>
                </div>

                <div className="banner">            
                    {lines==="multi" &&  <h4>{category}</h4> }
                    <div className="line-block">
                        <div className={banner_line}>
                            <a onClick={toggleOpen}
                                href="#" className={banner_name}
                                >{children}</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}