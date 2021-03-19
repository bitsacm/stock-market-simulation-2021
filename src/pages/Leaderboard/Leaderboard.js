import React, { Component } from "react";
import styles from "./leaderboard.module.css";
import axios from "axios";
import logo from "./images/acm-logo.png";
import acm from "./images/acm.png";
import apogee from "./images/apogee.png";
import { Table, TableBody, TableRow, TableCell } from "@material-ui/core";
import Footer from "../../Components/Footer.js";

class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  async componentDidMount() {
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");
    this.setState({ users: data });
  }

  render() {
    return (
      <div className={styles.leaderboard}>
        <div className={styles.outer}>
          <p className={styles.leaderboardTitle}>Leaderboard</p>
          <Table className={styles.table} aria-label="simple table">
            <TableBody>
              {this.state.users.map((user, index) => (
                <TableRow key={user.username}>
                  <TableCell
                    className={styles.cell}
                    align="center"
                    size="small"
                  >
                    {index + 1}
                  </TableCell>
                  <TableCell className={styles.cell} align="left">
                    {user.username}
                  </TableCell>
                  <TableCell className={styles.cell} align="right">
                    {user.phone}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Leaderboard;
