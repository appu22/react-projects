import React from 'react'
import './classStyle.css';

class NewCartSubmitPage extends React.Component {
    constructor(props){
        super(props);
    }
    render(){

        return(
            <div>
             <h1>Submit</h1>
            <button onClick={this.props.updateNameAndArea('Appu','Malleshwaram')}>RenameTrainerName</button>
            </div>

        )
    }

}
export default NewCartSubmitPage;