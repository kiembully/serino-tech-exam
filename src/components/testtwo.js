import React, { useReducer, useState } from 'react';

const todosReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

const TestTwo = () => {
  const [todos, dispatch] = useReducer(todosReducer, []);
  const [activity, setActivity] = useState();
  const handleActiviy = (event) => {
    setActivity(event.target.value);
  }

  const handleAddTodo = () => {
    const newTodo = {
      id: Date.now(),
      text: activity,
    };
    dispatch({ type: 'ADD_TODO', payload: newTodo });
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: 'REMOVE_TODO', payload: id });
  };

  return (
    <div>
        <h2>Question #2 - React - Solve the Problem</h2>
        <p>Complete the following <samp>{`<TodoList>`}</samp> component to display todos and allow for adding and removing of todo items</p>
        <h3>Code Output</h3>
        <ul>
            {todos.map((todo) => (
            <li key={todo.id}>
                {todo.text}
                <button onClick={() => handleRemoveTodo(todo.id)}>Remove todo</button>
            </li>
            ))}
        </ul>
        <input type="text" onChange={handleActiviy} />
        <button onClick={handleAddTodo}>Add todo</button>
    </div>
  );
};

export default TestTwo;