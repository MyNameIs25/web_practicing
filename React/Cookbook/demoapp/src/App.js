import React from 'react'
import "assets/style/reset.css"
import './App.css';
import Layout from './pages/home/Layout'
import { Provider } from 'react-redux'
import store from "./store/"
import {BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <Provider store={store}>
      <Router>
    <div className="App">
      <Layout/>
    </div>
      </Router>
    </Provider>
  );
}

export default App;
