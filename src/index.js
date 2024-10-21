import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const GradientTexts = (text) => {
  return <span className="text-gradient">{text}</span>;
};

export default GradientTexts;

GradientTexts.propTypes = {
  text: PropTypes.string.isRequired,
};
