import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Posts, Post, Users } from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/posts" component={Posts} />
        <Route path="/post" component={Post} />
        <Route path="/" component={Users} />
      </Switch>
    </Router>
  );
}

export default App;
