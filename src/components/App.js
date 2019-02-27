import React from "react";
import Formulaire from './Formulaire';
import Message from './Message';

class App extends React.Component {
    state = {
        messages: {}
    };

    addMessage = (message) => {
        const messages = {...this.state.messages};
        const timestamp = Date.now();
        messages[`message-${timestamp}`] = message;
        this.setState({messages});
    };

    render () {
        return(
            <div className="box">
                <div>
                    <div className="messages">
                        <Message login={this.props.params.login} />
                    </div>
                    <Formulaire addMessage={this.addMessage} login={this.props.params.login} length="140" />
                </div>
            </div>
        )
    }
}

export default App;