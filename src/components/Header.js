import React from "react";

function Header({ user, setUser }) {
  return (
    <div>
      <h2>Bienvenue, {user}!</h2>
      <button onClick={() => setUser("")}>Logout</button>
    </div>
  );
}

export default Header;
