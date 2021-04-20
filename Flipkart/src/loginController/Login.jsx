import AdminLogin from "./AdminLogin";
import UserLogin from "./UserLogin";

function Login(props){
    
    // <h1>Login Page Admin/Login</h1>
 
    if(props.isLogged){
        return <AdminLogin/>
    }
    else {
        return <UserLogin />
    }

}
export default Login;