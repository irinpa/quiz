import React, { Component } from "react";
import styles from './QuizList.module.css'
import { NavLink } from 'react-router-dom'

export default class QuizList extends Component {

  renderQuizes() {
    return [1,2,3].map((quiz, index) => {
      return(
        <li key={index}>
          <NavLink to={'/quiz/' + quiz}>
            Quiz {quiz}
          </NavLink>
        </li>
      )
    })
  }

  render() {
    return (
      <div className={styles.QuizList}>
        <div>
          <h1>List of all quizes</h1>
          <ul>
            {this.renderQuizes()}
          </ul>
        </div>
      </div>
    );
  }
}

