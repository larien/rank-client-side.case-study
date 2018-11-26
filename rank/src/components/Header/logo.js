import React from "react";
import Logos from "./logo.svg";

const Logo = ({ name, color, size }) => (
  <svg className={`icon icon-${name}`} fill={color} width={size} height={size}>
    <use xlinkHref={`${Logos}#icon-${name}`} />
  </svg>
);

Logo.propTypes = {
  name: React.PropTypes.string.isRequired,
  color: React.PropTypes.string,
  size: React.PropTypes.number
};

export default Logo;