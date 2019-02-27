import React from "react";

class Message extends React.Component {
    render () {
        return (
            <p className="user-message">
                {this.props.login}: Msg !
            </p>
        )

    }
}

export default Message;