import React from "react";
import {Provider} from "react-redux";
import store from "./store";
import './App.css';
import {ThemeProvider} from "@material-ui/core";
import theme from "./themes";
import Routes from './routes'
function App() {
  return (
    <Provider store={store}>
        <ThemeProvider theme={theme()}>
            <Routes/>
        </ThemeProvider>
    </Provider>
  );
}

export default App;
