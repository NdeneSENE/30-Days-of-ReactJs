import React from "react";
import ReactDom from "react-dom";

// const Header = (props) => {
//   return <h1>Hello {props.user}</h1>;
// };

// function Layout(props) {
//   return <div style={{ background: "palegoldenrod" }}>
//     {props.children}
//   </div>;
// }

// class Header extends React.Component {
//   render() {
//     return <h1>Hello React</h1>;
//   }
// }

// function Login() {
//   return <h1>Please Login!</h1>;
// }

// function Logout() {
//   return <button>Se Deconnecter</button>;
// }

const rootNode = document.getElementById("root");

// const isAuth = true;

function App() {
  //   return (<Layout>
  //     {isAuth
  //       ? (
  //         <>
  //           <Header user="Ndene SENE" />
  //           <Logout />
  //         </>
  //       )
  //       : <Login />}
  //     {/* {isAuth && <Logout />} */}
  //     <footer>Ndene SENE 2020</footer>
  //   </Layout>);

  const people = ["Joe", "ndene", "moussa"];
  return (
    <ul>
      {people.map((person, index) => <Person key={index} person={person} />)}
      <input onChange={handleInput} />
    </ul>
  );
}

function handleInput(event) {
  const inputvalue = event.target.value;
  console.log(inputvalue);
}

function Person(props) {
  function handlePersonClick(event) {
    alert(props.person);
    console.log(event);
  }
  return <li onClick={handlePersonClick}>{props.person}</li>;
}

ReactDom.render(
  <App />,
  rootNode,
);
