import "./Homepage.scss"

export const Homepage = (props) => {
    return (
        <div className="Homepage">
            <main>
                <div className="indexBackground">
                    <div id="indexForeground">
                        <h1 className="indexH1">Walkumentary</h1>
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
                                        <img className="widthOfIndexPage img-fluid" src='/images/syracuseMap1834.jpg' />
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
                                        <img className="widthOfIndexPage img-fluid" src='/images/clintonSquare1880.jpg' />
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
                                        <img className="widthOfIndexPage img-fluid" src='/images/syracuse1890.jpg' />
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
                                        <img className="sideBySide img-fluid" src='/images/syracuseCityHall1904.jpg' />
                                        </a>
                                    </div>
                                    <div className="imageContainer">
                                        <a href="https://picryl.com/media/syracuse-city-hall-washington-street-syracuse-onondaga-county-ny">
                                        <img className="sideBySide img-fluid" src='/images/syracuseCityHall1970s.jpg' />
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
                            <h3 class ="indexH3">Thank you to the following supporters!</h3>
                            <div className="supportersContainer container-fluid d-flex justify-content-around pt-2">
                                <div>
                                    <h4>Logo</h4>
                                </div>
                                <div>
                                    <h4>Logo</h4>
                                </div>
                                <div>
                                    <h4>Logo</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};