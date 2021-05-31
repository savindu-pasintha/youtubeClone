import React from "react";

export default function VidioDiscription(props) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: "10px",
      }}
    >
      <p
        style={{
          width: "auto",
          height: "auto",
        }}
      >
        {props.discriptiondata}
      </p>
    </div>
  );
}
