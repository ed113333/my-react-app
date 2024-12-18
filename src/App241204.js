import style from './App.css';
import React, { useState } from "react";

function App241204() {
  
  //新的INPUT
  const [newToDo, setNewToDo] = useState("");

  //預設值
  const [toDo, setToDo] = useState([
    { text: 'Reading', completed: false },
    { text: 'For Lunch', completed: false },
    { text: 'Deposit', completed: false }
  ]);

  // add new task to the list
  const addTodo = () => {
    if (newToDo.trim() !== "") {
      setToDo([...toDo, { text: newToDo, completed: false }]);
      setNewToDo("");  //清空INPUT
    }
  };

 //新增刪除線
  const comTodo = (index) => {
    const updatedToDo = [...toDo];
    updatedToDo[index].completed = !updatedToDo[index].completed; // Toggle the completed status
    setToDo(updatedToDo);
  };

  // 刪除
  const detTodo = (index) => {
    const updatedToDo = toDo.filter((_, i) => i !== index); // Remove the task by index
    setToDo(updatedToDo);
  };

  // TO DO LIST 元件
  const TodoList = ({ toDo }) => {
    return (
      <ul>
        {toDo.map((todo, index) => (
          <li key={index}>
            {todo.completed ? <del>{todo.text}</del> : todo.text} {/* Conditionally wrap in <del> */}
            <button onClick={() => comTodo(index)}>
              {todo.completed?('unDo'):('Complete')}
            </button>
            <button onClick={() => detTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <div> 
        <h2 className={`${style.text_color}`}>Add A New Task</h2>
        <input 
          placeholder="Write something to do" 
          value={newToDo} 
          onChange={(e) => setNewToDo(e.target.value)} 
        />
        <button onClick={addTodo}> Add</button>
      </div>
      <div> 
        <h2 className={`${style.text_color}`}>TASK</h2>
        <TodoList toDo={toDo} />
      </div>
    </div>
  );
}

export default App241204;
