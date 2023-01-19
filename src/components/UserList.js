import React from "react";
import "./UserList.css";
const UserList = (props) => {
  return (
    <div className="userlist-container">
      <div className="list-title">
        <h5>Birthday List</h5>
      </div>
      <ul className="ulist">
        {props.users.map((user) => {
          const iname = user.name.charAt(0);
          return (
            <li key={user.id}>
              <div className="list-sort">
                <div className="avatar">
                  <h2>{iname.toUpperCase()}</h2>
                </div>
                <h4>{user.name}</h4>
                <span>({user.age}) Years</span>
                <button className="btn" onClick={() => props.remove(user.id)}>
                  remove
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default UserList;
