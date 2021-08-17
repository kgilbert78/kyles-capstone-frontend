import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BottomNav } from "../BottomNav/BottomNav";
import { SampleTourSite } from "../TourSites/SampleTourSite";
import { TourSites } from "../TourSites/TourSites";

export const TourPageLayout = (props) => {
    return (
        <div className="TourPageLayout">
            <Router>
                <Switch>
                    <Route path="/">
                        <TourSites />
                    </Route>
                </Switch>
            </Router>
            <BottomNav />
        </div>
    );
};