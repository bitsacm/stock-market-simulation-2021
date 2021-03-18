import React, { Component } from 'react';
// import styles from './leaderboard.module.css';
import axios from 'axios';
import { Table, TableBody, TableRow, TableCell } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    backgroundColor: "#E5E5E5",
    textAlign: "left",
  },
  title: {
    marginTop: 0,
    width: "103px",
    height: "21px",
    marginLeft: "18px",
    paddingTop: "4.4%",

    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "18px",
    /* identical to box height */
    color: "#031A6E"
  },
  outer: {
    paddingLeft: "4.4%",
    paddingRight: "4.4%"
  },
  table: {
    borderRadius: "8px",
    backgroundColor: "#FFFFFF"
  },
  cell: {
    fontFamily: "Roboto",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "16px",
    letterSpacing: "0em",
    textAlign: "left"
  },
  green: {
    color: "#38D600"
  },
  red: {
    color: "red"
  }
});

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
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <p className={classes.title}>Leaderboard</p>
        <div className={classes.outer}>
          <Table className={classes.table} aria-label="simple table">
            <TableBody>
              {this.state.users.map((user, index) => (
                <TableRow key={user.username}>
                  <TableCell className={classes.cell} align="center" size="small">{index + 1}</TableCell>
                  <TableCell className={classes.cell} align="left">{user.username}</TableCell>
                  <TableCell className={`${classes.cell} ${1 > 0 ? classes.green : classes.red }`} align="right">{user.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Leaderboard);
