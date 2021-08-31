import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import "./TourSites.scss"
import { BottomNav } from "../BottomNav/BottomNav";
import { RichText } from "./RichText";

export const TourSites = (props) => {
    const [siteData, setSiteData] = useState({});
    const [featureImageSource, setFeatureImageSource] = useState("");
    const [imageCaptionSource, setImageCaptionSource] = useState([]);
    const [audioFilePath, setAudioFilePath] = useState("");

    useEffect(() => {
        const loadSite = async () => {
            const response = await fetch(`http://localhost:3005/sites/${props.match.params.siteID}`, {
                method: "GET"
            });
            const data = await response.json();
            setSiteData(data.selectedSiteData[0]);
            const {url, caption} = data.selectedSiteData[0].photos[0];
            setFeatureImageSource(url);
            setImageCaptionSource(caption);
            setAudioFilePath(data.selectedSiteData[0].soundEffects[0].url)
        };
        loadSite();
    },[]);
   
    const {site, location, photos, soundEffects, textCredits} = siteData;

    if (siteData === null || location === null || photos=== null || soundEffects=== null || textCredits=== null || featureImageSource === []) {
        return <h1 className="mt-5">Loading...</h1>
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
                            alt={photos?.altTag?.[0]}
                            />
                    </div> 
                    
                        <h2 className="featureImageInfo text-center pt-3">
                            {imageCaptionSource}
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
                                            setImageCaptionSource(photo?.caption)
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
                                        setAudioFilePath(soundEffects?.[0]?.url)
                                        console.log(soundEffects?.[0]?.url)
                                    }}
                                >
                                    {soundEffects?.[0]?.name}
                                </button>
                            </div>
                            <div>
                                <button 
                                    type="button" 
                                    className="btn btn-lg btn-info"
                                    onClick={(event) => {
                                        setAudioFilePath(soundEffects?.[1]?.url)
                                        console.log("audio in Tour page", audioFilePath)
                                    }}
                                >
                                    {soundEffects?.[1]?.name}
                                </button>
                            </div>
                            <div>
                            <button 
                                    type="button" 
                                    className="btn btn-lg btn-info"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setAudioFilePath(soundEffects[2].url)
                                        console.log("audio in Tour page", audioFilePath)
                                    }}
                                >
                                    {soundEffects?.[2]?.name}
                                </button>
                            </div>
                        </div>
                        <div className="soundEffectCaptions mt-3 text-center">
                            <ul>
                                {soundEffects?.map((soundEffect) => {
                                    return (
                                        soundEffect.caption ? 
                                            <li key={soundEffect?.soundEffectID}>{soundEffect?.caption}</li>
                                        : null
                                    );
                                })}
                            </ul> 
                        </div>
                        
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
                            <span>Sound Effect Sources:<br />
                                <em>
                                    {
                                        soundEffects?.map((soundEffect) => {
                                            return (
                                                <p key={soundEffect?.soundEffectID} className="my-0">
                                                    <a href={soundEffect?.credit !== "" ? soundEffect?.creditURL : null}>{soundEffect?.credit}</a>
                                                </p>
                                            );
                                        })
                                    }
                                </em>
                            </span>
                            <span>Photo Sources:<br />
                                <em>
                                    {
                                        photos?.map((photo) => {
                                            return (
                                                <p key={photo?.photoID} className="my-0">
                                                    <a href={photo?.credit !== "" ? photo?.creditURL : null}>{photo?.credit}</a>
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