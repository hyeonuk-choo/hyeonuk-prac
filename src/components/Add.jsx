import React, { useState } from "react";

const Add = () => {
  let array = [];
  const [text, setText] = useState("");
  const onChangeAddHandler = (e) => {
    setText(e.target.value);
  };
  const onClickAddHandler = () => {
    array.push(text);
    console.log(array);
  };

  return (
    <div>
      <input onChange={onChangeAddHandler}></input>
      <button onClick={onClickAddHandler}>추가</button>
      <ul>
        {array.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Add;
