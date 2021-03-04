import React from "react";
import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeavelFeedback }) => {
  return (
    <div>
      {options.map((option) => (
        <button
          className={styles[option]}
          type="button"
          name={option}
          onClick={onLeavelFeedback}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.func.isRequired,
  onLeavelFeedback: PropTypes.array.isRequired,
};

export default FeedbackOptions;
