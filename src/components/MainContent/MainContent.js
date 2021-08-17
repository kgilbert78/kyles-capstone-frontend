import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Homepage } from "./Homepage/Homepage";
import { TourPageLayout } from "./TourPage/TourPageLayout/TourPageLayout";
import { MapPage } from "./MapPage/MapPage";
import { TourSites } from "./TourPage/TourSites/TourSites";


export const MainContent = (props) => {
    return (
        <div className="MainContent">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                    <Route path="/map">
                        <MapPage />
                    </Route>
                    <Route path="/tour">
                        <TourSites />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};
            