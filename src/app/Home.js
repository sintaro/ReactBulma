import React from 'react'
import Card from './home/Card';
import CardControl from './home/CardControl';

class Home extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      cards: 2
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(selectedChoice){
    var cards = this.state.cards;
    if (selectedChoice === "ADD"){
      cards++;
    } else if (selectedChoice === "REMOVE" && cards > 0){
      cards--;
    }
    this.setState({
      cards: cards
    });
  }

  createCards = () => { 
    var cardsToCreate = this.state.cards;
    var cards = [];
    for(var i = 0; i < cardsToCreate; i++){
      var cardName = "Card " + (i+1);
      cards.push(<Card key={i} name={cardName} />);
    }
    return cards;
  };

  render() {
    return (
      <main className="main-container">
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">ReactBulma Test</h1>
              <h2 className="subtitle">David testar React + Bulma, Currently displaying {this.state.cards} cards.</h2>
            </div>
          </div>
        </section>
        <section className="card-container">
          <div className="columns is-centered">
            <div className="column is-half columns">              
              {this.createCards()}
            </div>
          </div>
        </section>
        <section className="button-section">
          <CardControl clickHandler={(selectedChoice) => this.handleClick(selectedChoice)}/>
        </section>
      </main>
    )
  }
}

export default Home