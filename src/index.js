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

  // const people = ["Joe", "ndene", "moussa"];
  // return (
  //   <ul>
  //     {people.map((person, index) => <Person key={index} person={person} />)}
  //     <input onChange={handleInput} />
  //   </ul>
  // );

  const [developer, setDeveloper] = React.useState({
    langage: "Python",
    yearExperience: 0,
    isEmployed: false,
    name: "",
  });

  // const [langage, setlangage] = React.useState("python");
  // const [yearExperience, setYearExperience] = React.useState(0);

  React.useEffect(() => {
    document.title = developer.name;
    console.log("runs");
  }, [developer.name]);

  //const inputValue = inputState[0];
  //const setInputValue = inputState[1];
  // function handleInput(event) {
  //   setInputValue(event.target.value);
  // }

  function handleChangeLangage() {
    setDeveloper({
      langage: "javascript",
      yearExperience: 0,
    });
  }

  function handleChangeYearExperience(event) {
    setDeveloper({
      ...developer,
      yearExperience: event.target.value,
    });
  }
  function handleToggleEmployment() {
    setDeveloper((prevState) => ({
      ...prevState,
      isEmployed: !prevState.isEmployed,
    }));
  }

  function handleChangeName(event) {
    setDeveloper({
      ...developer,
      name: event.target.value,
    });
  }

  return (
    <div>
      <div>
        <button onClick={handleToggleEmployment}>
          Toggle Employment Status
        </button>
      </div>
      <div>
        <input
          type="number"
          onChange={handleChangeYearExperience}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Votre nom"
          onChange={handleChangeName}
        />
      </div>
      <button
        onClick={handleChangeLangage}
      >
        Change Langage
      </button>
      <p>
        Je suis entrain d'apprendre {developer.langage} et j'ai {developer
          .yearExperience}
        ans d'expérience.
      </p>

      <p>
        Employment Status: {developer.isEmployed ? "Employed" : "Unemployed"}
      </p>
    </div>
  );
}

// function Person(props) {
//   function handlePersonClick(event) {
//     alert(props.person);
//     console.log(event);
//   }
//   return <li onClick={handlePersonClick}>{props.person}</li>;
// }

ReactDom.render(
  <App />,
  rootNode,
);
