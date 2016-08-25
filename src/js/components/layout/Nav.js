import React from 'react';
import { IndexLink, Link } from 'react-router'

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    }
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({ collapsed });
  }

  render() {
    const location = this.props;
    const { collapsed } = this.state;
    // const featuredClass = location.pathname === "/" ? "active" : "";
    // const archivesClass = location.pathname.match(/\/archives/) ? "active" : "";
    // const settingsClass = location.pathname.match(/\/settings/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return(
      <nav>
        <button className="nav-btn" onClick={this.toggleCollapse.bind(this)}>
          <span>Toggle Nav</span>
        </button>
        <div className={navClass}>
          <ul>
            <li activeClassName="active">
              <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Featured</IndexLink>
            </li>
            <li activeClassName="active">
              <Link to="archives" onClick={this.toggleCollapse.bind(this)}>Archives</Link>
            </li>
            <li activeClassName="active">
              <Link to="settings" onClick={this.toggleCollapse.bind(this)}>Settings</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
