import React  from 'react'

class LoginForm extends React.Components{
//   constructor(props){
//       super(props);
//       this.state={
//                 username : 'Appu'
//       }
  
    render(){
        console.log('hoi');
        return (
            <div>
                <h1>------Login Form -----</h1>
           {/* //     <input type="text" value={this.state.username}/> */}
            </div>
        )
    }
}
export default LoginForm;
// import React from 'react'
// class LoginForm extends React.Component {
//     constructor(props){
//         super(props);
//         this.state={
//             username:'lassya',
//             password:'123'
//         }
//         this.changevalue=this.changevalue.bind(this);
//         this.passwordEnter=this.passwordEnter.bind(this);
//     }
//     changevalue(event){
//         console.log(event.target.value);
//         this.setState({
//             username:event.target.value
//         })
//     }