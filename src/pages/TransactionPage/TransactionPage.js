import React, { Component } from "react";
import styles from "./TransactionPage.module.css";
import axios from "axios";

class TransactionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");
    this.setState({ users: data });
  }

  render() {
    return (
      <div>
        <div className={styles.header}>
          {" "}
          <div className={styles.portfolio}>
            <p>Transactions</p>
          </div>
        </div>

        <div className={styles.stocksPortfolio}>
          <div className={styles.portfolioCard}>
            <div className={styles.firstDiv}>
              <div className={styles.companyName}>RELIANCE</div>
            </div>
            <div className={styles.secondDiv}>
              <div className={styles.industryName}>Reliance Industries</div>
              <div className={styles.percentage}>0 (0.00%)</div>
            </div>
            <div className={styles.thirdDiv}>
              <div className={styles.buyPrice}>
                <div className={styles.buy}>Buy</div>
                <div className={styles.boughtPrice}>Bought price: 1000</div>
              </div>
              <div className={styles.buyQty}>Qty: 100 LTP: 1000</div>
            </div>
          </div>
          <div className={styles.portfolioCard}>
            <div className={styles.firstDiv}>
              <div className={styles.companyName}>RELIANCE</div>
            </div>
            <div className={styles.secondDiv}>
              <div className={styles.industryName}>Reliance Industries</div>
              <div className={styles.percentage}>0 (0.00%)</div>
            </div>
            <div className={styles.thirdDiv}>
              <div className={styles.buyPrice}>
                <div className={styles.buy}>Buy</div>
                <div className={styles.boughtPrice}>Bought price: 1000</div>
              </div>
              <div className={styles.buyQty}>Qty: 100 LTP: 1000</div>
            </div>
          </div>
          <div className={styles.portfolioCard}>
            <div className={styles.firstDiv}>
              <div className={styles.companyName}>RELIANCE</div>
            </div>
            <div className={styles.secondDiv}>
              <div className={styles.industryName}>Reliance Industries</div>
              <div className={styles.percentage}>0 (0.00%)</div>
            </div>
            <div className={styles.thirdDiv}>
              <div className={styles.buyPrice}>
                <div className={styles.buy}>Buy</div>
                <div className={styles.boughtPrice}>Bought price: 1000</div>
              </div>
              <div className={styles.buyQty}>Qty: 100 LTP: 1000</div>
            </div>
          </div>
          <div className={styles.portfolioCard}>
            <div className={styles.firstDiv}>
              <div className={styles.companyName}>RELIANCE</div>
            </div>
            <div className={styles.secondDiv}>
              <div className={styles.industryName}>Reliance Industries</div>
              <div className={styles.percentage}>0 (0.00%)</div>
            </div>
            <div className={styles.thirdDiv}>
              <div className={styles.buyPrice}>
                <div className={styles.buy}>Buy</div>
                <div className={styles.boughtPrice}>Bought price: 1000</div>
              </div>
              <div className={styles.buyQty}>Qty: 100 LTP: 1000</div>
            </div>
          </div>{" "}
          <div className={styles.portfolioCard}>
            <div className={styles.firstDiv}>
              <div className={styles.companyName}>RELIANCE</div>
            </div>
            <div className={styles.secondDiv}>
              <div className={styles.industryName}>Reliance Industries</div>
              <div className={styles.percentage}>0 (0.00%)</div>
            </div>
            <div className={styles.thirdDiv}>
              <div className={styles.buyPrice}>
                <div className={styles.buy}>Buy</div>
                <div className={styles.boughtPrice}>Bought price: 1000</div>
              </div>
              <div className={styles.buyQty}>Qty: 100 LTP: 1000</div>
            </div>
          </div>{" "}
          <div className={styles.portfolioCard}>
            <div className={styles.firstDiv}>
              <div className={styles.companyName}>RELIANCE</div>
            </div>
            <div className={styles.secondDiv}>
              <div className={styles.industryName}>Reliance Industries</div>
              <div className={styles.percentage}>0 (0.00%)</div>
            </div>
            <div className={styles.thirdDiv}>
              <div className={styles.buyPrice}>
                <div className={styles.buy}>Buy</div>
                <div className={styles.boughtPrice}>Bought price: 1000</div>
              </div>
              <div className={styles.buyQty}>Qty: 100 LTP: 1000</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TransactionPage;
