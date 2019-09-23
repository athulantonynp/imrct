import React from 'react'
import './Toolbar.css'
import DrawerIcon from '../drawer/DrawerIcon'


class Toolbar extends React.Component{

    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }
    
    componentDidUpdate(nextProps) {
        console.log(nextProps)
    }

    render(){

        let  drawer=<div/>

        if(typeof this.props.currentRoute !== "undefined" && (this.props.currentRoute!=='/' || this.props.currentRoute!=='')){
         drawer=<DrawerIcon click={this.props.drawerToggleClickHandler}></DrawerIcon>
        }else{
            drawer= <div/>
        }

       return(
        <header>
        <div className="root">
        
        <nav className="navbar">
        
        <a className="navbar-brand" href="/">
            <img src="https://inspiredmonster.com/assets/images/im_main_logo.svg" width="60" height="40" alt=""
            className="brand-logo"/>
        
            | Admin
        </a>

        {drawer}
       
        </nav>
        </div>
        
            </header>
       )
        
    }

}
export default Toolbar