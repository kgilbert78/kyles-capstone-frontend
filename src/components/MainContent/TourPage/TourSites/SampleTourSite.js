import { useEffect, useState } from "react";
import "./SampleTourSite.scss"

// let images = document.getElementById("thumbnailRow").getElementsByTagName("img");
//
// function changeImage(event) {
//     event = event || window.event;

//     let targetElement = event.target || event.srcElement;

//     if (targetElement.tagName == "IMG") {
//         document.getElementById("featureImage").src = targetElement.getAttribute("src");
//     }
// }


export const SampleTourSite = (props) => {

    // const hotelSyracuseNow = require('../../../../images/hotelSyracuse.jpg')
    // const hotelSyracuse1920s = require('../../../../images/hotelSyracuse1920s.jpg')

    // const [featureImageSource, setFeatureImageSource] = useState(hotelSyracuseNow);

    // useEffect(() => {
    //     changeFeatureImage(event);
    // }, [featureImageSource]);

    // function changeFeatureImage(event) {
    //     event = event || window.event;

    //     setFeatureImageSource(hotelSyracuse1920s);

    //     // let targetElement = event.target || event.srcElement;

    //     // if (targetElement.tagName == "IMG") {
    //     //     console.log(targetElement.getAttribute("src"))
    //     //     // setFeatureImageSource(hotelSyracuse1920s);
    //     //     // setFeatureImageSource(targetElement.getAttribute("src"));
    //     //     // "Unexpected use of 'event'  no-restricted-globals" = something is undefined so it thinks it's a global variable https://stackoverflow.com/questions/63133169/react-js-unexpected-use-of-event-no-restricted-globals
    //     //     // need useEffect to refresh page https://stackoverflow.com/questions/54283213/why-do-i-get-unexpected-use-of-location-no-restricted-globals
    //     // }
    // };

    return (
        <div className="TourSite">
            <main>
                <div className="mainContent container-fluid d-flex justify-content-around flex-wrap">
                    <section className="imagesSounds col-lg-5">
                        <h1 className="siteName pb-2">
                            Hotel Syracuse
                        </h1>
                    {/* NEED TO GIVE CREDIT FOR IMAGE! source & license requirements at https://commons.wikimedia.org/wiki/File:Hotel_Syracuse,_New_York.jpg */}
                    <div className="imageContainer">
                            <img 
                            className="featureImage img-fluid rounded" 
                            id="featureImage"
                            src={require('../../../../images/hotelSyracuse.jpg').default}
                            // src={`${featureImageSource}`.default}
                            // src={require(`../../../../images/${featureImageSource}`).default}
                            alt="Hotel Syracuse"
                            />
                    </div> 
                    
                        <h2 className="featureImageInfo text-center pt-3">Year of Picture / relevant info</h2>

            {/*  https://bootstrapcreative.com/bootstrap-text-sizes/    
                https://www.w3schools.com/bootstrap/bootstrap_typography.asp */}
            {/*  Pixel ( px ) is not scalable, it is an absolute unit. Change in the value of another element does not affect the value of absolute units. ... Element ( em ) and Root element ( rem ) are responsive units interpreted into equivalent px unit by the browser. */}
                        <div id="thumbnailRow" className="thumbnailRow row pt-3">
                        {/* <div id="thumbnailRow" className="thumbnailRow row pt-3" onClick={changeFeatureImage(event)}> */}
                            <div className="thumbnailImageDiv col-3">
                                <img 
                                    id="thumbnailImage1"
                                    className="thumbnailImage img-thumbnail rounded"
                                    src={require('../../../../images/hotelSyracuse.jpg').default} 
                                    // src={require(`${featureImageSource}`).default}
                                    alt="Hotel Syracuse today thumbnail"
                                />
                            </div>
                            <div className="thumbnailImageDiv col-3">
                                {/*  NEED TO GIVE CREDIT FOR IMAGE! source & license requirements at https://commons.wikimedia.org/wiki/File:Hotel-syracuse_1920s.jpg */}
                                <img 
                                    id="thumbnailImage2"
                                    className="thumbnailImage img-thumbnail rounded" 
                                    src={require('../../../../images/hotelSyracuse1920s.jpg').default}
                                    alt="Hotel Syracuse 1920s thumbnail"
                                />
                            </div>
                            <div className="thumbnailImageDiv col-3">
                                <img 
                                    id="thumbnailImage3"
                                    className="thumbnailImage img-thumbnail rounded" 
                                    src={require('../../../../images/hotelSyracuse1920s.jpg').default}
                                    alt="Hotel Syracuse thumbnail 3"
                                />
                            </div>
                            <div className="thumbnailImageDiv col-3">
                                <img 
                                    id="thumbnailImage4"
                                    className="thumbnailImage img-thumbnail rounded" 
                                    src={require('../../../../images/hotelSyracuse1920s.jpg').default}
                                    alt="Hotel Syracuse thumbnail 4"
                                />
                            </div>
                        </div>
                        <div className="soundEffects container-fluid d-flex justify-content-between pt-4">
                            <div>
                                <button type="button" className="btn btn-lg btn-info">Play Narrative</button>
                            </div>
                            <div>
                                <button type="button" className="btn btn-lg btn-info">Sound 1</button>
                            </div>
                            <div>
                                <button type="button" className="btn btn-lg btn-info">Sound 2</button>
                            </div>
                        </div>
                        
                    </section>

                    <section className="siteInfo col-lg-5">
                        <h1 className="subtitle pt-3 m-0">
                            About the Hotel Syracuse
                        </h1>
                        <div className="description">
                            <p mt-0>
                                Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p>
                                Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p>
                                Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p>
                                Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p>
                                Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p>
                                Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};