// import googleMapsAPIKey from "./googleMapsAPIKey/googleMapsAPIKey";
import { useState, useCallback, memo } from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// https://www.npmjs.com/package/@react-google-maps/api

const containerStyle = {height: "calc(100vh - 50px)", width: "100vw", marginTop:50};
const divStyle = {background: `white`, border: `1px solid #ccc`, padding: 15};

const center = {lat: 43.049736, lng:-76.150136};

function WalkumentaryMap() {
    const [map, setMap] = useState(null);
    
    // https://reactjs.org/docs/hooks-reference.html#usecallback
    const onLoad = useCallback(function callback(map, infoWindow) {
        setMap(map);
        console.log('infoWindow: ', infoWindow);
    }, []);

    // const onInfoWindowLoad = infoWindow => {
    //     console.log('infoWindow: ', infoWindow)
    // }
    
    const onUnmount = useCallback(function callback(map) {
        setMap(null);
    }, []);

    //console.log(googleMapsAPIKey.key, typeof googleMapsAPIKey.key); // returns key w/o quotes, string but <LoadScript googleMapsApiKey={googleMapsAPIKey.key}> doesn't work
    
    return <LoadScript googleMapsApiKey="API key here">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17} 
        onLoad={onLoad} 

        
        // onUnmount={onUnmount}
        >
           <Marker label="Fayette Park" position={{lat: 43.0484000, lng:-76.1467240}}></Marker>
           {/* <InfoWindow onLoad={onLoad} position={{lat: 43.0484000, lng:-76.1467240}}>
                <div style={divStyle}>
                    <h1>Fayette Park</h1>
                    <p>Brief description goes here.</p>
                </div>
            </InfoWindow> */}

           {/* 
           https://react-google-maps-api-docs.netlify.app/#infowindow 
           anchor: MVCObject | undefined
           Can be any MVCObject that exposes a LatLng position property and optionally a Point anchorPoint property for calculating the pixelOffset. The anchorPoint is the offset from the anchor's position to the tip of the InfoWindow.
           
           MVCObject takes addListener - might be able to use for pop up when marker is clicked
           https://developers.google.com/maps/documentation/javascript/reference/event#MVCObject 
           */}


           <Marker label="City Hall / Market Hall" position={{lat: 43.0500000, lng: -76.1490000}}></Marker>
           <Marker label="George Vashon Law Office" position={{lat: 43.0506402, lng:-76.1509000}}></Marker>
           <Marker label="Jerry Rescue Monument?" position={{lat: 43.0507377, lng: -76.1534500}}></Marker>
        </GoogleMap>
        </LoadScript>
};

export const MapPage = memo(WalkumentaryMap);