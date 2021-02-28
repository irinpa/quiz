import React, { Component } from "react";
import styles from "./Drawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import { NavLink } from 'react-router-dom'

const links = [
  {to: '/', label: 'Quiz List', exact: true},
  {to: '/auth', label: 'Auth', exact: false},
  {to: '/quiz-creator', label: 'Quiz Creator', exact: false}
];

class Drawer extends Component {
  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.to}
            exact={link.exact}
            className={styles.active}
            onClick={this.props.onClose}
          >
            {link.label}
          </NavLink>
        </li>
      );
    });
  }

  render() {
    const classes = [styles.Drawer];

    if (!this.props.isOpen) {
      classes.push(styles.closed);
    }
    return (
      <>
        <nav className={classes.join(" ")}>
          <ul>{this.renderLinks()}</ul>
        </nav>
        {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
      </>
    );
  }
}
export default Drawer;
