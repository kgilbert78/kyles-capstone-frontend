import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BottomNav } from "../BottomNav/BottomNav";
import { SampleTourSite } from "../TourSites/SampleTourSite";

export const TourPageLayout = (props) => {
    return (
        <div className="TourPageLayout">
            <Router>
                <Switch>
                    <Route path="/">
                        <SampleTourSite />
                    </Route>
                </Switch>
            </Router>
            <BottomNav />
        </div>
    );
};