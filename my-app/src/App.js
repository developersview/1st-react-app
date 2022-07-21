import logo from "./logo.svg";
import "./App.css";
import Header from "./header";

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World! The is my first React Project 😎</p>
        <p> Created by  
          <a href = "https://github.com/developersview"> Pranoy Chakraborty</a>
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
    </div>
  );
}

export default App;
