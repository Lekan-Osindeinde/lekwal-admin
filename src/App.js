import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.css";
import SideBar from "./components/sidebar/SideBar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import User from "./pages/user/User";
import UserList from "./pages/userList/UserList";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <SideBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userid">
            <User />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
