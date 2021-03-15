import "./App.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import Dashboard from "./pages/Dashboard/Dashboard";
import NewsPage from "./pages/NewsPage/NewsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/leaderboard" component={Leaderboard} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/news" component={NewsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
