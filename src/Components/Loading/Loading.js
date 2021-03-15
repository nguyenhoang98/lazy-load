import React from "react";
import "./Loading.css";
import loading from "../../accset/loading-icon-animated-gif-19.jpg";
import PropTypes from "prop-types";

Loading.propTypes = {};

function Loading(props) {
  return (
    <div className="loading">
      <img src={loading} alt="loading" className="img-loading" />
    </div>
  );
}

export default Loading;
