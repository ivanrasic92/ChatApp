import React from "react";
import "./App.css";
import Inputt from "./components/Inputt";
import Messagess from "./components/Messagess";

const names = require("starwars-names");
const oneRandomNames = names.random(1);

function randomColor() {
  const randomColorRGB = require("random-color-rgb");
  return randomColorRGB({ max: 100 });
}

function randomName() {
  return oneRandomNames;
}

class App extends React.Component {
  state = {
    messages: [],
    member: {
      username: randomName(),
      color: randomColor(),
      id:""
    },
  };
  componentDidMount() {
    this.drone = new window.Scaledrone("WV8u4T14NE6Nvcb2", {
      data: this.state.member,
    });
    this.drone.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
      const member = { ...this.state.member };
      member.id = this.drone.clientId;

      this.setState({ member: member });
    });
    const room = this.drone.subscribe("observable-room");
    room.on("data", (data, member) => {
      const messages = this.state.messages;
      messages.push({ member, text: data });
      this.setState({ messages: messages });
    });
  }

  componentWillUnmount() {
    this.drone.close();
    this.setState({ message: [] });
    this.setState({ member: "" });
  }

  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <h1 className="display-4">Chat App</h1>
        </div>
        <Messagess
          messages={this.state.messages}
          currentMember={this.state.member}
        />

        <Inputt onSendMessage={this.onSendMessage} />
      </div>
    );
  }

  onSendMessage = (message) => {
    this.drone.publish({
      room: "observable-room",
      message,
    });
  };
}

export default App;
