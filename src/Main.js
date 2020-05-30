import React, { Component } from "react";
import "./index.css";
import Home from "./content/Home";
import Contact from "./content/Contact";
import { Route, NavLink, HashRouter} from "react-router-dom";
import Association from "./content/Association";
import Government from "./content/Government";

class Main extends Component {
    render() {
        return (
            <HashRouter>
            <div>
                <h1 className={"hear"}>Welcome to International Fishing Association</h1>
                <ul className="header">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/association">Association</NavLink></li>
                    <li><NavLink to="/government">Government</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/association" component={Association}/>
                    <Route path="/government" component={Government}/>
                </div>
            </div>
            </HashRouter>
        );
    }
}
export default Main;
