import React from "react";

export default function Alert(props) {
  const { msg } = props;
  return (
    <div style={{ height: "50px" }}>
      {msg && (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          {msg}
        </div>
      )}
    </div>
  );
}
