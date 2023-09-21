import React, { useState, useEffect } from "react";
import axios from "axios";

const Users = (props) => {
  const [users, setUsers] = useState();
  const id = props.id;

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="users-wrapper">
      {users &&
        users.map((el) =>
          el.id === id ? (
            <div key={el.id} className="user-container">
              <p className="name">Name: {el.name}</p>
              <p className="username">Username: {el.username}</p>
              <p className="email">Email: {el.email}</p>
              <p className="address">Address: {el.address.street}</p>
              <p className="company">Company: {el.company.name}</p>
              <p className="postsby">Posts by {el.name}</p>
            </div>
          ) : (
            ""
          )
        )}
    </div>
  );
};

export default Users;
