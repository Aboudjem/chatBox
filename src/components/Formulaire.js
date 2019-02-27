import React from "react";

class Formulaire extends React.Component {
    render () {
        return(
                <form className="form">
                    <textarea required maxLength="14" />
                        <div className="info">140</div>
                        <button type="submit">Submit</button>
                </form>
        )
    }
}



export default Formulaire;