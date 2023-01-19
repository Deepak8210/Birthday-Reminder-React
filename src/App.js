import React, { useState } from "react";
import "./App.css";
import AddUsers from "./components/AddUsers";
import UserList from "./components/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  let id = new Date().getTime();
  const removeHandler = (id) => {
    let newList = userList.filter((list) => list.id !== id);
    setUserList(newList);
  };

  const addUserHandler = (uName, uAge) => {
    setUserList((prevList) => {
      return [...prevList, { id, name: uName, age: uAge }];
    });
  };

  return (
    <div className="App">
      <AddUsers onAdduser={addUserHandler} />
      <UserList users={userList} remove={removeHandler} />
    </div>
  );
}

export default App;
