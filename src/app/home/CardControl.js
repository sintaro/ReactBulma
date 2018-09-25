import React from 'react'

class CardControl extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            addButtonDisabled: false,
            removeButtonDisabled: true
        }
    }

    componentDidUpdate() {
        var addButtonDisabled = false;
        var removeButtonDisabled = false;

        if (this.props.cardCount >= 8) {
            addButtonDisabled = true;
        } else if (this.props.cardCount <= 1) {
            removeButtonDisabled = true;
        }

        if (
            this.state.addButtonDisabled !== addButtonDisabled || 
            this.state.removeButtonDisabled !== removeButtonDisabled
            ) {
            this.setState({
                addButtonDisabled: addButtonDisabled,
                removeButtonDisabled: removeButtonDisabled
            });
        }
    }
    render() {
        return (
            <div className="columns is-centered button-container">
                <div className="column is-one-fifth">
                    <div className="box">
                        <div className="columns">
                            <div className="column has-text-centered button-wrapper">
                                <button className="button is-primary" disabled={this.state.addButtonDisabled} onClick={() => this.props.clickHandler("ADD")}>
                                    <span className="icon"><i className="fas fa-arrow-up fa-lg"></i></span>
                                </button>
                                <p className="is-italic has-text-weight-light">Add</p>
                            </div>
                            <div className="is-divider-vertical" data-content="OR"></div>
                            <div className="column has-text-centered button-wrapper">
                                <button className="button is-primary" disabled={this.state.removeButtonDisabled} onClick={() => this.props.clickHandler("REMOVE")}>
                                    <span className="icon"><i className="fas fa-arrow-down fa-lg"></i></span>
                                </button>
                                <p className="is-italic has-text-weight-light">Remove</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardControl