import React, { Component } from 'react';
import styles from './leaderboard.module.css';
import axios from 'axios';
import logo from './images/acm-logo.png';
import acm from './images/acm.png';
import apogee from './images/apogee.png';
import { Table, TableBody, TableRow, TableCell } from '@material-ui/core';

class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  async componentDidMount() {
    const { data } = await axios('https://jsonplaceholder.typicode.com/users');
    this.setState({ users: data });
  }

  render() {
    return (
      <div>
        <div className={styles.header}>
          <div>
            <img className={`${styles.center} ${styles.logo}`} src={logo} alt="ACM Logo" height="22px" width="14px" />
          </div>
          <div>
            <img className={styles.apogee} src={apogee} alt="APOGEE Logo" />
          </div>
          <div>
            <img className={`${styles.center}`} src={acm} alt="ACM BITS Pilani Student Chapter" height="12px" width="51px" />
          </div>
          <center>
            <p className={styles.sms}>Stock Market Simulation</p>
          </center>
        </div>
        <div className={styles.leaderboard}>
          <p className={styles.leaderboardTitle}>Leaderboard</p>
          <div className={styles.outer}>
            <Table className={styles.table} aria-label="simple table">
              <TableBody>
                {this.state.users.map((user, index) => (
                  <TableRow key={user.username}>
                    <TableCell className={styles.cell} align="center" size="small">{index + 1}</TableCell>
                    <TableCell className={styles.cell} align="left">{user.username}</TableCell>
                    <TableCell className={styles.cell} align="right">{user.phone}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    )
  }
}

export default Leaderboard;