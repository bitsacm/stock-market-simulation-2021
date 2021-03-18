import { Component } from "react";
import React from "react";
import wallet from "./wallet.png";
import styles from "./DialogBox.module.css";

class DialogBox2 extends Component {
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
        <img src={wallet} alt="Wallet" />
        <p>Insufficient Funds</p>
        <p className={styles.ok} onClick={this.changeVisibilty.bind(this)}>
          OK
        </p>
      </div>
    );
  }
}

export default DialogBox2;
