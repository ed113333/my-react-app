import logo from './logo.svg';
import App2 from './App21120.js';
import App3 from './App241204.js';
import  './App.css';


function App5(props) {
  return (
    <div>

        <p className={`${style.text_color}`}  >
        </p>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          TO DO LIST
        </p>
        <App2 test="我是元件一號" name="嘿嘿嘿我寫完了"></App2>
        <App2  name="٩(๑•̀ω•́๑)۶"></App2>
        <App3/>
        <App5 test="我是元件一號" name="嘿嘿嘿我寫完了"></App5>
      </header>
    </div>
  );
}

export default App;
