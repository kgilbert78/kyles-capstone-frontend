import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Homepage } from "./Homepage/Homepage";
import { MapPage } from "./MapPage/MapPage";
import { TourSites } from "./TourPage/TourSites/TourSites";
import { SiteList } from "./SiteList/SiteList";
import { SiteListRec } from "./SiteList/SiteListRec";


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
                    <Route path="/tour/:siteID" component={TourSites}>
                    </Route>
                    <Route path="/sites">
                        <SiteList />
                    </Route>
                    <Route path="/sites2">
                        <SiteListRec />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};
            