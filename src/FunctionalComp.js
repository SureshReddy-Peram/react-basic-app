import './App.css'

const Welcome = (props)=>{
 return <div className="App">
          <header className="App-header">
          <h1>Good morning {props.name}</h1>
           
          <p>This is Suresh Reddy, i stay at chandanagar, Hyderabad.<br></br> 
            I Completed B.Tech in Electronics and Commuication Engineering.<br></br>
            Previously i worked as a Frontend Engineer in ATMT Systems pvt Ltd.
          </p>
          </header>
          <br></br>
          <a href="https://beta.reactjs.org/learn/installation" className="App-link" target="_blank" rel="noopener noreferrer"> Learn React by Functional Components</a>
          <img src="/logo192.png" alt="logo" width="100px" height="100px"></img>
          <img src="/logo512.png" alt="logo" className="App-logo" style={{backgroundColor:"blue"}} width="200px" height="200px"></img>
        </div>
}
export default Welcome;