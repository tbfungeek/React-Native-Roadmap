import logo from "../logo.svg";
import "./App.css";
import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import { UseEffectComponent } from "../Effect/UseEffectComponent";
import { MainMenu } from "../Main/MainMenu";
import { UseStateComponent } from "../State/UseStateComponent";
import { UseContextComponent } from "../Context/UseContextComponent";
import { UseContextContainer } from "../Context/UseContextContainer";
import { UseReducerComponent } from "../Reducer/UseReducerComponent";
import { CustomHookComponent } from "../Custom/CustomHookComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MainMenu>
          <Route exact={true} path="/useEffect">
            <UseEffectComponent name="tbfungeek" />
          </Route>

          <Route exact={true} path="/artical_list">
            <UseEffectComponent name="tbfungeek" />
          </Route>

          <Route exact={true} path="/useState">
            <UseStateComponent />
          </Route>

          <Route exact={true} path="/useContext">
            <UseContextComponent />
          </Route>

          <Route exact={true} path="/useshareContext">
            <UseContextContainer />
          </Route>

          <Route exact={true} path="/usereducer">
            <UseReducerComponent />
          </Route>

          <Route exact={true} path="/customhook">
            <CustomHookComponent />
          </Route>

        </MainMenu>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
