import React from "react";
import ChatMessage from "./chatMessage";

class chatMessageHistory extends React.Component {
  render() {
    var createMessage = function(message, index) {
      var liStyles = {
        backgroundColor: index % 2 === 1 ? "#ddd" : "#efefef",
        textAlign: index % 2 === 1 ? "left" : "right",
        padding: "1rem",
        borderBottom: "1px solid #ddd"
      };

      return (
        <li style={liStyles}>
          <ChatMessage message={message.message} />
        </li>
      );
    };

    var ulStyles = {
      listStyle: "none",
      margin: 0,
      padding: 0
    };

     return <ul style={ulStyles}>{this.props.messages.map(createMessage)}</ul>;
  }
}

export default chatMessageHistory;
