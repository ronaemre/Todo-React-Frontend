import React, { Fragment, useState } from 'react';


import InputTodo from "./components/InputTodo"
import ListTodos from './components/ListTodos';

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <Fragment>
      <div >
        <InputTodo setTodos={setTodos} />
        <ListTodos todos={todos} setTodos={setTodos} />
      </div>

    </Fragment>
  );
}

export default App;
