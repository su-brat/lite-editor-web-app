import React from "react";

export default function Alert(props) {
  const { msg } = props;
  return (
    msg && (
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        {msg}
      </div>
    )
  );
}
