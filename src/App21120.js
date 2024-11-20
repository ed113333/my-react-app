
import  style from  './App.css';

function App2(props) {
  return (
    <div>

        <p className={`${style.text_color}`}  >
          {props.test}
          {props.name}
        </p>
    </div>
  );
}

export default App2;
