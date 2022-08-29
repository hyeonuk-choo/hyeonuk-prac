import React, { useState, useRef } from "react";

const Delete = () => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  const [edit, setEdit] = useState(false);
  const nextId = useRef(1);

  const onClickAddHandler = () => {
    nextId.current += 1;
    setTodo([...todo, { id: nextId.current, title: text, isDone: false }]);
  };

  const onClickDeleteHandler = (id) => {
    setTodo(todo.filter((each) => each.id !== id));
  };

  const onClickEditHandler = (id) => {
    const newTodo = todo.map((each) => {
      if (each.id === id) {
        each.isDone = !each.isDone;
      }
      return each;
    });
    console.log("newTodo", newTodo);
    setTodo(newTodo);
  };
  console.log("todo", todo);
  return (
    <div>
      <div>
        <input type={text} onChange={(e) => setText(e.target.value)}></input>
        <button onClick={onClickAddHandler}>추가</button>
      </div>

      {todo.map((each) => (
        <div key={each.id}>
          <div>{each.title}</div>
          <button onClick={() => onClickDeleteHandler(each.id)}>삭제</button>

          {each.isDone === true ? (
            <button onClick={() => onClickEditHandler(each.id)}>
              완료취소
            </button>
          ) : (
            <button onClick={() => onClickEditHandler(each.id)}>완료</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Delete;
