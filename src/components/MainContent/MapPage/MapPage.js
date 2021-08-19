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

    function calculateAndDisplayRoute(event) {
        event.preventDefault();
        setOrigin({lat: 43.0484000, lng: -76.1467240});
        setDestination({lat: 43.0500000, lng: -76.1490000});
        console.log("origin:", origin, "destination:", destination)
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
    };

        //console.log(googleMapsAPIKey.key, typeof googleMapsAPIKey.key); // returns key w/o quotes, string but <LoadScript googleMapsApiKey={googleMapsAPIKey.key}> doesn't work

    const AddMarkers = () => {
        if (markers !== null) {
            return (
                markers.map((marker) => {
                    return (
                        <Marker key={marker.siteID} label={marker.name} icon="https://img.icons8.com/ios-filled/50/000000/sneakers.png" position={{lat: parseFloat(marker.location.latForMapDisplay), lng: parseFloat(marker.location.lngForMapDisplay)}}></Marker>
                        
                    );
                })
            )
        };
    };
    
        
    return <div>
        <div id="userLocation" className="text-center">
            <h3>Please enable your location for directions to a site!</h3>
            <button className="btn btn-info mb-3" onClick={getUserLocation}>Show my location</button>
        </div>
        <LoadScript googleMapsApiKey="AIzaSyAdQUkN9JnbfrY3eu680lFHIUrbx0qKjN8">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17} 
        onLoad={onLoad}     
        // onUnmount={onUnmount}
        >
             <Marker label="YOU ARE HERE" icon="/icons/icons8-compass-50.png" position={userLocation}></Marker>

            {/* <AddMarkers />  */}
            
            {/* <AddInfoWindows /> */}
            {/* Error: Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops. */}

            <InfoWindow onLoad={onLoad} position={{lat: 43.0484000, lng:-76.1467240}}>
                <div style={divStyle}>
                    {/* replace <a> with <Link to>, fix h3 to be h1 with styling to make it smaller, fix route to display Fayette Park tourpage */}
                    {/* CALL fetchParams FROM THIS LINK - use onClick? */}
                    <h3><a href="/tour" onClick={handleLink}>Fayette Park</a></h3>
                    <p>Brief description goes here.</p>
                    <form>
                        <button className="btn btn-sm btn-info" onClick={calculateAndDisplayRoute}>
                            Get Directions
                        </button>
                    </form>
                </div>
            </InfoWindow>

            {/* <DirectionsService
                // required
                options={{ // eslint-disable-line react-perf/jsx-no-new-object-as-prop
                    destination: destination,
                    origin: origin,
                    travelMode: 'WALKING'
                }}
                // required
                callback={directionsCallback}
            />

            <DirectionsRenderer
                options={{ // eslint-disable-line react-perf/jsx-no-new-object-as-prop
                    directions: directionsCallback() // ??? originally this.state.response
                }}
            /> */}


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