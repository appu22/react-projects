import React from 'react';
import axios  from 'axios';

class India extends React.Component{
    constructor(props){
        super(props);
        console.log('hi');
        this.state = {
            userInfo:[]
            // name : 'appu'
        }
    }
    componentDidMount()
    {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res.data);
           const userInfo=res.data
            this.setState({
              userInfo
            })
            console.log(userInfo)
        })
     }
       
    render(){

        console.log('hii');
        return (
     <div> <h2> Table  </h2>
     {this.state.userInfo}
        <form action="">
            <table border="2">
                <tr>
                    
                    <th>ID</th>
                    <th>Name </th>
                    <th>E-Mail</th>
                    <th>Address</th>
                </tr>
                {
                    this.state.userInfo.map(use =>
                     <tr> <td>{use.id}</td>
                         <td>{use.name}</td>
                         <td>{use.mail}</td>
                         <td>{use.address}</td>
                     </tr>  
                        )
                }
            </table>
        </form>
    </div>

        )
    }

}
export default India;







