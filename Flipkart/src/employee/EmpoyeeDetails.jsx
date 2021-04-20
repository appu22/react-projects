import './emp.css'


function EmployeeDetails(props){

    const mystyle = {
        color : 'black',
        font  : '30px',
        backgroundColor : 'green'
    }
    const isXworkzStudent=true;

    return (
        // <div style={{'backgroundColor':isXworkzStudent ? 'red' : 'green'}}></div>
        <div > 

            {
                props.Employees.length > 0 ?(
                props.Employees.map((emp,index) =>
              
                  <div key={emp.id} className = "empInfo" >
                  
                    <h4 style={mystyle}>Name : {emp.name}</h4>
                    <h4 style = {{'color' : 'green'}}>Id :  {emp.id} </h4>
                    <h4>Salary : {emp.sal} <br/></h4> 

                 </div>
                )): <div style={{'backgroundColor' :'yellow', 'color': 'red' }}>
                    <h1>No Records Found....!</h1>
                </div>  
        }
    </div>
    )

}
export default EmployeeDetails;