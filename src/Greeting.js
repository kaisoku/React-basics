import React from "react";

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.greetingGuest = this.greetingGuest.bind(this);
    this.grretingUser = this.grretingUser.bind(this);
  }

  grretingUser() {
    return <h1>Bienveue {this.props.user}</h1>;
  }

  greetingGuest() {
    return <h1>Bienvenue, Bel inconnu</h1>;
  }

  render() {
    return this.props.isLoggedOn ? this.grretingUser() : this.greetingGuest();
  }
}
