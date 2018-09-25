import React from 'react'

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cardAnimatedClass: "",
            image: ""
        }
    }

    componentWillMount() {
        fetch("https://picsum.photos/list")
            .then(response => response.json())
            .then(data => {
                var item = data[Math.floor(Math.random() * data.length)];

                var imageSrc = "https://picsum.photos/1280/960/?image=" + item.id;
                var image = <img src={imageSrc} alt="placeholder" />
                this.setState({
                    image: image
                });
            });
    }

    performAnimation = (type) => {
        var cardAnimatedClass = "card-animation-" + type;
        this.setState({
            cardAnimatedClass: cardAnimatedClass
        });
        setTimeout(() => {
            this.setState({
                cardAnimatedClass: ""
            });
        }, 300);
    }

    render() {
        return (
            <div className={"column card " + this.state.cardAnimatedClass}>
                <div className="card-header">
                    <h1 className="card-header-title">{this.props.name}</h1>
                </div>
                <div className="card-image">
                    <figure className="image is-4by3">
                        {this.state.image}
                    </figure>
                </div>
                <footer className="card-footer">
                    <div className="card-footer-item has-text-centered">
                        <button onClick={() => this.performAnimation("LIKE")} className="button is-success"><i className="fas fa-thumbs-up fa-lg"></i></button>
                    </div>
                    <div className="card-footer-item has-text-centered">
                        <button onClick={() => this.performAnimation("DISLIKE")} className="button is-danger"><i className="fas fa-thumbs-down fa-lg"></i></button>
                    </div>
                    <div className="card-footer-item has-text-centered">
                        <button onClick={() => this.performAnimation("RETWEET")} className="button is-info"><i className="fas fa-retweet fa-lg"></i></button>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Card