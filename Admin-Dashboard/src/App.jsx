import { useState } from "react";
import "./App.css";

import Dashboard from "./Components/Dashboard";
import Users from "./Components/Users";
import Reports from "./Components/Reports";
import StatsCards from "./Components/StatsCards";

function App() {
  const [users, setUsers] =
    useState([]);

  const [name, setName] =
    useState("");

  const revenue =
    users.length * 500;

  const addUser = () => {
    if (!name) return;

    setUsers([
      ...users,
      {
        id: Date.now(),
        name,
      },
    ]);

    setName("");
  };

  const deleteUser = (id) => {
    setUsers(
      users.filter(
        (user) => user.id !== id
      )
    );
  };

  return (
    <div className="container">
      <h1>Admin Dashboard</h1>

      <StatsCards
        totalUsers={users.length}
        revenue={revenue}
      />

      <Dashboard />

      <input
        type="text"
        placeholder="User Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <button onClick={addUser}>
        Add User
      </button>

      <Users
        users={users}
        deleteUser={deleteUser}
      />

      <Reports
        totalUsers={users.length}
        revenue={revenue}
      />
    </div>
  );
}

export default App;
