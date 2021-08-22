import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import { Homepage } from "./Homepage/Homepage";
import { TourPageLayout } from "./TourPage/TourPageLayout/TourPageLayout";
import { MapPage } from "./MapPage/MapPage";
import { TourSites } from "./TourPage/TourSites/TourSites";
import { SiteList } from "./SiteList/SiteList";


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
                </Switch>
            </Router>
        </div>
    );
};
            