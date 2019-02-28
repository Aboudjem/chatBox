import React from "react";

class Message extends React.Component {
    Notif() {
        var x = document.getElementById("Notif");
        x.play();
    }

    preRender = (isUser) => {
        if (isUser) {
            return (
                <p className="user-message">{this.props.details.message}</p>

            )
        }
        else {
            return (
                <p className="not-user-message">
                    <strong>{this.props.details.login}</strong>:
                    {this.props.details.message}
                    {this.Notif()}
                </p>
            )
            }
        };
    render () {
        return this.preRender(this.props.isUser(this.props.details.login));

    }
}

export default Message;