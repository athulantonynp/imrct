import React from 'react';
import './App.css';
import Toolbar from './components/toolbar/Toolbar'
import Drawer from '@material-ui/core/Drawer';
import DrawerContent from './components/drawer/Drawer'
import Login from './components/login/Login'
import { Router, Route } from "react-router-dom";
import Home from './components/home/Home'

import { createBrowserHistory as createHistory } from 'history'


class App extends React.Component{

  
  constructor(props){
      super(props)

      this.history = createHistory()
      this.history.listen((location, action) => {
         let currentRoute=`${location.pathname}${location.search}${location.hash}`
         console.log(currentRoute)

         this.setState((prevState)=>{
            return { route:currentRoute,sideDrawerOpen:prevState.sideDrawerOpen}
         }) 
      })
  }
  
  state={
    sideDrawerOpen:false,
    route:this.currentRoute
  }

  
  drawerToggleClickHandler = () =>{

    this.setState((prevState)=>{
      return {sideDrawerOpen:!prevState.sideDrawerOpen};
    })
  }

  closeDrawerClickHandler= () =>{
    this.setState({sideDrawerOpen:false})
  }


  Login=<Login/>
  Home=<Home/>
  Toolbar= <Toolbar drawerToggleClickHandler={this.drawerToggleClickHandler}
  currentRoute={this.state.route}></Toolbar>

  render(){

    return (

      <div className="App">
             {this.Toolbar}
            {(this.state.sideDrawerOpen) &&
          <Drawer variant="temporary" anchor="right" open={this.state.sideDrawerOpen} onClose={this.closeDrawerClickHandler}>
                <DrawerContent></DrawerContent>
              </Drawer> 
            }
              <main className="content-root">
                <Router history={this.history}>
                <Route path="/" exact component={Login}/>
                <Route path="/home" component={Home} />
                </Router>
          
              </main>
             
      </div>
    );
  }

}

export default App;
