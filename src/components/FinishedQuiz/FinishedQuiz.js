import React from "react";
import styles from "./FinishedQuiz.module.css";
import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";

const FinishedQuiz = (props) => {
  // let totalRight = 0
  // Object.values(props.results).forEach(element => {
  //    if(element === 'success') {
  //        totalRight +=1
  //    }
  // });

  const totalRight = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === "success") {
      total++;
    }
    return total;
  }, 0);

  return (
    <div className={styles.FinishedQuiz}>
      <ul>
        {props.quiz.map((quizItem, index) => {
          const classes = [
            "fa",
            props.results[quizItem.id] === "error" ? "fa-times" : "fa-check",
            styles[props.results[quizItem.id]],
          ];
          return (
            <li key={index}>
              <strong>{index + 1}</strong>. &nbsp;
              {quizItem.question}
              <i className={classes.join(" ")}></i>
            </li>
          );
        })}
      </ul>

      <p>
        {" "}
        Total right {totalRight} of {props.quiz.length}
      </p>

      <div>
        <Button onClick={props.onRetry} type="primary">
          Play again?
        </Button>
        <Link to="/">
          <Button type="success">Go to Quiz list</Button>
        </Link>
      </div>
    </div>
  );
};

export default FinishedQuiz;
