import { Component } from "react";
import React from "react";
import check from "./check.png";
import styles from "./DialogBox.module.css";
import { Modal } from "shards-react";

class DialogBox2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Modal
        className={styles.box}
        open={this.props.modalVisible}
        toggle={this.props.toggleModal}
      >
        <img src={check} alt="Successful" />
        <p>Trade Successful</p>
        <p className={styles.ok} onClick={this.props.toggleModal}>
          OK
        </p>
      </Modal>
    );
  }
}

export default DialogBox2;
