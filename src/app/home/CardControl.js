import React from 'react'

class CardControl extends React.Component {
    render() {
        return (
            <div className="columns is-centered button-container">
                <div className="column is-one-fifth">
                    <div className="box">
                        <div className="columns">
                            <div className="column has-text-centered button-wrapper">
                                <button className="button is-primary">
                                    <span className="icon"><i className="fas fa-arrow-up fa-lg"></i></span>
                                </button>
                                <p className="is-italic has-text-weight-light">Add</p>
                            </div>
                            <div className="is-divider-vertical" data-content="OR"></div>
                            <div className="column has-text-centered button-wrapper">
                                <button className="button is-primary">
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