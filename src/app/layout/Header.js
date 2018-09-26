import React from 'react'
import { NavLink } from 'react-router-dom'

class Header extends React.Component {

  state = {
    isActive: false,
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  render() {
    return (
      <nav className="navbar"
          aria-label="main navigation"
          style={{
            borderBottom: 'solid 1px #dddddd',
          }}>
        <div className="navbar-brand">
          <NavLink
            className="navbar-item"
            to="/"
            activeClassName="is-active"
          >            
            <span>ReactBulma</span>
          </NavLink>
          <button className="button navbar-burger" onClick={this.toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={ this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-start">
            <NavLink
              className="navbar-item"
              to="/tabs"
              activeClassName="is-active"
            >
              <span className="icon has-text-primary" style={{ marginRight: 5 }}>
                <i className="fas fa-columns"></i>
              </span>
              Tabs
            </NavLink>
          </div>
        </div>
        <div className={ this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-start">
            <NavLink
              className="navbar-item"
              to="/pagination"
              activeClassName="is-active"
            >
              <span className="icon has-text-primary" style={{ marginRight: 5 }}>
                <i className="fas fa-ellipsis-h"></i>
              </span>
              Pagination
            </NavLink>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header