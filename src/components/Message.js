import React from "react";

function Message({ member, text, currentMember }) {
  const messageFromMe = member.id === currentMember.id;
  return (
    <li
      className={
        messageFromMe ? "Messages-message myMessage" : "Messages-message"
      }
    >
      <span
        className="image"
        style={{ backgroundColor: member.clientData.color }}
      />
      <div className="Message-content">
        <div className="username">{member.clientData.username}</div>
        <div className="text">{text}</div>
      </div>
    </li>
  );
}

export default Message;
