// import { Link } from "react-router-dom";
import "./Homepage.scss"

export const Homepage = (props) => {
    return (
        <div className="Homepage">
            <main>
            <div id="indexForeground">
                <div className="indexBackground">
                    
                        <h1 className="indexH1">Walkumentary</h1>
                    </div>
                </div>
                <div className="homepageMainContent">
                    <h2 className="indexH2">
                        An immersive audio walking tour of Syracuse history.
                    </h2>

                    <p className="text-center">
                        My aim was to create a sample of a walking tour that is primarily audio-based, leaving your eyes and hands free. Additional features include immersive sound effects and clips of historical speeches from the site. Future plans include automatic play of the narration when the user arrives at the site, and voice GPS directions to help the user navigate to the chosen site.
                    </p>
                    <p className="text-center">The theme of the sample tour is the struggle for equality.</p>
                    <div className="text-center">
                        <a href="/map">
                            <button type="button" className="btn btn-xl btn-info">Go to the Map!</button>
                        </a>
                    </div>
                    <div className="largerDisplayOnly"> {/* .d-none .d-sm-block */}
                        {/* write alt tags for these & credit images */}
                        <div className="text-center">

                            <h3 className="indexH3 text-center pt-5">
                                1834 Map of Syracuse
                            </h3>
                            <div className="imageContainer">
                                <a href="https://picryl.com/media/map-of-the-village-of-syracuse-and-the-village-of-lodi-1834-f78dce">
                                    <img className="widthOfIndexPage img-fluid" src='/images/syracuseMap1834.jpg' alt="1834 Map of Syracuse" />
                                </a>
                                <br />
                                <span>
                                    <em>Image source: &nbsp;
                                        <a href="https://www.loc.gov/">
                                            Library of Congress
                                        </a>
                                    </em>
                                </span>
                            </div>

                            <h3 className="indexH3 text-center pt-4">
                                Clinton Square in 1880
                            </h3>
                            <div className="imageContainer">
                                <a href="https://picryl.com/media/grand-view-city-and-canal-syracuse-ny-3cfffc">
                                    <img className="widthOfIndexPage img-fluid" src='/images/clintonSquare1880.jpg' alt="Clinton Square in 1880" />
                                </a>
                                <br />
                                <span>
                                    <em>Image source: &nbsp;
                                        <a href="https://digitalcollections.nypl.org/">
                                            New York Public Library
                                        </a>
                                    </em>
                                </span>
                            </div>

                            <h3 className="indexH3 text-center pt-4">
                                Syracuse 1890
                            </h3>
                            <div className="imageContainer">
                                <a href="https://picryl.com/media/syracuse-ny-27315e">
                                    <img className="widthOfIndexPage img-fluid" src='/images/syracuse1890.jpg' alt="Syracuse 1890" />
                                </a>
                                <br />
                                <span>
                                    <em>Image source: &nbsp;
                                        <a href="https://www.loc.gov/">
                                            Library of Congress
                                        </a>
                                    </em>
                                </span>
                            </div>

                            <h3 className="indexH3 text-center pt-4">
                                Syracuse City Hall in 1904 and the 1970s
                            </h3>
                            <div className="doubleImageContainer container-fluid d-flex justify-content-center flex-wrap">
                                <div className="imageContainer">
                                    <a href="https://picryl.com/media/city-hall-syracuse-ny">
                                        <img className="sideBySide img-fluid" src='/images/syracuseCityHall1904.jpg' alt="Syracuse City Hall in 1904" />
                                    </a>
                                </div>
                                <div className="imageContainer">
                                    <a href="https://picryl.com/media/syracuse-city-hall-washington-street-syracuse-onondaga-county-ny">
                                        <img className="sideBySide img-fluid" src='/images/syracuseCityHall1970s.jpg' alt="Syracuse City Hall in the 1970s" />
                                    </a>
                                </div>
                            </div>
                            <br />
                            <span>
                                <em>Source for both images: &nbsp;
                                    <a href="https://www.loc.gov/">
                                        Library of Congress
                                    </a>
                                </em>
                            </span>
                            {/* <div className="imageContainer">
                                    <img className="widthOfIndexPage img-fluid" src='/images/onondagaLakeYachtClub1900.jpg' />
                                </div> */}
                        </div>

                    </div>
                    <div className="thankYouSupporters text-center pt-4 mt-4">
                        <h3 className="indexH3">Thank you to the following organizations:</h3>
                        <div className="supportersContainer container-fluid d-flex justify-content-sm-center flex-column pt-2">
                            <div>
                                <a href="https://careersincode.org/">
                                    <img style={{ backgroundColor: "black", maxHeight: 40 }} src="/images/hackUpstateCiCLogo.png" alt="Careers in Code Logo" />
                                </a>
                            </div>
                            <div className="container-fluid d-flex justify-content-center">
                                <div>
                                    <a href="https://hackupstate.com/home/">
                                        <img style={{ backgroundColor: "black", maxHeight: 60 }} src="/images/hackUpstateLogo.png" alt="Hack Upstate Logo" />
                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.cnyhistory.org/">
                                        <img style={{ maxHeight: 60 }} src="/images/ohaLogo.png" alt="Onondaga Historical Association Logo" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
};