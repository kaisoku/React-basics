import React from "react";
import Icon from "@mdi/react";
import { mdiLightbulbOnOutline, mdiLightbulbOutline } from "@mdi/js";

export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? (
          <Icon
            path={mdiLightbulbOnOutline}
            title="User Profile"
            size={1}
            horizontal
            vertical
            rotate={90}
            color="blue"
            spin
          />
        ) : (
          <Icon
            path={mdiLightbulbOutline}
            title="User Profile"
            size={1}
            horizontal
            vertical
            rotate={90}
            color="black"
            spin
          />
        )}
      </button>
    );
  }
}
