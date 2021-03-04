import React from "react";
import PropTypes from "prop-types";

const Notification = ({ message }) => {
  return (
    <div>
      <h2>Statistic</h2>
      <h3>{message}</h3>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
