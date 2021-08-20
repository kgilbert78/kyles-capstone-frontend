import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import { Homepage } from "./Homepage/Homepage";
import { TourPageLayout } from "./TourPage/TourPageLayout/TourPageLayout";
import { MapPage } from "./MapPage/MapPage";
import { TourSites } from "./TourPage/TourSites/TourSites";


export const MainContent = (props) => {

    const [fetchParams, setFetchParams] = useState("http://localhost:3005/sites/2");
    
    const handleLink = () => {
        setFetchParams("http://localhost:3005/sites/1");
        return(fetchParams);
    };

    // console.log("from parent", fetchParams);

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
                </Switch>
            </Router>
        </div>
    );
};
            