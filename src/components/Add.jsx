import React, { useState } from "react";

const Add = () => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([
    {
      id: 1,
      text: "",
    },
  ]);

  const onChangeAddHandler = (e) => {
    setText(e.target.value);
  };

  const onClickAddHandler = () => {
    setTodo([...todo, { id: todo.length + 1, text: text }]);
  };
  console.log(todo);

  return (
    <div>
      <input type="text" value={text} onChange={onChangeAddHandler} />
      <button onClick={onClickAddHandler}>추가</button>
      <ul>
        {todo.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Add;
