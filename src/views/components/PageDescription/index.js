import React from "react";
import { string } from "prop-types";

function PageDescription(props) {
  const { description } = props;

  return <p>{description}</p>;
}

PageDescription.propTypes = {
  description: string
};

PageDescription.defaultProps = {
  description: ""
};

export default PageDescription;
