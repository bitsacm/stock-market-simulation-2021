import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import TransactionPage from "./pages/TransactionPage/TransactionPage";
import Watchlist from "./pages/Watchlist/Watchlist";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login"  component={LoginPage} />
          <Route path="/leaderboard"  component={Leaderboard} />
          <Route path="/portfolio"  component={PortfolioPage} />
          <Route path="/news"  component={NewsPage} />
          <Route path="/transactions" component={TransactionPage}/>
          <Route path="/watchlist" component={Watchlist}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
