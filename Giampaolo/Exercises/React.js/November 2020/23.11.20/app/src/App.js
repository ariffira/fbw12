import logo from './logo.svg';
import './App.css';
import TopMenu from './components/topMenu'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopMenu />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>Welcome</h1>
          <h3>To my first React code!</h3>
          Hello Friends!
          <br />
          I am from DCI
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
      <Footer/>
    </div>
  );
}

export default App;
