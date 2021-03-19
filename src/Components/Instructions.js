import { Component } from "react";
import React from "react";
import styles from "./Instructions.module.css";
import { Modal } from "shards-react";

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
    return (
      <Modal
        className={styles.box}
        open={this.props.modalVisible}
        toggle={this.props.toggleModal}
      >
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
          1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 1. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Non morbi semper
          commodo nisl condimentum lectus. Neque dolor euismod rhoncus et.{" "}
          <br />
          1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non morbi
          semper commodo nisl condimentum lectus. Neque dolor euismod rhoncus
          et. <br />
          1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p onClick={this.props.toggleModal}>
          <b>BACK</b>
        </p>
      </Modal>
    );
  }
}

export default Instructions;