import "./MapPage.scss"
import { useState, useCallback, memo } from "react";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

export const MapPage = (props) => {

    // https://www.npmjs.com/package/@react-google-maps/api

    const containerStyle = {
        height: '80vh',
        width: '90vh'
    };

    const center = {lat: 43.0471677, lng: -76.1510856};

    function WalkumentaryMap() {
        const { isLoaded } = useJsApiLoader({
            id: 'google-map-script',
            googleMapsApiKey: "API key goes here"
        });
        
        const [map, setMap] = useState(null);
        
        // https://reactjs.org/docs/hooks-reference.html#usecallback
        const onLoad = useCallback(function callback(map) {
            const bounds = new window.google.maps.LatLngBounds(); // omit window?
            map.fitBounds(bounds);
            // const directionsService= new google.maps.DirectionsService();
            // const directionsRenderer = new google.maps.DirectionsRenderer();
            // directionsRenderer.setMap(map);
            setMap(map);
        }, []);
        
        const onUnmount = useCallback(function callback(map) {
            // directionsRenderer.setMap(null);
            setMap(null);
        }, []);
        
        return isLoaded ? (
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17} onLoad={onLoad} onUnmount={onUnmount}>
                {            
                    // // don't think I need 2 functions here. work on simplifying and still using button to call function.
                    // const directionsButton = () => {
                    //     //console.log("directions button is connected");
                    //     calculateAndDisplayRoute(directionsService, directionsRenderer);
                    // };

                    // // const [directions, setDirections] = useState();
                    // document.getElementById("getDirections").addEventListener('click', directionsButton);
                
                    // // convert to async/await
                    // function calculateAndDisplayRoute(directionsService, directionsRenderer) {
                    //     // make into array or object of site locations
                    //     let youAreHere = '43.0472300, -76.1508000'; // temporarily fixed at Common Space
                    //     let fayettePark = '43.048400, -76.146724';
                    //     // // doesn't work formatted this way:
                    //     // let youAreHere = new google.map.LatLng(43.0472300, -76.1508000);
                    //     // let fayettePark = new google.map.LatLng(43.048400, -76.146724);
                    //     directionsService.route({
                    //         origin: youAreHere,
                    //         destination: fayettePark,
                    //         travelMode: google.maps.TravelMode.WALKING
                    //     }).then((response) => {
                    //         directionsRenderer.setDirections(response);
                    //         // make error status variable work
                    //     }).catch((error) => window.alert("Directions failed due to " + status));
                    // };
                
                    // let youAreHere = new google.maps.Marker({
                    //     // temporarily fixed at Common Space
                    //     position: {lat: 43.0472300, lng: -76.1508000},
                    //     map: map,
                    //     label: "You are here"
                    // });
                
                    // // for React, create addMarker function to pass objects into with props for coordinates and pop-up info windows
                    // // make original marker disappear when marker that directions creates appears (keep popup somehow?)
                    // const fayetteParkMarker = new google.maps.Marker({
                    //     position: {lat: 43.048400, lng:-76.146724},
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
                }
            </GoogleMap>
        ) : <></>
    };
    
    /*
    NOTES:
    
    Example code:
    https://developers.google.com/maps/documentation/javascript/examples/directions-simple#maps_directions_simple-html
    
    Example code for text directions:
    https://developers.google.com/maps/documentation/javascript/examples/directions-panel
    
    */

    return (
        <main className="mainContent">
            <div id="top">
                <h2>Google Maps Test</h2>
                <button id="getDirections">Get Directions</button>
            </div>
            {/* <div id="map"></div> */}
{/* 
            <script
                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBrZIgybvj_BUwnQD2ndI2ExoBqf7DxAr0&callback=initMap&libraries=&v=weekly"
                async
            ></script> */}
        </main>
    );
};

// export default memo(WalkumentaryMap);