import React from "react";
import Form from './Form';
import Message from './Message';
import base from '../Base';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../animation.css';

class App extends React.Component {
    state = {
        messages: {}
    };

    componentWillMount() {
        this.ref = base.syncState('/', {
            context: this,
            state: 'messages'
        });
    }

    componentDidUpdate() {
        this.messages.scrollTop = this.messages.scrollHeight;
    }

    addMessage = (message) => {
        const messages = {...this.state.messages};
        const timestamp = Date.now();
        messages[`message-${timestamp}`] = message;
        Object.keys(messages).slice(0, -10).map(key => messages[key] = null);
        this.setState({messages});
    };

    isUser = (login) => {
        return login === this.props.params.login;
    };

    render() {
        const messages = Object
            .keys(this.state.messages)
            .map(key => <Message key={key} isUser={this.isUser} details={this.state.messages[key]}/>)
        ;
        return (
            <div className="box">
                <div>
                    <div className="messages" ref={input => this.message = input}>
                        <ReactCSSTransitionGroup
                            component="div"
                            className="message"
                            transitionName="message"
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={500}>
                            {messages}
                        </ReactCSSTransitionGroup>
                    </div>
                    <Form addMessage={this.addMessage} login={this.props.params.login} length={140}/>
                </div>
            </div>
        )
    }

    static propTypes = {
        params: React.PropTypes.object.isRequired
    };
}

export default App;