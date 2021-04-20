import React from 'react'

class LifeCycle extends React.Component{
    constructor(props)
    
    {
        console.log('constructor...I am First excuted..1');
        super(props)
        this.state={
                name:'appu'

        }
    }
    // getDriveStateFromProps(){
        
    // }
    componentDidMount(){
        console.log('inside component did mount method ..3 ');

    }
    render()
    
    {
        console.log('inside the render ... 2n excuted ..');
        return(
           <div>Life cycle</div>
        )
    }
}
export default LifeCycle;