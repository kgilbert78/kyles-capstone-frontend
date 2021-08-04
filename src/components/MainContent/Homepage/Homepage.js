import "./Homepage.scss"

export const Homepage = (props) => {
    return (
        <div className="Homepage">
            <main>
                <div className="indexBackground">
                    <div id="indexForeground">
                        <h1 className="indexH1">Walkumentary</h1>
                    </div>
                    <div className="mainContent">
                        <h2 className="indexH2">
                            An immersive audio walking tour of Syracuse history.
                        </h2>
                        <p>
                            Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <div className="text-center">
                            <a href="/tour">
                                <button type="button" className="btn btn-xl btn-info">Go to Tour Options</button>
                            </a>
                        </div>
                        <div className="largerDisplayOnly"> {/* .d-none .d-sm-block */}
                            <h3 className="indexH3 text-center pt-4">
                                Historical Images of Downtown Syracuse:
                            </h3>
                            <p mt-0>
                                Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            {/* write alt tags for these & credit images */}
                            <div className="text-center">
                                <h3 className="indexH3 text-center pt-4">
                                    1834 Map of Syracuse
                                </h3>
                                <div className="imageContainer">
                                    <img className="widthOfIndexPage img-fluid" src={require('../../../images/syracuseMap1834.jpg').default} />
                                </div>
                                <h3 className="indexH3 text-center pt-4">
                                    Clinton Square in 1880
                                </h3>
                                <div className="imageContainer">
                                    <img className="widthOfIndexPage img-fluid" src={require('../../../images/clintonSquare1880.jpg').default} />
                                </div>
                                <h3 className="indexH3 text-center pt-4">
                                    Syracuse 1890
                                </h3>
                                <div className="imageContainer">
                                    <img className="widthOfIndexPage img-fluid" src={require('../../../images/syracuse1890.jpg').default} />
                                </div>
                                <h3 className="indexH3 text-center pt-4">
                                    Syracuse City Hall in 1904 and the 1970s
                                </h3>
                                <div className="doubleImageContainer container-fluid d-flex justify-content-center flex-wrap">
                                    <div className="imageContainer">
                                        <img className="sideBySide img-fluid" src={require('../../../images/syracuseCityHall1904.jpg').default} />
                                    </div>
                                    <div className="imageContainer">
                                        <img className="sideBySide img-fluid" src={require('../../../images/syracuseCityHall1970s.jpg').default} />
                                    </div>                                              
                                </div>
                                {/* <div className="imageContainer">
                                    <img className="widthOfIndexPage img-fluid" src={require('../../../images/onondagaLakeYachtClub1900.jpg').default} />
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