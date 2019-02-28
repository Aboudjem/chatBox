import React from "react";

class Message extends React.Component {
    Notify() {
        const x = document.getElementById("notify");
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
                    {this.Notify()}
                </p>
            )
        }
    };

    render() {
        return this.preRender(this.props.isUser(this.props.details.login));
    }

    static propTypes = {
        details: React.PropTypes.object.isRequired
    };
}

export default Message;