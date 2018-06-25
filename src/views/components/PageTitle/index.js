import React from "react";
import { string } from "prop-types";

function PageTitle(props) {
  const { title } = props;

  return <h2>{title}</h2>;
}

PageTitle.propTypes = {
  title: string
};

PageTitle.defaultProps = {
  title: ""
};

export default PageTitle;
