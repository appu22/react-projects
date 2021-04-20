import React from 'react'
import Login from './Login';
// import Login from './Login';

class LoginController extends React.Component {
    constructor(props){
        super(props)
        this.state={
            isLogged:false
        }
        this.login=this.login.bind(this);
        this.logout=this.logout.bind(this);
    }
    login(){
        this.setState({
            isLogged:true
        })
    }
    logout(){
        this.setState({
            isLogged:false
        })
    }
    render(){
            return ( 
            
            <div><h1>Login </h1>
            <Login />
            </div>

            )
    }
}
export default LoginController;
