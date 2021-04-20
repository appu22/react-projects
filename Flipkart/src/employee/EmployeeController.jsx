import EmployeeDetails from "./EmpoyeeDetails";

function EmpoyeeController(){
    const Employees=[
        {id:123,name:'appu',sal:'10k'},
        {id:456,name:'Satish',sal:'20k'},
        {id:321,name:'Ganesh',sal:'30k'},
        {id:123,name:'Kiran',sal:'50k'},
        {id:789,name:'vitthal',sal:'60k'},
        {id:123,name:'appu',sal:'10k'},
        // {id:123,name:'Maruti',sal:'70k'},
        // {id:123,name:'Maruti',sal:'70k'},
        // {id:123,name:'Maruti',sal:'70k'},
        
    ]
    return(
        <div><h3>Employee Controller</h3>
        <EmployeeDetails Employees={Employees}/>
        </div>
    )
}
export default EmpoyeeController;

