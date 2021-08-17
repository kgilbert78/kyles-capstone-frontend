import { useEffect, useState } from "react";
import "./TourSites.scss"

export const TourSites = (props) => {
    const hotelSyracuseNow = '/images/hotelSyracuse.jpg';
    // const hotelSyracuse1920s = require('../../../../images/hotelSyracuse1920s.jpg')

    const [featureImageSource, setFeatureImageSource] = useState(hotelSyracuseNow);

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
                            src={featureImageSource}
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
                                    src={'/images/hotelSyracuse.jpg'} 
                                    // src={require(`${featureImageSource}`).default}
                                    alt="Hotel Syracuse today thumbnail"
                                    onClick={()=>{
                                        setFeatureImageSource('/images/hotelSyracuse.jpg')
                                    }}
                                />
                            </div>
                            <div className="thumbnailImageDiv col-3">
                                {/*  NEED TO GIVE CREDIT FOR IMAGE! source & license requirements at https://commons.wikimedia.org/wiki/File:Hotel-syracuse_1920s.jpg */}
                                <img 
                                    id="thumbnailImage2"
                                    className="thumbnailImage img-thumbnail rounded" 
                                    src={"/images/hotelSyracuse1920s.jpg"}
                                    alt="Hotel Syracuse 1920s thumbnail"
                                    onClick={()=>{
                                        setFeatureImageSource("/images/hotelSyracuse1920s.jpg")
                                    }}
                                />
                            </div>
                            <div className="thumbnailImageDiv col-3">
                                <img 
                                    id="thumbnailImage3"
                                    className="thumbnailImage img-thumbnail rounded" 
                                    src={'/images/hotelSyracuse1920s.jpg'}
                                    alt="Hotel Syracuse thumbnail 3"
                                    onClick={()=>{
                                        setFeatureImageSource("/images/hotelSyracuse1920s.jpg")
                                    }}
                                />
                            </div>
                            <div className="thumbnailImageDiv col-3">
                                <img 
                                    id="thumbnailImage4"
                                    className="thumbnailImage img-thumbnail rounded" 
                                    src={'/images/hotelSyracuse1920s.jpg'}
                                    alt="Hotel Syracuse thumbnail 4"
                                    onClick={()=>{
                                        setFeatureImageSource("/images/hotelSyracuse1920s.jpg")
                                    }}
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