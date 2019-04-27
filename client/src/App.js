import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch} from 'react-router'
import Books from "./pages/Books";
import Saved from "./pages/Saved";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/saved" component={Saved} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch> 
      </div>
    </Router>
  );
}
export default App;
