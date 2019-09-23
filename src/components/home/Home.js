import React from 'react';
import {Redirect} from 'react-router-dom';
import './Home.css'


class Home extends React.Component{

    constructor(props) {
        super(props);
        this.user=JSON.parse(sessionStorage.getItem('user'))
    }

    render(){

        if(this.user!=null){
            return ( 
                <div className="home-root">Hello, {this.user.username}</div>
            )
        }else{
            return (<Redirect to={'/'}/>)
        }
      
    }
}

export default Home