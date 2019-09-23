import React, { Component } from 'react'
import './Login.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PostLoginData from '../../services/LoginHelper'
import {Redirect} from 'react-router-dom';

class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'' ,
            redirect:false
         }
         this.login=this.login.bind(this)
         this.onTextChange=this.onTextChange.bind(this)
    }

    

    login(){
        PostLoginData(this.state.username,this.state.password)
                .then((result)=>{
                  this.onLoginSuccess()
                }).catch(error=>{
                        
                })
    }

    onLoginSuccess(){
        this.setState({redirect:true})
    }

    onTextChange(e){
        this.setState({[e.target.name]:e.target.value})
     
    }

    render(){
        if(this.state.redirect){
            return (<Redirect to={'/home'}/>)
        }
        return(
            <div className="login-root">
            
            <Card className="login-card-root">
                <CardContent>
                    <h3>Login</h3>
                        <TextField
                        id="user-name"
                        label="Username"
                        className="login-user-name"
                        variant="outlined"
                        onChange={this.onTextChange}
                        name="username"
                        margin="normal"/>
            
                        <br/>
            
                        <TextField
                        id="password"
                        type="password"
                        label="Password"
                        variant="outlined"
                        className="login-password"
                        onChange={this.onTextChange}
                        name="password"
                        margin="normal"/>
                    <br/>
                    <Button size="small" variant="contained" color="primary"
                    className="btn-login" onClick={this.login}>Login</Button>
                     </CardContent>
                </Card>
            
                </div>
                )
            }
    }

    


export default Login