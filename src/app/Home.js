import React from 'react'
import Card from './home/Card';
import CardControld from './home/CardControl';
import CardControl from './home/CardControl';

class Home extends React.Component {
  render() {
    return (
      <main className="main-container">
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">ReactBulma Test</h1>
              <h2 className="subtitle">David testar React + Bulma</h2>
            </div>
          </div>
        </section>
        <section className="card-container">
          <div className="columns is-centered">
            <div className="column is-half columns">
              <Card />
              <Card />
            </div>
          </div>
        </section>
        <section className="button-section">
          <CardControl />
        </section>
      </main>
    )
  }
}

export default Home