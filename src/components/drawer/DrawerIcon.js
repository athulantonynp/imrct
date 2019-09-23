import React from 'react'
import './DrawerIcon.css'

const DrawerIcon= props => (

    <button className="toggle-button" onClick={props.click}>

    <img src="https://inspiredmonster.com/assets/images/hamburger%20menu.svg"/>        
    </button>

)

export default DrawerIcon