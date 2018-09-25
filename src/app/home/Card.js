import React from 'react'

class Card extends React.Component {
  render(){
    return(
        <div className="column card">
            <div className="card-header">
                <h1 className="card-header-title">{this.props.name}</h1>
            </div>
            <div className="card-image">
            <figure className="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="placeholder" />
            </figure>
            </div>
            <footer className="card-footer">
                <div className="card-footer-item has-text-centered">
                <button className="button is-success"><i className="fas fa-thumbs-up fa-lg"></i></button>
                </div>
                <div className="card-footer-item has-text-centered">
                <button className="button is-danger"><i className="fas fa-thumbs-down fa-lg"></i></button>
                </div>
                <div className="card-footer-item has-text-centered">
                <button className="button is-info"><i className="fas fa-retweet fa-lg"></i></button>
                </div>
            </footer>
        </div>
    )
  }
}

export default Card