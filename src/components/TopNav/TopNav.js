// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./TopNav.scss"

export const TopNav = (props) => {
    return (
        <div className="TopNav">
            <nav className="navbarTop navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                        <a className="logo navbar-brand" href="/">
                            <img className="m-0 p-0" src="https://img.icons8.com/ios-filled/30/000000/sneakers.png" alt="walkumentary sneaker logo" />
                        </a>
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
                        {/* <ul className="navItemsList navbar-nav">
                            <Router>
                                <Switch>
                                    <li className="navItem nav-item">
                                        <Link className="nav-link" to="/">Home</Link>
                                    </li>
                                </Switch>
                                <Switch>
                                <li className="navItem nav-item">
                                    <Link className="nav-link" to="/map">Map</Link>
                                </li>
                                </Switch>
                                <Switch>
                                <li className="navItem nav-item">
                                    <Link className="nav-link" to="/sites">Tour Sites</Link>
                                </li>
                                </Switch>
                            </Router>
                        </ul> */}
                        <ul className="navItemsList navbar-nav">
                            <li className="navItem nav-item">
                                <a className="nav-link text-dark fs-5" href="/">Home</a>
                            </li>
                            <li className="navItem nav-item">
                                <a className="nav-link text-dark fs-5" href="/map">Map</a>
                            </li>
                            <li className="navItem nav-item">
                                <a className="nav-link text-dark fs-5" href="/sites">Tour Sites</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};