import React, { useState } from "react";
import "./AddUsers.css";
import ErrorModal from "./ErrorModal";

const AddUsers = (props) => {
  const [enteredUser, setEnteredUser] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addBirthdayHandler = (event) => {
    event.preventDefault();
  };

  const userNameHandler = (event) => {
    setEnteredUser(event.target.value);
  };

  const userAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUser.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non empty values)",
      });
      return;
    }
    if (+enteredAge < 1 || +enteredAge > 100) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (betw 0 - 100)",
      });
      return;
    }
    props.onAdduser(enteredUser, enteredAge);
    setEnteredUser("");
    setEnteredAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          okay={errorHandler}
        />
      )}
      <div className="main-container">
        <h2>BIRTHDAY REMINDER</h2>
        <form className="form-container" onSubmit={addBirthdayHandler}>
          <label htmlFor="username">Name</label>
          <input
            type="text"
            className="username"
            value={enteredUser}
            onChange={userNameHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            min="1"
            className="age"
            value={enteredAge}
            onChange={userAgeHandler}
          />
          <button className="btn" onClick={addUserHandler}>
            + Birthday
          </button>
        </form>
      </div>
    </>
  );
};
export default AddUsers;
