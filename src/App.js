import "./App.css";
import styled from "styled-components";
import MainContent from "./components/MainContent";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddUser from "./pages/AddUser";
import RoomM from "./pages/RoomM";
import UserM from "./pages/UserM";
import FAQ from "./pages/FAQ";
import Login from "./pages/Login";
import Layout from "./Layout";

function App() {
  return (
  <Router>
  <Layout>
    <Switch>
      <Route path = "/" exact component={MainContent}/>
      <Route path = "/login" exact component={Login}/>
      <Route path = "/adduser" exact component={AddUser}/>
      <Route path = "/roomm"  exact component={RoomM}/>
      <Route path = "/userm" exact component={UserM}/>
      <Route path = "/faq"  exact component={FAQ}/>
    </Switch>
  </Layout>
  </Router>
  );
}


export default App;
