import { TopNav } from "../TopNav/TopNav";
import { MainContent } from "../MainContent/MainContent";
  
export const Layout = (props) => {
    return (
        <div className="Layout">
            <header>
                <TopNav />
            </header>
            <MainContent />
        </div>
    );
};