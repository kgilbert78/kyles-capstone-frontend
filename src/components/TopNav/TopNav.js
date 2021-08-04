// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./TopNav.scss"

export const TopNav = (props) => {
    return (
        <div className="TopNav">
            {/* RESIZE TO STACK? https://www.w3schools.com/bootstrap4/bootstrap_navbar.asp */}
            <nav className="navbarTop navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                        <a className="navbar-brand" href="#">Logo</a>
                    <button className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#mainNav" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse justify-content-center" id="mainNav">
                        {/* CREATE ROUTER HERE TO USE LINK TO INSTEAD OF A HREF, uncomment import at top
                        <Router>
                            <Switch>
                                <Route exact path="/">
                                    <Homepage />
                                </Route>
                                <Route path="/map">
                                    <MapPage />
                                </Route>
                                <Route path="/tour">
                                    <TourPageLayout />
                                </Route>
                            </Switch>
                        </Router> */}
                        <ul className="navItemsList navbar-nav">
                            <li className="navItem nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="navItem nav-item">
                                <a className="nav-link" href="">Map</a>
                            </li>
                            <li className="navItem nav-item">
                            <a className="nav-link" href="/tour">Tour Page</a>
                            {/* <Link to="/tour" className="nav-link">Tour Page</Link> */}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};