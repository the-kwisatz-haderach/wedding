import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "2rem",
        display: "flex",
        justifyContent: "flex-end",
        color: "white",
        backgroundColor: "#f57373",
      }}
    >
      <div>
        Icons made by{" "}
        <a
          href="https://www.freepik.com"
          title="Freepik"
          target="_blank"
          rel="noreferrer"
        >
          Freepik
        </a>{" "}
        from{" "}
        <a
          href="https://www.flaticon.com/"
          title="Flaticon"
          target="_blank"
          rel="noreferrer"
        >
          www.flaticon.com
        </a>
      </div>
      <span
        style={{
          marginLeft: 8,
          marginRight: 8,
        }}
      >
        |
      </span>
      <a href="https://www.freepik.com/vectors/flower">
        Flower vector created by asrulaqroni - www.freepik.com
      </a>
    </footer>
  );
}
