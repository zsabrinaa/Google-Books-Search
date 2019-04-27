import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SaveBtn(props) {
  return (
    <span className="btn btn-primary save-btn" {...props} role="button" tabIndex="0">
      Save for later
    </span>
  );
}

export default SaveBtn;
