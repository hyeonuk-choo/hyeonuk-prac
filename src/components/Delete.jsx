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
    let newTodo = todo.map((each) => {
      if (each.id == id) {
        each.isDone = !each.isDone;
      }
      return todo;
    });
    setTodo(newTodo);
  };

  return (
    <div>
      <div>
        <input type={text} onChange={(e) => setText(e.target.value)}></input>
        <button onClick={onClickAddHandler}>추가</button>
      </div>

      {todo.map((each) => {
        if (each.isDone == false) {
          return (
            <div key={each.id}>
              <div>{each.title}</div>
              <button onClick={() => onClickDeleteHandler(each.id)}>
                삭제
              </button>
              <button onClick={() => onClickEditHandler(each.id)}>완료</button>
            </div>
          );
        } else {
          return (
            <div key={each.id}>
              <div>{each.title}</div>
              <button onClick={() => onClickDeleteHandler(each.id)}>
                삭제
              </button>
              <button onClick={() => onClickEditHandler(each.id)}>
                완료취소
              </button>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Delete;
