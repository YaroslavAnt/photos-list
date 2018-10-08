import React, { Component } from "react";
import "./App.css";
import MyList from "./components/MyList";
import MyPhoto from "./components/MyPhoto";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  createMuiTheme,
  MuiThemeProvider
} from "../node_modules/@material-ui/core";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MyList} />
            <Route exact path="/photo" component={MyPhoto} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
