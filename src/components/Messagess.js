import React from "react";
import Message from "./Message";

function Messagess({ messages, currentMember }) {
  const renderMessage = (message, index) => {
    const { member, text } = message;
     return (
      <Message
        key={index}
        member={member}
        text={text}
        currentMember={currentMember}
      />
    );
  };

  return (
    <ul>
      {messages.map((el, index) => {
        return renderMessage(el, index);
      })}
    </ul>
  );
}

export default Messagess;
