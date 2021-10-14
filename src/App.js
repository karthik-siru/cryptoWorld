import { Switch, Link, Route } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  NavBar,
  Exchanges,
  HomePage,
  CryptoCurrencies,
  CryptoDetails,
  News,
} from "./components";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <div className="navBar">
        <NavBar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/exchanges">
                <Exchanges />
              </Route>
              <Route exact path="/cryptocurrencies">
                <CryptoCurrencies />
              </Route>
              <Route exact path="/crypto/:coinId">
                <CryptoDetails />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default App;
