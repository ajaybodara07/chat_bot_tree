import React from "react";
import { connect } from "react-redux";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ChatMessageHistory from "./chatMessageHistory";
import { Staff_Party_Master_Get } from "../../store/action/chat_action";
import './chatbot.css';
const { SocketClient } = require("@cognigy/socket-client");


var MESSAGES = [{ message: "Hello" }];

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    // Don't do this!
    this.state = {
      messages: MESSAGES,
      inputText: ""
    };
  }

  handleSubmit = e => {
    // create a client instance with a socket url and an url token
    let client = new SocketClient(
      "https://endpoint-demo.cognigy.ai",
      "ce5c41bdbd3cc71fbb81b0f192e46c9b1f306988cc03d9bc5a348ad96d249aba",
      {
        // if you use node, internet explorer or safari, you need to enforce websockets
        forceWebsockets: true
      }
    );
    e.preventDefault();
    if (this.state.inputText.length === 0) {
      console.log("Please Enter Message");
    } else {
      // send a message with text, text and data, data only
      client.sendMessage(this.state.inputText);

      var nextMessages = this.state.messages.concat([
        { message: this.state.inputText }
      ]);
      var nextInputText = "";
      this.setState({ messages: nextMessages, inputText: nextInputText });
    }
    (async () => {
      // register a handler for messages
      client.on("output", output => {
        console.log("Message: " + output.text);
      });

      // establish a socket connection (returns a promise)
      await client.connect();
    })();
  };

  onChange(e) {
    this.setState({ inputText: e.target.value });
  }

  render() {
    var windowStyles = {
      maxWidth: "35em",
      margin: "1rem auto"
    };

    var formStyles = {
      display: "flex"
    };

    var inputStyles = {
      flex: "1 auto",
      marginRight:'5px'
    };

    return (
      <div style={windowStyles}>
        <ChatMessageHistory messages={this.state.messages} />
        <div style={windowStyles}>
          <form style={formStyles}>
            <TextField
              id="message_here"
              label="Message"
              placeholder="Your message here..."
              variant="outlined"
              style={inputStyles}
              type="text"
              onChange={e => this.onChange(e)}
              value={this.state.inputText}
            />
            <Button
              onClick={this.handleSubmit}
              className="btnStyles"
              variant="contained"
              color="primary"
            >
              Send
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
   return {
     Staff_Party_Master_Get: data => dispatch(Staff_Party_Master_Get(data))
   };
 }
 

export default connect(null, mapDispatchToProps )(Welcome);
