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
                        <p>
                        The aim of this project was to create a sample of a tour that is primarily audio-based, leaving your eyes and hands free. Additional features include immersive sound effects and clips of speeches. Future plans include automatic play of the narrative when the user arrives at the site, and audio GPS directions to help the user navigate to the chosen site.
                        </p>
                        <div className="text-center">
                            <a href="/tour">
                                <button type="button" className="btn btn-xl btn-info">Go to Tour Options</button>
                            </a>
                        </div>
                        <div className="largerDisplayOnly"> {/* .d-none .d-sm-block */}
                            {/* write alt tags for these & credit images */}
                            <div className="text-center">
                                <h3 className="indexH3 text-center pt-5">
                                    1834 Map of Syracuse
                                </h3>
                                <div className="imageContainer">
                                    <img className="widthOfIndexPage img-fluid" src='/images/syracuseMap1834.jpg' />
                                </div>
                                <h3 className="indexH3 text-center pt-4">
                                    Clinton Square in 1880
                                </h3>
                                <div className="imageContainer">
                                    <img className="widthOfIndexPage img-fluid" src='/images/clintonSquare1880.jpg' />
                                </div>
                                <h3 className="indexH3 text-center pt-4">
                                    Syracuse 1890
                                </h3>
                                <div className="imageContainer">
                                    <img className="widthOfIndexPage img-fluid" src='/images/syracuse1890.jpg' />
                                </div>
                                <h3 className="indexH3 text-center pt-4">
                                    Syracuse City Hall in 1904 and the 1970s
                                </h3>
                                <div className="doubleImageContainer container-fluid d-flex justify-content-center flex-wrap">
                                    <div className="imageContainer">
                                        <img className="sideBySide img-fluid" src='/images/syracuseCityHall1904.jpg' />
                                    </div>
                                    <div className="imageContainer">
                                        <img className="sideBySide img-fluid" src='/images/syracuseCityHall1970s.jpg' />
                                    </div>                                              
                                </div>
                                {/* <div className="imageContainer">
                                    <img className="widthOfIndexPage img-fluid" src='/images/onondagaLakeYachtClub1900.jpg' />
                                </div> */}
                            </div>

                        </div>
                        <div className="text-center pt-4">
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