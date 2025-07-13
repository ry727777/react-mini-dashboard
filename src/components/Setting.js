import React, { useState } from "react";
import "./Setting.css";

const Setting = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="setting-wrapper">
      <form onSubmit={handleSubmit} className="setting-form">
        <h2>Create Users</h2>
        <input
          type="text"
          placeholder="Username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Set Password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Setting;
