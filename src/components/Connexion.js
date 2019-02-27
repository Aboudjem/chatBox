import React from "react";

class Connexion extends React.Component {
    goToChat = event => {
        event.preventDefault();
        console.log('ok');
        const login = this.loginInput.value;
        this.context.router.transitionTo(`/login/${login}`);
    };
    render () {
        return(
            <div className="connexionBox">
                <form className="connexion" onSubmit={(e) => this.goToChat(e)}>
                    <input type="text" placeholder="Login"
                           required
                           ref={input => {
                               this.loginInput = input
                           }
                    }/>
                    <button type="submit">Send</button>
                </form>
            </div>
        )
    }
    static contextTypes = {
        router: React.PropTypes.object
    }
}

export default Connexion;