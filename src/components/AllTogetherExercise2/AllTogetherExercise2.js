import React from "react";

import "./AllTogetherExercise2.css";
import ChatWindow from "./ChatWindow";
/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: "Amy" }, { username: "John" }];

const messages = [
  // { username: "Amy", text: "Hi, Jon!" },
  // { username: "Amy", text: "How are you?" },
  // { username: "John", text: "Hi, Amy! Good, you?" }
];

class AllTogetherExercide2 extends React.Component {
  state = {
    messages: messages
  };

  onNewMessage = (username, message) => {
    // console.log(`${username} sent message: ${message}`);
    this.setState(state => ({
      messages: state.messages.concat([{ username, text: message }])
    }));
  };

  render() {
    const { messages } = this.state;

    return (
      <div>
        <h1>AllTogetherExercide2</h1>
        <div className="container">
          {users.map(user => (
            <ChatWindow
              key={user.username}
              user={user}
              messages={messages}
              onNewMessage={this.onNewMessage}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default AllTogetherExercide2;
