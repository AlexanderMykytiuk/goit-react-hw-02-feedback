import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <div>
      <p className={styles.good}>
        Good: <span>{good}</span>
      </p>
      <p className={styles.neutral}>
        Neutral: <span>{neutral}</span>
      </p>
      <p className={styles.bad}>
        Bad: <span>{bad}</span>
      </p>
      <p>
        Total:
        <span> {total}</span>
      </p>
      <p className={styles.total}>
        Positive feedback:
        {percentage}
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.object.isRequired,
};

export default Statistics;
