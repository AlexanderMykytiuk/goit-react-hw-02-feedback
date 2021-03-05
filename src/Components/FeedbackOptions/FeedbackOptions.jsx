import React from "react";
import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeavelFeedback }) => {
  return (
    <>
      {options.map((option) => (
        <button
          className={styles[option]}
          key={option}
          onClick={onLeavelFeedback}
          type="button"
          name={option}
        >
          {option}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeavelFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
