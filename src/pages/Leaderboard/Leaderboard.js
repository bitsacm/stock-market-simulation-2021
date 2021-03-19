import React, { Component } from "react";
import styles from "./leaderboard.module.css";
import axios from "axios";
import { Table, TableBody, TableRow, TableCell } from "@material-ui/core";
import Footer from "../../Components/Footer.js";
import { Redirect } from "react-router-dom";
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

class Leaderboard extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  constructor(props) {
    super(props);
    const { cookies } = props;
    this.state = {
      users: [],
      loggedIn: cookies.get('jwt') ? true : false
    };
  }

  async componentDidMount() {
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");
    this.setState({ users: data });
  }

  render() {
    if (!this.state.loggedIn) {
      return <Redirect to={"/login"} />
    } else {
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
}

export default withCookies(Leaderboard);