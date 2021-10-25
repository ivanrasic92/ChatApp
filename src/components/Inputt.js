import React, { useState } from "react";

function Inputt({ onSendMessage }) {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setText("");
    onSendMessage(text);
  };

  return (
    <div className="input">
      <form onSubmit={(e) => onFormSubmit(e)}>
        <input
          type="text"
          placeholder="Write a message"
          value={text}
          onChange={(e) => onChange(e)}
        />
        <button className="btn"><span>Send</span></button>
      </form>
    </div>
  );
}

export default Inputt;
