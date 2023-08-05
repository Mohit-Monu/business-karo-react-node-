import DisplayPackage from "./DisplayPackage";
import DisplayTop from "./DisplayTop";
import React, { Fragment } from "react";
function DisplayDetails(props) {
  return (
    <Fragment>
      <DisplayTop theme={props.theme}>
        Welcome to Business Karo just share one time and earn lifetime.
      </DisplayTop>
      <DisplayPackage theme={props.theme} ></DisplayPackage>
    </Fragment>
  );
}
export default DisplayDetails;
