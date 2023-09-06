import React from "react"
import useToggle from "../hooks/useToggle"

export default function Testimonial({ onChange, pic }) {
    const [on, toggle] = useToggle()

    console.log(pic)

    const testimonial_bg = pic===true ? "testimonial-color-blue" : 
        "testimonial-color-light"

    const head_text = pic===true ? "with pic" : "no pic"
    const below_desktop = pic===true ? "with overlapping image/Desktop" :
                                    "simple centered/Desktop"
    const below_mobile = pic===true ? "with overlapping image/Mobile" :
                                    "simple centered/Mobile"
    
    const below_text = pic===true ? "below-text" : "below-text-nopic"

    console.log(testimonial_bg)

    const horizontal_box = pic===true ? `horizontal-box ${testimonial_bg}` 
        : `horizontal-box-nopic ${testimonial_bg}` 

    const vertical_box = pic===true ? `vertical-box ${testimonial_bg}`
        : `vertical-box-nopic ${testimonial_bg}`

    const vertical_text_above = pic===true ? "With overlapping image/Mobile"
        : "Simple centered/Mobile"

    const vertical_text_above_class = pic===true ? "vertical-text-above"
        : "vertical-text-above-nopic"
    

    return(
        <div>
            
            <h1 className="head-text">{head_text}</h1>
            <p className={below_text}>{below_desktop}</p>
            <div className="box-container">
                <div className={horizontal_box}>
                    {   pic ?
                        <img src="../icons/quotes.png"></img> :
                        <div className="work-cation-flex">
                            <img className="mark-icon" src="../icons/Mark.png"></img>
                            <p className="work-cation-nopic">Work<span className="blue-color">cation</span></p>
                        </div>
                    }
                    <p className="box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed urna nulla vitae laoreet augue. Amet feugiat est 
                        integer dolor auctor adipiscing nunc urna, sit. </p>
                    
                    <div className="text-label">
                        <p>Marie Anderson</p>
                        {
                            pic ? null : <p className="blue-color">/</p>
                        }
                        <p>Workcation CTO</p>
                    </div>
                </div>
                <div className={vertical_box}>
                    <p className={vertical_text_above_class}>{vertical_text_above}</p>
                    {   pic ?
                        <img src="../icons/quotes.png"></img> :
                        <div className="work-cation-flex">
                            <img className="mark-icon" src="../icons/Mark.png"></img>
                            <p className="work-cation-nopic">Work<span className="blue-color">cation</span></p>
                        </div>
                    }
                    <p className="box-text-vertical">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed urna nulla vitae laoreet augue. Amet feugiat est 
                        integer dolor auctor adipiscing nunc urna, sit. </p>

                        <div className="text-label-vertical">
                            <p>Marie Anderson</p>
                            <p>Workcation CTO</p>
                        </div>
                </div>
            </div>
        </div>
    )
}