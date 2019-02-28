import React from "react";
import Formulaire from './Formulaire';
import Message from './Message';
import base from '../Base';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class App extends React.Component {
    state = {
        messages: {}
    };

    componentWillMount(){
        this.ref = base.syncState('/', {
            context: this,
            state: 'messages'
        });
    }

    addMessage = (message) => {
        const messages = {...this.state.messages};
        const timestamp = Date.now();
        messages[`message-${timestamp}`] = message;
        Object.keys(messages).slice(0, -10).map(key => messages[key] = null);
        this.setState({messages});
    };

    render () {
        const messages = Object
            .keys(this.state.messages)
            .map(key => <Message key={key} details={this.state.messages[key]} /> )
        ;
        return(
            <div className="box">
                <div>
                    <div className="messages">
                        {messages}
                    </div>
                    <Formulaire addMessage={this.addMessage} login={this.props.params.login} length="140" />
                </div>
            </div>
        )
    }
}

export default App;