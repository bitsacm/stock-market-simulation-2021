import { Component } from "react";
import React from "react";
import styles from "./Instructions.module.css";

class Instructions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visible
    };
  }

  changeVisibilty() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    const classes = this.state.visible ? styles.box_vis : styles.box_hid;

    return (
      <div className={classes}>
        <p>
          <b>Instructions</b>
        </p>
        <p>
          1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non morbi
          semper commodo nisl condimentum lectus. Neque dolor euismod rhoncus
          et. <br />
          1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non morbi
          semper commodo nisl condimentum lectus. Neque dolor euismod rhoncus
          et. <br />
          1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p onClick={this.changeVisibilty.bind(this)}>
          <b>BACK</b>
        </p>
      </div>
    );
  }
}

export default Instructions;
