// import googleMapsAPIKey from "./googleMapsAPIKey/googleMapsAPIKey";
import "./MapPage.scss";
import { useState, useEffect, useCallback, memo } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow, DirectionsService, DirectionsRenderer, DirectionsRequest, DirectionsRendererOptions } from '@react-google-maps/api';

// https://www.npmjs.com/package/@react-google-maps/api

const containerStyle = {height: "calc(100vh - 185px)", width: "100vw"};
const divStyle = {background: `white`, border: `1px solid #ccc`, padding: 15};

function WalkumentaryMap({handleLink}) {
    const [map, setMap] = useState(null);
    const [origin, setOrigin] = useState(null);
    const [destination, setDestination] = useState(null);
    const [userLocation, setUserLocation] = useState(null);
    const [center, setCenter] = useState({lat: 43.049736, lng: -76.150136});
    const [markers, setMarkers] = useState(null);
    const [infoWindows, setInfoWindows] = useState(null);
    const [markerClicked, setMarkerClicked] = useState(false);
    const [directions, setDirections] = useState(null)
    
    // const [mapData, setMapData] = useState(null);

    useEffect(() => {
        const loadSite = async () => {
            const response = await fetch(`http://localhost:3005/sites/`, {
                method: "GET"
            });
            const data = await response.json();
            setMarkers(data.siteData);
            setInfoWindows(data.siteData)
            // setMapData(data.siteData);
        };
        loadSite();
    },[]);
    
    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(userMarkerCoordinates);
        } else {
            console.log("Location is not enabled.")
        };
    };

    const userMarkerCoordinates = (position) => {
        console.log("Latitude:", position.coords.latitude,
        "Longitude:", position.coords.longitude);
        setUserLocation({lat: position.coords.latitude, lng: position.coords.longitude});
        setCenter({lat: position.coords.latitude, lng: position.coords.longitude});
    };
    
    // https://reactjs.org/docs/hooks-reference.html#usecallback
    const onLoad = useCallback(function callback(map, infoWindow, directionsService, directionsRenderer) {
        setMap(map);
    }, []);

    const onUnmount = useCallback(function callback(map) {
        setMap(null);
    }, []);

    const directionsCallback = (response) => {
        console.log(response);
        setDirections(response)
    };

        //console.log(googleMapsAPIKey.key, typeof googleMapsAPIKey.key); // returns key w/o quotes, string but <LoadScript googleMapsApiKey={googleMapsAPIKey.key}> doesn't work

        if (!markers){
            return <h1>Loading</h1>
        }

        
    return <div>
        <div id="userLocation" className="text-center">
            <h3>Please enable your location for directions to a site!</h3>
            <button className="btn btn-info mb-3" onClick={getUserLocation}>Show my location</button>
        </div>
        <LoadScript googleMapsApiKey="API_Key">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17} 
        onLoad={onLoad}     
        // onUnmount={onUnmount}
        >
            <Marker label="YOU ARE HERE" icon="/icons/icons8-compass-50.png" position={userLocation}>
            </Marker>

            {markers.map((marker) => {
                    return (
                        <Marker 
                            key={marker.siteID} 
                            label={marker.name} 
                            icon="https://img.icons8.com/ios-filled/50/000000/sneakers.png" 
                            position={{lat: parseFloat(marker.location.latForMapDisplay), lng: parseFloat(marker.location.lngForMapDisplay)}} 
                            onClick={markerClicked ? () => {setMarkerClicked(false)} : () => {setMarkerClicked(marker.siteID)}}>

                            {markerClicked === marker.siteID ? 
                                <InfoWindow onLoad={onLoad} position={{lat: 43.0484000, lng:-76.1467240}} onCloseClick={() => {setMarkerClicked(null)}}>
                                    <div style={divStyle}>
                                        {/* Error: link is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`. */}
                                        <h3><a href="/tour" onClick={() => handleLink(marker.siteID)}>{marker.name}</a></h3>
                                        {/* https://upmostly.com/tutorials/pass-a-parameter-through-onclick-in-react */}
                                        <p>{marker.location.popUpDescription}</p>
                                        <button 
                                        // it's doing this when you click the marker not the button. running setDestination causes an error about too many loops. also prints twice when infoWindow is not open and once if it is (evidence of the loop issue).
                                            className="btn btn-sm btn-info" 
                                            onClick={console.log(
                                                {lat: 
                                                    parseFloat(marker.location.latForMapDisplay), 
                                                lng: 
                                                    parseFloat(marker.location.lngForMapDisplay)
                                                }
                                            )}
                                            // onClick={
                                            //     setDestination({
                                            //         lat: parseFloat(marker.location.latForMapDisplay), 
                                            //         lng: parseFloat(marker.location.lngForMapDisplay)
                                            //     })
                                            // }
                                        >
                                            Get Directions
                                        </button>
                                </div>
                            </InfoWindow> : null}
                        </Marker>
                    );
                })}

            {directions ? null : <DirectionsService
                // required
                options={{ 
                    destination: {lat: 43.0500000, lng: -76.1492500},
                    origin: {lat: 43.0484000, lng:-76.1467240},
                    travelMode: 'WALKING'
                }}
                // required
                callback={directionsCallback}
            />}

            {directions ? <DirectionsRenderer
                options={{ // eslint-disable-line 
                    directions
                }}
            /> : null}


            </GoogleMap>
        </LoadScript>
            <span className="iconCredit">
                <a target="_blank" href="https://icons8.com/icon/39712/sneakers">Sneaker</a>
                &nbsp; & &nbsp; 
                <a target="_blank" href="https://icons8.com/icon/uHuD6VI5HlWw/compass">Compass</a>
                {/* <a target="_blank" href="https://icons8.com/icon/Wm3qmJKy2mqD/compass">Compass</a> */}
                &nbsp; icons by Icons8
            </span>
        </div>
    };

export const MapPage = memo(WalkumentaryMap);

// export const MapPage = () => {
//     return (
//         <div style={{padding: "60px"}}>
//             <p>The map page looks like this when the API Key is included in the public code. 4 markers placed & labeled, working on react version of pop up windows and directions.</p>
//             <img style={{height: "80vh"}} src="/images/walkumentaryGoogleMap.png" />
//         </div>
//     )
// }