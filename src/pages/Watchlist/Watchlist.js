import React, { Component } from "react";
import styles from "./Watchlist.module.css";
import SearchResults from "react-filter-search";
import Footer from "../../Components/Footer.js";
import { Redirect } from "react-router-dom";
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

class Watchlist extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  constructor(props) {
    super(props);
    const { cookies } = props;
    this.state = {
      data: [],
      value: "",
      loggedIn: cookies.get('jwt') ? true : false
    };
  }

  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => this.setState({ data: json }));
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ value });
  };

  handleSort = (event) => {
    console.log(event.target.value);

    if (event.target.value === "alphabetically") {
      this.setState({
        data: this.state.data.sort((a, b) => a.name.localeCompare(b.name))
      });
    }

    if (event.target.value === "gain") {
      this.setState({
        data: this.state.data.sort((a, b) => a.gain - b.gain)
      });
    }
  };

  render() {
    const { data, value } = this.state;
    if (!this.state.loggedIn) {
      return <Redirect to={"/login"} />
    } else {
    return (
      <div className={styles.App}>
        <div className={styles.header}>
          <div className={styles.portfolio}>
            <p>Watchlist</p>
          </div>
        </div>
        <input
          placeholder="Search for stocks"
          className={styles.input}
          type="text"
          value={value}
          onChange={this.handleChange}
        />
        <div className={styles.heading}>
          <div className={styles.topWinners}>Top Winners</div>
          <div className={styles.drop}>
            <p className={styles.sort}>Sort by:</p>
            <select className={styles.select} onChange={this.handleSort}>
              <option value="default">Select Option</option>
              <option value="alphabetically">Alphabetically</option>
              <option value="gain">Top Gainers</option>
            </select>
          </div>
        </div>
        <SearchResults
          value={value}
          data={data}
          renderResults={(results) => (
            <div className={styles.stocksPortfolio}>
              {results.sort().map((el) => (
                <div className={styles.portfolioCard} key={el.name}>
                  <div className={styles.firstDiv}>
                    <div className={styles.companyName}>{el.name}</div>
                  </div>
                  <div className={styles.secondDiv}>
                    <div className={styles.industryName}>{el.industry}</div>
                    <div className={styles.percentage}>{el.percentage}</div>
                  </div>
                  <div className={styles.thirdDiv}>
                    <div className={styles.buyPrice}>
                      <div className={styles.buy}>Buy</div>
                      <div className={styles.boughtPrice}>{el.boughtPrice}</div>
                    </div>
                    <div className={styles.buyQty}>{el.quantity}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        />
        <Footer />
      </div>
    );
  }
}
}

export default withCookies(Watchlist);