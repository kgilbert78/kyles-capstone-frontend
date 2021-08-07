//import { googleMapsApiKey } from "./googleMapsAPIKey/googleMapsAPIKey";
import { useState, useCallback, memo } from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';



// https://www.npmjs.com/package/@react-google-maps/api

const containerStyle = {height: "calc(100vh - 50px)", width: "100vw", marginTop:50};

const center = {lat: 43.0471677, lng: -76.1510856};

function WalkumentaryMap() {
    // const { isLoaded } = useJsApiLoader({
    //     id: 'google-map-script',
    //     googleMapsApiKey: "AIzaSyBrZIgybvj_BUwnQD2ndI2ExoBqf7DxAr0"
    // });
    
    const [map, setMap] = useState(null);
    
    // https://reactjs.org/docs/hooks-reference.html#usecallback
    const onLoad = useCallback(function callback(map) {
        // const bounds = new window.google.maps.LatLngBounds(); // omit window?
        // map.fitBounds(bounds);
        setMap(map);

        // const fayetteParkMarker = new google.maps.Marker({
        //     position: {lat: 43.048400, lng: -76.146724},
        //     map: map,
        //     label: "Fayette Park"
        // });
    
        // const fayetteParkPopUp = new google.maps.InfoWindow({
        //     content: `<h1>Fayette Park</h1><p>Brief description</p>`
        // });
    
        // fayetteParkMarker.addListener('click', () => {
        //     fayetteParkPopUp.open(map, fayetteParkMarker);
        // });
    
        // const cityHallMarker = new google.maps.Marker({
        //     position: {lat: 43.050000, lng: -76.1490000},
        //     map: map,
        //     label: "City Hall"
        // });
    
        // const cityHallPopUp = new google.maps.InfoWindow({
        //     content: `<h1>City Hall</h1><p>Brief description</p>`
        // });
    
        // cityHallMarker.addListener('click', () => {
        //     cityHallPopUp.open(map, cityHallMarker);
        // });
    }, []);
    
    const onUnmount = useCallback(function callback(map) {
        setMap(null);
    }, []);
    
    return <LoadScript googleMapsApiKey="">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17} 
        onLoad={onLoad} 
        
        // onUnmount={onUnmount}
        >
           <Marker label="City Hall" position={{lat: 43.050000, lng: -76.1490000}}></Marker>
        </GoogleMap>
        </LoadScript>
};

export const MemoizedMap = memo(WalkumentaryMap);