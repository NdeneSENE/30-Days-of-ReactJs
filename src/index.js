import React from "react";
import ReactDom from "react-dom";

const baseUrl = "https://api.github.com/users/";

function App() {
  const [username, setUsername] = React.useState("NdeneSENE");
  const [user, setUser] = React.useState(null);
  const searchInput = React.useRef();

  async function getUser() {
    const response = await fetch(`${baseUrl}${username}`);
    const data = await response.json();
    setUser(data);
  }
  function handleClearInput() {
    searchInput.current.value = "";
    searchInput.current.focus();
  }
  React.useEffect(() => {
    getUser();

    // fetch(endpoint)
    //   .then((response) => response.json())
    //   .then((data) => setUser(data));
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        onChange={(event) => setUsername(event.target.value)}
        ref={searchInput}
      />
      <button onClick={getUser}>Search</button>
      <button onClick={handleClearInput}>Clear</button>
      {user
        ? (
          <div>
            <h1>{user.name}</h1>
            <p>{user.bio}</p>
            <img alt="avatar" src={user.avatar_url} style={{ height: 50 }} />
          </div>
        )
        : (
          <p>Loading...</p>
        )}
    </div>
  );
}

const rootNode = document.getElementById("root");

ReactDom.render(
  <App />,
  rootNode,
);
