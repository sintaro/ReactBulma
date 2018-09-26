import React from 'react'
import Carousel from './tabs/Carousel';
import Accordion from './tabs/Accordion';

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "carousel"
    }
  }

  handleTabClick = (clickedTab) => {
    this.setState({
      activeTab: clickedTab
    });
  }

  isTabActive = (tab) => {
    if (tab === this.state.activeTab)
      return "is-active";

    return "";
  }

  render() {
    return (
      <div className="container">
        <div className="tabs is-centered" id="tabs">
          <ul>
            <li className={this.isTabActive("carousel")} onClick={() => this.handleTabClick("carousel")}>
              <a>Carousel</a>
            </li>
            <li className={this.isTabActive("accordion")} onClick={() => this.handleTabClick("accordion")}>
              <a>Accordion</a>
            </li>
            <li className={this.isTabActive("3")} onClick={() => this.handleTabClick("3")}>
              <a>Test3</a>
            </li>
            <li className={this.isTabActive("4")} onClick={() => this.handleTabClick("4")}>
              <a>Test4</a>
            </li>
          </ul>
        </div>
        <div id="tab-content">
          <div className={"tab " + this.isTabActive("carousel")}>
            <Carousel />
          </div>
          <div className={"tab " + this.isTabActive("accordion")}>
            <Accordion />
          </div>
          <div className={"tab " + this.isTabActive("3")}>
            <p>3</p>
          </div>
          <div className={"tab " + this.isTabActive("4")}>
            <p>4</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Tabs