import React from 'react'
import './classStyle.css';


class CartPage extends React.Component{

    constructor(props){
        super(props);

        this.state={
            name : 'X-Workz',
            trainer : 'Satish',
            area : 'Rajajinagar',
            location : 'Bengaluru'
        }
        // this.changeTranerName=this.changeTranerName.bind(this);

    }
    // arrow function
    // arrow this keyword
    updateNameAndArea=(name,area)=>{
        this.setState({
                    trainer:name,
                    area:area
        })

    }                   
              //  ********************************** ***********
                    // changeTranerName(newname){    
                    //      this.setState({
                    //         trainer:newname
                    //     })
                    //     console.log(this.state.name)
                    // console.log(this);
                    // }
                // *********************************************************
    
    render(){
          return (
          <div className="header">
            <h1>Name            : {this.state.name} </h1>
{/* if you want access external class properties you should use props */}
            <h2> Course          : {this.props.course[1]}</h2>
            <h2> Trainer Name    : {this.state.trainer}</h2>
            <h2> Institute Area  :  {this.state.area} </h2>
            <h2> Location        : {this.state.location} </h2>

            {/* <button onClick={this.changeTranerName}>RenameTrainerName</button> */}
            <button onClick={()=>this.updateNameAndArea('Appu','Malleshwaram')}>RenameTrainerName</button>

            <newCart />

        </div>
          )
    }
}
export default CartPage;