import React from "react";

class Message extends React.Component {
    render () {
        return (
            <p className="user-message">
                {this.props.details.login}: {this.props.details.message}
            </p>
        )

    }
}

export default Message;