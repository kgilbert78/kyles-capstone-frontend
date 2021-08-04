// import { googleMapsApiKey } from "./googleMapsAPIKey/googleMapsAPIKey";
// import { useState, useCallback, memo } from "react";
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';



// // https://www.npmjs.com/package/@react-google-maps/api

// const containerStyle = {
//     height: '80vh',
//     width: '90vh'
// };

// const center = {lat: 43.0471677, lng: -76.1510856};

// function WalkumentaryMap() {
//     const { isLoaded } = useJsApiLoader({
//         id: 'google-map-script',
//         googleMapsApiKey: "API Key goes here"
//     });
    
//     const [map, setMap] = useState(null);
    
//     // https://reactjs.org/docs/hooks-reference.html#usecallback
//     const onLoad = useCallback(function callback(map) {
//         const bounds = new window.google.maps.LatLngBounds(); // omit window?
//         map.fitBounds(bounds);
//         setMap(map);
//     }, []);
    
//     const onUnmount = useCallback(function callback(map) {
//         setMap(null);
//     }, []);
    
//     return isLoaded ? (
//         <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17} onLoad={onLoad} onUnmount={onUnmount}>
//             {            
//                 // const fayetteParkMarker = new google.maps.Marker({
//                 //     position: {lat: 43.048400, lng: -76.146724},
//                 //     map: map,
//                 //     label: "Fayette Park"
//                 // });
            
//                 // const fayetteParkPopUp = new google.maps.InfoWindow({
//                 //     content: `<h1>Fayette Park</h1><p>Brief description</p>`
//                 // });
            
//                 // fayetteParkMarker.addListener('click', () => {
//                 //     fayetteParkPopUp.open(map, fayetteParkMarker);
//                 // });
            
//                 // const cityHallMarker = new google.maps.Marker({
//                 //     position: {lat: 43.050000, lng: -76.1490000},
//                 //     map: map,
//                 //     label: "City Hall"
//                 // });
            
//                 // const cityHallPopUp = new google.maps.InfoWindow({
//                 //     content: `<h1>City Hall</h1><p>Brief description</p>`
//                 // });
            
//                 // cityHallMarker.addListener('click', () => {
//                 //     cityHallPopUp.open(map, cityHallMarker);
//                 // });
//             }
//         </GoogleMap>
//     ) : <></>
// };

// export const MemoizedMap = memo(WalkumentaryMap);