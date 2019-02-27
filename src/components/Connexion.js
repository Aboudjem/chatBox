import React from "react";

class Connexion extends React.Component {
    goToChat = event => {
        event.preventDefault();
        console.log('ok');
        console.log(this.loginInput.value);
    };
    render () {
        return(
            <div className="connexionBox">
                <form className="connexion" onSubmit={(e) => this.goToChat(e)}>
                    <input type="text" placeholder="Login"
                           required
                           ref= {input => {
                               this.loginInput = input
                           }
                    }/>
                    <button type="submit">Send</button>
                </form>
            </div>
        )
    }
}

export default Connexion;