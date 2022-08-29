import React, { useState } from "react";

const Delete = () => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "제목1",
      isDone: false,
    },
  ]);
  const [edit, setEdit] = useState(false);

  const onClickAddHandler = () => {
    setTodo([...todo, { id: todo.length + 1, title: text, isDone: false }]);
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
