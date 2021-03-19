import React, { Component } from "react";
import styles from "./PortfolioPage.module.css";
import axios from "axios";
import Footer from "../../Components/Footer.js";
import Instructions from "../../Components/Instructions.js";
import { Redirect } from "react-router-dom";
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

class PortfolioPage extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  constructor(props) {
    super(props);
    const { cookies } = props;
    this.state = {
      users: [],
      modalVisible: false,
      loggedIn: cookies.get('jwt') ? true : false
    };
  }

  toggleModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible
    });
  };

  async componentDidMount() {
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");
    this.setState({ users: data });
  }

  render() {
    if (!this.state.loggedIn) {
      return <Redirect to={"/login"} />
    } else {
    return (
      <div>
        <Instructions
          modalVisible={this.state.modalVisible}
          toggleModal={this.toggleModal}
        />
        <div className={styles.header}>
          {" "}
          <div className={styles.portfolio}>
            <p>Portfolio</p>
          </div>
          <div onClick={this.toggleModal}>
            <img src="./info.png" alt="info" />
          </div>
        </div>
        <div className={styles.userInfo}>
          <div className={styles.picture}>
            <img src="./dp.png" alt="png" />
          </div>
          <div className={styles.info}>
            <div className={styles.name}>Sam L Jackson</div>
            <div className={styles.email}>
              f20200000@pilani.bits-pilani.ac.in
            </div>
          </div>
        </div>
        <div className={styles.financeInfo}>
          <div className={styles.columns}>
            <div className={styles.information}>
              <div className={styles.subHeading}>Cash Amount</div>
              <div className={styles.value}>$10000000</div>
            </div>
            <div className={styles.information}>
              <div className={styles.subHeading}>Total Investment</div>
              <div className={styles.value}>$10000000</div>
            </div>
            <div className={styles.information}>
              <div className={styles.subHeading}>Current Value</div>
              <div className={styles.value}>$10000000</div>
            </div>
          </div>
        </div>
        <div className={styles.profitLoss}>
          <div className={styles.card}>
            <div className={styles.profitCard}>
              <div className={styles.profitContainer}>
                <div className={styles.profitHeading}>$ 15000</div>
                <div className={styles.profitValue}>Total Net Profit</div>
              </div>
            </div>
            <div className={styles.lossCard}>
              <div className={styles.profitContainer}>
                <div className={styles.lossHeading}>$ 15000</div>
                <div className={styles.profitValue}>Total Net Loss</div>
              </div>
            </div>
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
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
}

export default withCookies(PortfolioPage);
