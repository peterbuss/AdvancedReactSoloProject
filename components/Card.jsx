import React from "react"
import useToggle from "../hooks/useToggle"

export default function Card({ onChange, card_title, card_hover }) {
    const [on, toggle] = useToggle()

    const hovered_card = card_hover==="HOVER" ? "card-hover card" : "card"
    
    return (
        <div>
            <p className="card-title">{card_title}</p>
            <div className={hovered_card} onClick={toggle}>
                <img src="../icons/Brandicon.png"></img>
                <h2 className="card-heading">Easy Deployment</h2>
                <p>Ac tincidunt sapien vehicula erat auctor 
                    pellentesque rhoncus. Et magna sit morbi lobortis.</p>
            </div>
            { on ?
                <p>On</p> : null
            }
        </div>
    )
}