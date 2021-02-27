// Dependencies
import React from "react";

// Styles
import "./spinner.scss";

const Spinner = () => {
  return (
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Spinner;
