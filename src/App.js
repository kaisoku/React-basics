import "./styles.css";
import Clock from "./Clock";
import Toggle from "./Toggle";
import Greeting from "./Greeting";
import { useState } from "react";
import MailBox from "./MailBox";
import List from "./List";
import Form from "./Form";
import Calculator from "./Calculator";

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

let user = {
  firstName: "Kylian",
  lastName: "Mbappé"
};

export default function App() {
  const [isLoggedOn, setIsloggedOn] = useState(false);
  const unreadMessage = ["Bonjour", "Bonne année", "Bon anniversaire"];
  const todos = [
    {
      userId: 1,
      id: 1,
      title: "Write a book",
      completed: false
    },
    {
      userId: 1,
      id: 2,
      title: "Finish React tutorial",
      completed: false
    },
    {
      userId: 1,
      id: 3,
      title: "Learn NodeJs",
      completed: true
    }
  ];
  function handleClick(e) {
    e.preventDefault();
    setIsloggedOn(!isLoggedOn);
  }

  return (
    <div className="App">
      <button onClick={handleClick}>
        {isLoggedOn ? "Se déconnecter" : "Se connecter"}
      </button>
      <Greeting user={formatName(user)} isLoggedOn={isLoggedOn} />
      <MailBox unreadMessages={unreadMessage} isLogged={isLoggedOn} />
      <Clock />
      <Toggle />
      <h2>Start editing to see some magic happen!</h2>
      {todos.map((todo) => {
        return <List key={todo.id} value={todo.title} />;
      })}
      <Form />
      <Calculator />
    </div>
  );
}
