import { useEffect, useState } from "react";
import "./TourSites.scss"
import { BottomNav } from "../BottomNav/BottomNav";
import { RichText } from "./RichText";

export const TourSites = (props) => {
    const [pageData, setPageData] = useState(null);
    // const [site, setSite] = useState(null);
    // const [location, setLocation] = useState(null);
    // const [photos, setPhotos] = useState(null);
    // const [soundEffects, setSoundEffects] = useState(null);
    // const [textCredits, setTextCredits] = useState(null);

    console.log("from Tour page:", props.fetchParams)

    useEffect(() => {
        const loadSite = async () => {
            const response = await fetch(`http://localhost:3005/sites/1`, {
            // const response = await fetch(props.fetchParams, {
                method: "GET"
            });
            const data = await response.json();
            setPageData(data.selectedSiteData[0]);
            // console.log(pageData.name, pageData.photos[0].url);
            // setSite(data.selectedSiteData[0]);
            // setPhotos(data.selectedSiteData[0].photos)
        };
        loadSite();
    },[]);

    // console.log(pageData.name, pageData.photos[0].url);

    const hotelSyracuseNow = '/images/hotelSyracuse.jpg';
    //const initialImage = pageData.photos[0].url;

    const [featureImageSource, setFeatureImageSource] = useState(hotelSyracuseNow);

    // const Thumbnails = () => {
    //     pageData.photos.map((photo) => {
    //         return (
    //             <div key={photo.photoID} className="thumbnailImageDiv col-3">
    //                 <img 
    //                     id={photo.photoID}
    //                     className="thumbnailImage img-thumbnail rounded"
    //                     src={photo.url} 
    //                     alt={photo.altTag}
    //                     onClick={()=>{
    //                         setFeatureImageSource(photo.url)
    //                     }}
    //                 />
    //             </div>
    //         );
    //     });
    // };
    
    // if (pageData !== null) {
        return (
            <div className="TourSite">
                <main>
                    <div className="mainContent container-fluid d-flex justify-content-around flex-wrap">
                        <section className="imagesSounds col-lg-5">
                            <h1 className="siteName pb-2">
                                Hotel Syracuse
                                {/* {pageData.name} */}
                            </h1>
                        {/* NEED TO GIVE CREDIT FOR IMAGE! source & license requirements at https://commons.wikimedia.org/wiki/File:Hotel_Syracuse,_New_York.jpg */}
                        <div className="imageContainer">
                                <img 
                                className="featureImage img-fluid rounded" 
                                id="featureImage"
                                // src={pageData.photos[0].url}
                                src={featureImageSource}
                                alt="Hotel Syracuse"
                                />
                        </div> 
                        
                            <h2 className="featureImageInfo text-center pt-3">
                                Year of Picture / relevant info
                                {/* {pageData.photos[0].caption} */}
                            </h2>

                            <div id="thumbnailRow" className="thumbnailRow row pt-3">
                            {/* <div id="thumbnailRow" className="thumbnailRow row pt-3" onClick={changeFeatureImage(event)}> */}

                                {/* <Thumbnails /> */}


                                <div className="thumbnailImageDiv col-3">
                                    <img 
                                        id="thumbnailImage1"
                                        className="thumbnailImage img-thumbnail rounded"
                                        src={'/images/hotelSyracuse.jpg'} 
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
                                    <button type="button" className="btn btn-lg btn-info">
                                        Sound 1
                                        {/* {pageData.soundEffects[0].name} */}
                                    </button>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-lg btn-info">
                                        Sound 2
                                        {/* {pageData.soundEffects[1].name} */}
                                    </button>
                                </div>
                            </div>
                            <div className="soundEffectCaptions mt-3 text-center">
                                <p>Sound effect details go here.</p>
                            </div>
                            
                        </section>

                        <section className="siteInfo col-lg-5">
                            <h1 className="subtitle pt-3 m-0">
                                About the Hotel Syracuse
                                {/* About {pageData.name} */}
                            </h1>
                            <div className="description">
                                <p>text goes here</p>
                                {/* <RichText text={pageData.text} /> */}
                                {/* install DOMPurify: https://www.npmjs.com/package/dompurify  */}
                                <p>SOURCES:<br />
                                    <em>
                                        Sources go here, with links.<br />
                                        {/* use .map to loop over them & add <br /> after each */}
                                    </em>
                                </p>
                            </div>
                        </section>
                    </div>
                </main>
                <BottomNav />
            </div>
        )
    // }
};