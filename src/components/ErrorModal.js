import React from "react";
import "./ErrorModal.css";

const ErrorModal = (props) => {
  return (
    <>
      <div className="backdrop" onClick={props.okay} />
      <div className="errormodal-container">
        <header className="error-title">
          <h2>{props.title}</h2>
        </header>
        <div className="error-content">{props.message}</div>
        <footer className="error-action">
          <button className="error-btn" onClick={props.okay}>
            Okay
          </button>
        </footer>
      </div>
    </>
  );
};
export default ErrorModal;
