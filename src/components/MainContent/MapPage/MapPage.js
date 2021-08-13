// import googleMapsAPIKey from "./googleMapsAPIKey/googleMapsAPIKey";
import "./MapPage.scss";
import { useState, useCallback, memo } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow, DirectionsService, DirectionsRenderer, DirectionsRequest, DirectionsRendererOptions } from '@react-google-maps/api';

// https://www.npmjs.com/package/@react-google-maps/api

const containerStyle = {height: "calc(100vh - 160px)", width: "100vw"};
const divStyle = {background: `white`, border: `1px solid #ccc`, padding: 15};

// const center = {lat: 43.049736, lng:-76.150136};

function WalkumentaryMap() {
    const [map, setMap] = useState(null);
    const [origin, setOrigin] = useState(null);
    const [destination, setDestination] = useState(null);
    const [userLocation, setUserLocation] = useState(null);
    const [center, setCenter] = useState({lat: 43.049736, lng: -76.150136})

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

    // const onInfoWindowLoad = infoWindow => {
    //     console.log('infoWindow: ', infoWindow)
    // }
    
    const onUnmount = useCallback(function callback(map) {
        setMap(null);
    }, []);

    const directionsCallback = (response) => {
        console.log(response);
    };

    // ORIGINAL CODE FROM EXAMPLE
    // directionsCallback (response) {
    //     console.log(response)
    
    //     if (response !== null) {
    //       if (response.status === 'OK') {
    //         this.setState(
    //           () => ({
    //             response
    //           })
    //         )
    //       } else {
    //         console.log('response: ', response)
    //       }
    //     }
    //   }

    //console.log(googleMapsAPIKey.key, typeof googleMapsAPIKey.key); // returns key w/o quotes, string but <LoadScript googleMapsApiKey={googleMapsAPIKey.key}> doesn't work
    
    return <div>
        <div id="userLocation" className="text-center">
            <h3>Please enable your location for directions to a site!</h3>
            <button className="btn btn-info" onClick={getUserLocation}>Enable my Location</button>
            <p>{userMarkerCoordinates}</p>
        </div>
        <LoadScript googleMapsApiKey="API Key">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17} 
        onLoad={onLoad} 

        
        // onUnmount={onUnmount}
        >
             <Marker label="YOU ARE HERE" position={userLocation}></Marker>
            <Marker 
                label="Fayette Park" 
                position={{lat: 43.0484000, lng:-76.1467240}}
                onClick={(event) => {
                    event.preventDefault();
                    return (
                        <InfoWindow onLoad={onLoad} position={{lat: 43.0484000, lng:-76.1467240}}>
                            <div style={divStyle}>
                                {/* replace <a> with <Link to>, fix h3 to be h1 with styling to make it smaller, fix route to display Fayette Park tourpage */}
                                <h3><a href="/tour">Fayette Park</a></h3>
                                <p>Brief description goes here.</p>
                            </div>
                        </InfoWindow>
                    )
                }}
            >
            </Marker>
        <InfoWindow onLoad={onLoad} position={{lat: 43.0484000, lng:-76.1467240}}>
                <div style={divStyle}>
                    {/* replace <a> with <Link to>, fix h3 to be h1 with styling to make it smaller, fix route to display Fayette Park tourpage */}
                    <h3><a href="/tour">Fayette Park</a></h3>
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

            <Marker label="City Hall / Market Hall" position={{lat: 43.0500000, lng: -76.1490000}}></Marker>
            <Marker label="George Vashon Law Office" position={{lat: 43.0506402, lng:-76.1509000}}></Marker>
            <Marker label="Jerry Rescue Monument?" position={{lat: 43.0507377, lng: -76.1534500}}></Marker>

            </GoogleMap>
        </LoadScript>
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