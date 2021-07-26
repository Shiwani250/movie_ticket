import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavbarComponent } from "./components/Navbar/Navbar.jsx";
import HomePage from "./components/Home/HomePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Moviedetails from "./components/MovieDetail/movies";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies/:id" component={Moviedetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
