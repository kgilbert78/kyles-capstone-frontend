import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import "./SiteList.scss"
import { RecursiveMap } from "./../../utils/RecursiveMap";
import { RichText } from "../TourPage/TourSites/RichText";

export const SiteListRec = (props) => {

    const [cardData, setCardData] = useState(null);
    const [cardDisplay, setCardDisplay] = useState("");

    useEffect(() => {
        const loadSite = async () => {
            const response = await fetch(`https://walkumentary-syracuse-backend.herokuapp.com/sites/`, {
                method: "GET"
            });
            const data = await response.json();
            setCardData(data.siteData);
        };
        loadSite();
    }, []);

    if (!cardData) {
        return <h1 className="mt-5">Loading...</h1>
    };

    let htmlToUpdate = "";

    const createCards = (cardData) => {
        // cardDisplay += `
        htmlToUpdate += `
            <div key="${cardData.siteID}" class="card mx-1 my-2">
                <div class="cardImageContainer mx-auto">
                    <a href="/tour/${cardData.siteID}">
                        <img src="${cardData.photos[0].url}" class="card-img-top mx-0 pt-1" alt="..." />
                    </a>
                </div>
                <div class="card-body text-center">
                    <a href="/tour/${cardData.siteID}">
                        <h5 class="card-title">${cardData.name}</h5>
                    </a>
                    <p class="card-text">${cardData.location.popUpDescription}</p>
                    <a href="/tour/${cardData.siteID}" class="btn btn-info">Go to this Tour Page</a>
                </div>
            </div>
        `
        // console.log(cardData.siteID)
    }

    const rMap = (fn, [head, ...tail]) => {
        console.log("Head:", head, "&", "Tail:", tail)
        if (head === undefined) {
            if (tail.length === 0) {
                console.log(htmlToUpdate) 
                // setCardDisplay(htmlToUpdate) // multiple re-renders error
            }
            return [];
        } else {
            // console.log(cardDisplay)
            return [fn(head), ...rMap(fn, tail)];
        }
    }

    // RecursiveMap(createCards, cardData);
    rMap(createCards, cardData, 0)

    // const CardDisplayDiv = () => {return String(cardDisplay)}

    return (
        <div className="SiteList">
            <main>
                <h1 className="pt-3">Choose a site:</h1>
                <h2 className="pt-2">or visit the map to choose based on location!</h2>
                <div className="mainContent container-fluid d-flex justify-content-around flex-wrap">

                    <RichText text={htmlToUpdate} />

                    {/* <CardDisplayDiv /> */}
                    {/* doesn't display */}

                    {/* <p>
                    {`${String(<CardDisplayDiv />)}`}
                    </p>  */}
                    {/* displays [object Object] */}

                    {/* {htmlToUpdate} */}
                    {/* displays the code as text */}

                </div>
            </main>
        </div>
    )
};