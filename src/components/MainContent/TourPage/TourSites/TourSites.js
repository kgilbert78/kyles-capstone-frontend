import { useEffect, useState, useReducer } from "react";
// import { Link } from "react-router-dom";
import "./TourSites.scss"
import { BottomNav } from "../BottomNav/BottomNav";
import { RichText } from "./RichText";
import * as Reducer from "./reducer"

export const TourSites = (props) => {
    const [state, dispatch] = useReducer(Reducer.reducer, Reducer.initialState)

    useEffect(() => {
        const loadSite = async () => {
            const response = await fetch(`/mockServer/site${props.match.params.siteID}.json`, {
                method: "GET"
            });
            // https://walkumentary-syracuse-backend.herokuapp.com/sites/${props.match.params.siteID}
            const data = await response.json();
            dispatch(Reducer.setSiteData(data.selectedSiteData[0]));
            const { url, caption } = data.selectedSiteData[0].photos[0];
            dispatch(Reducer.setFeatureImageSource(url));
            dispatch(Reducer.setImageCaptionSource(caption));
            dispatch(Reducer.setAudioFilePath(data.selectedSiteData[0].soundEffects[0].url))
        };
        loadSite();
    }, []);

    const { site, location, photos, soundEffects, textCredits } = state.siteData;

    console.log(soundEffects)

    // all site data set at once, so if photos has a value the rest of the siteData will too.
    if (photos === undefined) {
        return <h1 className="mt-5">Loading...</h1>
    };

    return (
        <div className="TourSite">
            <main>
                <div className="mainContent container-fluid d-flex justify-content-around flex-wrap">
                    <section className="imagesSounds col-lg-5">
                        <h1 className="siteName pb-2">
                            {state.siteData.name}
                        </h1>

                        <div className="imageContainer">
                            <img
                                className="featureImage img-fluid rounded"
                                id="featureImage"
                                src={state.featureImageSource}
                                alt={photos?.altTag?.[0]}
                            />
                        </div>

                        <h2 className="featureImageInfo text-center pt-3">
                            {state.imageCaptionSource}
                        </h2>

                        <div id="thumbnailRow" className="thumbnailRow row pt-3">

                            {photos.map((photo) => {
                                return (
                                    <div key={photo.photoID} className="thumbnailImageDiv col-3">
                                        <img
                                            id={photo.photoID}
                                            className="thumbnailImage img-thumbnail rounded"
                                            src={photo.url}
                                            alt={photo.altTag}
                                            onClick={() => {
                                                dispatch(Reducer.setFeatureImageSource(photo.url))
                                                dispatch(Reducer.setImageCaptionSource(photo.caption))
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
                                        dispatch(Reducer.setAudioFilePath(soundEffects[0].url))
                                    }}
                                >
                                    {soundEffects[0].name}
                                </button>
                            </div>
                            <div>
                                <button
                                    type="button"
                                    className="btn btn-lg btn-info"
                                    onClick={(event) => {
                                        dispatch(Reducer.setAudioFilePath(soundEffects[1].url))
                                        console.log("audio in Tour page", state.audioFilePath)
                                    }}
                                >
                                    {soundEffects[1].name}
                                </button>
                            </div>
                            <div>
                                <button
                                    type="button"
                                    className="btn btn-lg btn-info"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        dispatch(Reducer.setAudioFilePath(soundEffects[2].url))
                                        console.log("audio in Tour page", state.audioFilePath)
                                    }}
                                >
                                    {soundEffects[2].name}
                                </button>
                            </div>
                        </div>
                        <div className="soundEffectCaptions mt-3 text-center">
                            <ul>
                                {soundEffects.map((soundEffect) => {
                                    return (
                                        soundEffect.caption ?
                                            <li key={soundEffect.soundEffectID}>{soundEffect.caption}</li>
                                            : null
                                    );
                                })}
                            </ul>
                        </div>

                    </section>

                    <section className="siteInfo col-lg-5">
                        <h1 className="subtitle pt-3 m-0">
                            About {state.siteData.name}
                        </h1>
                        <div className="description">
                            <RichText text={state.siteData.text} />
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
            <BottomNav audioFilePath={state.audioFilePath} />
        </div>
    )

};