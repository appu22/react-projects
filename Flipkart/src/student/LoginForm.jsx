import React from 'react'
import './style.css';
class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            username:'lassya',
            password:'123',
            course :'java'
        }
        this.changevalue=this.changevalue.bind(this);
        this.changePassword=this.changePassword.bind(this);
    }

    changevalue(event){
        // console.log(event);
        // dynamic key and value
        const value = event.target.password;
        const name = event.target.username;
        this.setState({
            // username:event.target.value
            [name]:value
        })
    }
    changePassword(event){

        this.setState({
            password:event.target.value
        })
    }
    formButton(event){
        event.preventDefault();
        alert=(`username:${this.state.username}\n
        password:${this.state.password}`)

    }
    render(){
        return (
            <div>
                <h1>------Login Form -----</h1>
                <form action="" className="form">

                    <label htmlFor="">UserName : </label>
                    <input type="text" name ='username' className="user"
                     value={this.state.username}
                    onChange={this.changevalue} /> 
                    <br/>
                    <label htmlFor="">Password : </label>
                    <input type="password" name="password" 
                    value={this.state.password} 
                    onChange={this.changePassword}/>
                    <br/>
                <div><label htmlFor="">Select Course : 
                    <select name="course" id="" value={this.state.course} 
                    ><option value=""  >Java</option>
                    <option value=""  >React</option>
                    <option value=""  >Angular</option>
                    <option value=""  >Python</option>
                    </select></label>
                </div>
                <br/> <br/>
                    <button type="button" onChange={this.formButton} >Submit</button>

                </form>
            </div>
        )
    }
}
export default LoginForm;