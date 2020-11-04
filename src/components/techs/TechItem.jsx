import React from "react";
import PropTypes from "prop-types";

const TechItem = ({ tech }) => {
  return (
    <li className="collection-item">
      <span>Tech ID:{tech.id}</span>
      <span>Tech First Name: {tech.firstName}</span>
      <span>Tech Last Name: {tech.lastName}</span>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
};

export default TechItem;
