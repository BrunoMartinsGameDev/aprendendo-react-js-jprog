import React from 'react';


function TodoItem(props) {
  return (
    <li className={"taskItem"}>
      <span
        onClick={() => props.toggleTask(props.index)}
        className={props.task.completed ? "completed" : ''}
      >
        {props.children}
      </span>
      <button onClick={() => props.removeTask(props.index)} className={"removeBtn"}>
        Remover
      </button>
    </li>
  );
};

export default TodoItem;
