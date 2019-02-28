import React from "react";

class Form extends React.Component {
    state = {
        length: this.props.length
    };

    createMessage = event => {
        event.preventDefault();
        const message = {
            message: this.message.value,
            login: this.props.login
        };
        this.props.addMessage(message);
        this.messageForm.reset();
        const length = this.props.length;
        this.setState({length});
    };
    count = () => {
        const length = this.props.length - this.message.value.length;
        this.setState({length});
    };

    handleKeyPress = event => {
        if (event.key === 'Enter') {
            this.createMessage(event);
        }
    };


    render() {
        return (
            <form
                className="form"
                onSubmit={e => this.createMessage(e)}
                ref={input => this.messageForm = input}
            >
                    <textarea
                        required
                        maxLength="140"
                        ref={input => this.message = input}
                        onChange={e => this.count(e)}
                        onKeyPress={this.handleKeyPress}
                    />
                <div className="info">{this.state.length}</div>
                <button type="submit">Submit</button>
            </form>
        )
    }

    static propTypes = {
        addMessage: React.PropTypes.func.isRequired,
        login: React.PropTypes.string.isRequired,
        length: React.PropTypes.number.isRequired,
    }
}

export default Form;