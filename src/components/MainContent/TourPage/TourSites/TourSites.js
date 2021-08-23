import { useEffect, useState } from "react";
import "./TourSites.scss"
import { BottomNav } from "../BottomNav/BottomNav";
import { RichText } from "./RichText";
import { CommentForm } from "../CommentForm";
import { useAuth0 } from "@auth0/auth0-react";

export const TourSites = (props) => {
    const [siteData, setSiteData] = useState({});
    const [featureImageSource, setFeatureImageSource] = useState([]);
    const [audioFilePath, setAudioFilePath] = useState("/audio/fayetteParkNarration.mp3");

    const [accessToken, setAccessToken] = useState();

    const {isAuthenticated, isLoading, loginWithRedirect, user, logout, getAccessTokenSilently} = useAuth0();

    useEffect(() => {
        if (isLoading) {
            return <h1 className="mt-5">Loading...</h1>
        }
    
        if (!isAuthenticated) {
            loginWithRedirect();
            getAccessTokenSilently().then(token => setAccessToken(token));
        };
    },[isAuthenticated]);

    useEffect(() => {
        if (accessToken) {
            const loadSite = async () => {
                const response = await fetch(`http://localhost:3005/sites/${props.match.params.siteID}`, {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${accessToken}`
                      }
                });
                const data = await response.json();
                setSiteData(data.selectedSiteData[0]);
                setFeatureImageSource(data?.selectedSiteData?.[0]?.photos?.url?.[0]);
            };
            loadSite();
            //console.log(featureImageSource)
        }
    },[accessToken]);
   
    const {site, location, photos, soundEffects, textCredits} = siteData;

    if (siteData === null || location === null || photos=== null || soundEffects=== null || textCredits=== null || featureImageSource === [] || !isAuthenticated) {
        return <h1>Loading...</h1>
    };
    
    
    return (
        <div className="TourSite">
            <main>
                <div className="mainContent container-fluid d-flex justify-content-around flex-wrap">
                    <section className="imagesSounds col-lg-5">
                        <h1 className="siteName pb-2">
                            {siteData.name}
                        </h1>

                    <div className="imageContainer">
                            <img 
                            className="featureImage img-fluid rounded" 
                            id="featureImage"
                            src={featureImageSource}
                            // src= {photos?.url?.[0]}
                            alt={photos?.altTag?.[0]}
                            />
                    </div> 
                    
                        <h2 className="featureImageInfo text-center pt-3">
                            {/* Captions need to change with images */}
                            {photos?.[0]?.caption}
                        </h2>

                        <div id="thumbnailRow" className="thumbnailRow row pt-3">

                        {photos?.map((photo) => {
                            return (
                                <div key={photo?.photoID} className="thumbnailImageDiv col-3">
                                    <img 
                                        id={photo?.photoID}
                                        className="thumbnailImage img-thumbnail rounded"
                                        src={photo?.url} 
                                        alt={photo?.altTag}
                                        onClick={()=>{
                                            setFeatureImageSource(photo?.url)
                                        }}
                                    />
                                </div>
                            );
                        })}
                            

                            
                        </div> 

                        <div className="soundEffects container-fluid d-flex justify-content-between pt-4">
                            <div>
                                <button 
                                    type="button" 
                                    className="btn btn-lg btn-info"
                                    onClick={(event) => {
                                        setAudioFilePath("/audio/fayetteParkNarration.mp3")
                                        console.log("audio in Tour page", audioFilePath)
                                    }}
                                >
                                    Play Narrative
                                </button>
                            </div>
                            <div>
                                <button 
                                    type="button" 
                                    className="btn btn-lg btn-info"
                                    onClick={(event) => {
                                        setAudioFilePath("/audio/frederickDouglass")
                                        
                                            console.log("audio in Tour page", audioFilePath)
                                    
                                    }}
                                >
                                    {/* Douglass Speech */}
                                    {soundEffects?.[0]?.name}
                                </button>
                            </div>
                            <div>
                            <button 
                                    type="button" 
                                    className="btn btn-lg btn-info"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setAudioFilePath("/audio/freeSoundCanadianHorseAndCarriage")
                                        console.log("audio in Tour page", audioFilePath)
                                    }}
                                >
                                    {/* Horse & Carriage */}
                                    {soundEffects?.[1]?.name}
                                    {/* {console.log(soundEffects?.[1]?.name)}  */}
                                    {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining */}
                                </button>
                            </div>
                        </div>
                        <div className="soundEffectCaptions mt-3 text-center">
                            <ul>
                                {soundEffects?.map((soundEffect) => {
                                    // console.log(soundEffect?.caption)
                                    return (
                                        soundEffect.caption ? 
                                            <li key={soundEffect?.soundEffectID}>{soundEffect?.caption}</li>
                                        : null
                                    );
                                })}
                            </ul> 
                        </div>

                        <CommentForm isAuthenticated={isAuthenticated} isLoading={isLoading} loginWithRedirect={loginWithRedirect} user={user} logout={logout} getAccessTokenSilently={getAccessTokenSilently} />
                        
                    </section>

                    <section className="siteInfo col-lg-5">
                        <h1 className="subtitle pt-3 m-0">
                            About {siteData.name}
                        </h1>
                        <div className="description">
                            <RichText text={siteData.text} />
                            {/* install DOMPurify: https://www.npmjs.com/package/dompurify  */}
                            <span>SOURCES:<br />
                                <em>
                                    {
                                        textCredits?.map((textCredit) => {
                                            return (
                                                <p key={textCredit?.textCreditID} className="my-0">
                                                    <a href={textCredit?.url !== "" ? textCredit?.url : null}>{textCredit?.credit}</a>
                                                </p>
                                            );
                                        })
                                    }
                                </em>
                            </span>
                        </div>
                    </section>
                </div>
            </main>


            <BottomNav audioFilePath={audioFilePath} />
        </div>
    )

};