import React from "react"
import { BadgesContext } from "./Badges"

export default function Badge({color, badge, radius, onOpen}) {

    const { open, toggleOpen } = React.useContext(BadgesContext)

    console.log("on in Badge ", open)

    const color_badge = {color: color}

    const str = color_badge.color.replace(/ .*/, '')

    const str2 = str.charAt(0).toLowerCase() + str.slice(1);

    console.log(str2)

    const light_color = "light" + str2

    let light_color2 = ""
    switch(str2) {
        case "gray" : light_color2="lightgray"
        break
        case "red" : light_color2="lightcoral"
        break
        case "yellow" : light_color2="#FEF3C7"
        break
        default: light_color2="lightcoral"
    }

    const pill_box = radius==="pill" ? "5rem" : null

    const in_bold = open===true ? "bold" : "normal"  // for all at once

    const classes = open===true ? "badge-name badgefw" : "badge-name"

    const style_of = {color: str2, backgroundColor: light_color2, 
                        borderRadius: pill_box
                        }
    

    return(
            <div className="badge">
                <p className="color-title">{color}</p>
                <a onClick={toggleOpen} 
                    href="#" className={classes} 
                    style={style_of}>{badge}</a>
            </div>
    )
}
