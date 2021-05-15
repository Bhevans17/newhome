import React from "react";
import Buy from "./pages/Buy";
import MortgageCalculatorComponent from "./pages/MortgageCalculatorComponent";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="container-fluid bg-dark">
                <div className="container">
                    <ul className="list-unstyled justify-content-end d-flex m-0 py-3">
                        <li className="nav-item">
                            <Link
                                className="nav-link font-weight-bold"
                                to="/listings/buy"
                            >
                                <i className="fas fa-retweet"></i>&nbsp;
                                Listings
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/listings/mortgage-calculator"
                            >
                                <i className="fas fa-calculator"></i>&nbsp;
                                Mortgage Calculator
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Switch>
                <Route path="/listings/mortgage-calculator">
                    <MortgageCalculatorComponent />
                </Route>
                <Route path="/listings/buy">
                    <Buy />
                </Route>
            </Switch>
        </Router>
    );
}
export default App;
