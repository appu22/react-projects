// import logo from './logo.svg';
import './App.css';
// import ClassComponents from './classComponents/ClassComponents'
import India from './json/india';

function App() {

const course = ['react1','javaScript']
 
return (

    <div className = "App"> 
    <h1>Welcome to React</h1>
      {/* <ClassComponents
        course ={course}
      /> */}
      <India/>
      
    </div>
  );
}

export default App;

{/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}