import { Home } from "./components/Home";
import { Header } from "./components/layout/Header";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import PrivateRoute from "./components/routing/PrivateRoute";
import HomeState from "./context/home/HomeState";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthState from "./context/auth/AuthState";
import { Footer } from "./components/layout/Footer";
import { About } from "./components/pages/About";
import { Fragment} from "react";
import { Privacy } from "./components/pages/Privacy";

function App() {


  return (
    <AuthState>
      <HomeState>
        <Router>
          <Fragment>
            <Header />
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/about" component={About} />
              <Route exact path="/privacy" component={Privacy} />
              <Route component={About} />
            </Switch>
            <Footer />
          </Fragment>
        </Router>
      </HomeState>
    </AuthState>
  );
}

export default App;
