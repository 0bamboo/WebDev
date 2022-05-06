import React, { useState } from "react";
import TodoList from "./TodoList";
import "./TodoList.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [inc, setInc] = useState(0);
  const [data, setData] = useState("");
  return (
    <>
      <TodoList todos={todos} />
      <input
        type="text"
        name="pikala"
		value= {data}
        className="inp"
        onChange={(e) => {
        	setData(e.target.value);
        }}
      />
      <button
        onClick={() => {
			if (data ===! "")
        	setInc(inc + 1);
        	todos.push(data);
			setData("")
        }}
        className="btn"
      >
        Add
      </button>
      <button
        onClick={() => {
			setInc(0);
			setTodos([]);
			setData("")
        }}
        className="btn"
      >
        Clear
      </button>
      <div>{inc} left to do</div>
    </>
  );
}

export default App;
