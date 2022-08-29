import React, { useState } from "react";

const DeletePrac = () => {
  const [todo, setTodo] = useState([
    { id: 1, title: "제목1" },
    { id: 2, title: "제목2" },
    { id: 3, title: "제목3" },
  ]);

  const onClickDeleteHandler = (id) => {
    setTodo(todo.filter((each) => each.id !== id));
  };
  return (
    <div>
      {todo.map((each) => (
        <div key={each.id}>
          <div>{each.title}</div>
          <button onClick={() => onClickDeleteHandler(each.id)}>삭제</button>
        </div>
      ))}
    </div>
  );
};

export default DeletePrac;
