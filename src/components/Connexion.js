import React from "react";
import Logo from "../../public/img/logo.png"
class Connexion extends React.Component {
    goToChat = event => {
        event.preventDefault();
        console.log('ok');
        const login = this.loginInput.value;
        this.context.router.transitionTo(`/login/${login}`);
    };

    handleKeyPress = event => {
        if (event.key === 'Enter') {
            this.goTochat(event);
        }
    };

    render () {
        return(


            <div className="connexionBox">
                <img src={Logo} alt="logo" className="logo"/>
                <form className="connexion" onSubmit={(e) => this.goToChat(e)}>
                    <input type="text" placeholder="Login"
                           required
                           ref={input => {
                               this.loginInput = input
                           }}
                           onKeyPress={this.handleKeyPress}
                    />
                    <button type="submit">Connect</button>
                </form>
            </div>        )
    }
    static contextTypes = {
        router: React.PropTypes.object
    }
}

export default Connexion;