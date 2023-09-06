import React from "react"
import useEffectOnUpdate from "./useEffectOnUpdate"

export default function useToggle(   /* took out curly braces  */ 
    initialValue = true,
    onToggle = () => { }
) {
    const [on, setOn] = React.useState(initialValue)

    function toggle(e) {
        setOn(prevOn => !prevOn)
        console.log("ut ", on)
        console.log(e.target)
        
    }
    
    useEffectOnUpdate(onToggle, [on])

    return [on, toggle]
}