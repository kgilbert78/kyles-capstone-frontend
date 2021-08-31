import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import "./SiteList.scss"

export const SiteList = (props) => {

    const [cardData, setCardData] = useState({});

    useEffect(() => {
        const loadSite = async () => {
            const response = await fetch(`http://localhost:3005/sites/`, {
                method: "GET"
            });
            const data = await response.json();
            setCardData(data.siteData);
            console.log(data, "cardData variable:", cardData);
        };
        loadSite();
    },[]); 
    // Line 19:7:   React Hook useEffect has a missing dependency: 'cardData'. Either include it or remove the dependency array

    
    if (cardData === null) {
        return <h1>Loading...</h1>
    };

    return (
        <div className="SiteList">
            <main>
                <h1 className="pt-3">Choose a site:</h1>
                <h2 className="pt-2">or visit the map to choose based on location!</h2>
                <div className="mainContent container-fluid d-flex justify-content-around flex-wrap">

                {/* {cardData?.map((eachCard) => {
                    return (
                        <div className="card mx-1 my-2">
                            <div className="cardImageContainer">
                                <img src={eachCard?.[0]?.photos?.url?.[0]} className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{eachCard?.name}</h5>
                                <p className="card-text">{eachCard?.location?.popUpDescription}</p>
                                <a href={`/tour/${eachCard.siteID}`} className="btn btn-info">Go to this Tour Page</a>
                            </div>
                        </div>
                    )
                })} */}

                    <div className="card mx-1 my-2">
                        <div className="cardImageContainer">
                            <img src={cardData?.[0]?.photos?.url?.[0]} className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{cardData?.name}</h5>
                            <p className="card-text">{cardData?.location?.popUpDescription}</p>
                            <a href="/tour/1" className="btn btn-info">Go to this Tour Page</a>
                        </div>
                    </div>

                    <div className="card mx-1 my-2">
                        <div className="cardImageContainer">
                            <img src="/images/hotelSyracuse.jpg" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/tour/2" className="btn btn-info">Go somewhere</a>
                        </div>
                    </div>

                    <div className="card mx-1 my-2">
                        <div className="cardImageContainer">
                            <img src="/images/hotelSyracuse.jpg" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/tour/3" className="btn btn-info">Go somewhere</a>
                        </div>
                    </div>

                    <div className="card mmx-1 my-2">
                        <div className="cardImageContainer">
                            <img src="/images/hotelSyracuse.jpg" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/tour/4" className="btn btn-info">Go somewhere</a>
                        </div>
                    </div>


                </div>    
            </main>
        </div>
    )
};