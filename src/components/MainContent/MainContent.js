import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import { Homepage } from "./Homepage/Homepage";
import { TourPageLayout } from "./TourPage/TourPageLayout/TourPageLayout";
import { MapPage } from "./MapPage/MapPage";
import { TourSites } from "./TourPage/TourSites/TourSites";
import { SiteList } from "./SiteList/SiteList";


export const MainContent = (props) => {

    const [fetchParams, setFetchParams] = useState("http://localhost:3005/sites/2");
    
    const handleLink = (siteID) => {
        // setFetchParams("http://localhost:3005/sites/1");
        setFetchParams(`http://localhost:3005/sites/${siteID}`);
        console.log("site according to MainContent", siteID)
        return(fetchParams);
    };

    // console.log("MainContent fetch", fetchParams);

    return (
        <div className="MainContent">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                    <Route path="/map">
                        <MapPage handleLink={handleLink}/>
                    </Route>
                    <Route path="/tour">
                        <TourSites fetchParams={fetchParams} />
                    </Route>
                    <Route path="/sites">
                        <SiteList />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};
            