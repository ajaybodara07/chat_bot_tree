import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

class ChatMessage extends React.Component {
  render() {
    return (
      //  <p style={{marginBottom: 0}}>{this.props.message}</p>
      <Card>
        <CardContent>
          <Typography
            style={{ marginBottom: 0 }}
            color="textSecondary"
            gutterBottom
          >
            {this.props.message}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default ChatMessage;
