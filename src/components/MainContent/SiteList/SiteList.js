import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import "./SiteList.scss"

export const SiteList = (props) => {

    const [cardData, setCardData] = useState(null);

    useEffect(() => {
        const loadSite = async () => {
            const response = await fetch(`https://walkumentary-syracuse-backend.herokuapp.com/sites/`, {
                method: "GET"
            });
            const data = await response.json();
            setCardData(data.siteData);

        };
        loadSite();
    },[]); 

    if (!cardData) {
        return <h1 className="mt-5">Loading...</h1>
    };

    return (
        <div className="SiteList">
            <main>
                <h1 className="pt-3">Choose a site:</h1>
                <h2 className="pt-2">or visit the map to choose based on location!</h2>
                <div className="mainContent container-fluid d-flex justify-content-around flex-wrap">

                {cardData.map((eachCard) => {
                    return (
                        <div className="card mx-1 my-2">
                            <div className="cardImageContainer mx-auto">
                                <a href={`/tour/${eachCard.siteID}`}>
                                    <img src={eachCard.photos[0].url} className="card-img-top mx-0 pt-1" alt="..." />
                                </a>
                            </div>
                            <div className="card-body text-center">
                                <a href={`/tour/${eachCard.siteID}`}>
                                    <h5 className="card-title">{eachCard.name}</h5>
                                </a>
                                <p className="card-text">{eachCard.location.popUpDescription}</p>
                                <a href={`/tour/${eachCard.siteID}`} className="btn btn-info">Go to this Tour Page</a>
                            </div>
                        </div>
                    )
                })}

                </div>    
            </main>
        </div>
    )
};