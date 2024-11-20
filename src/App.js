import logo from './logo.svg';
import App2 from './App21120.js';
import  './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <App2 test="我是元件一號" name="嘿嘿嘿我寫完了"></App2>
        <App2  name="٩(๑•̀ω•́๑)۶"></App2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learnnp
        </a>
      </header>
    </div>
  );
}

export default App;
