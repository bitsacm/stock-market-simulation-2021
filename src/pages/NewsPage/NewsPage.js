import React, { Component } from "react";
import styles from "./NewsPage.module.css";
import axios from "axios";
import { Card, CardContent, CardMedia, List } from "@material-ui/core";
import Footer from "../../Components/Footer.js";

class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  async componentDidMount() {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/albums/1/photos"
    );
    this.setState({ articles: data });
  }

  render() {
    return (
      <div>
        <div className={styles.header}>
          <p className={styles.news}>News</p>
        </div>
        <div className={styles.leaderboard}>
          <div className={styles.outer}>
            <List className={styles.table} style={{ padding: "10px" }}>
              {this.state.articles.map((article) => (
                <Card
                  className={styles.articleCard}
                  style={{
                    display: "flex",
                    padding: "5px",
                    borderBottom: "1px solid #EFEFEF",
                    borderRadius: "0",
                    boxShadow: "none"
                  }}
                >
                  <CardContent style={{ width: "60%" }}>
                    <p className={styles.articleTitle}>{article.title}</p>
                    <p className={styles.articleTime}>Mac Miller</p>
                  </CardContent>
                  <CardMedia
                    image={article.thumbnailUrl}
                    title={article.title}
                    style={{ width: "40%" }}
                  />
                </Card>
              ))}
            </List>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Leaderboard;
