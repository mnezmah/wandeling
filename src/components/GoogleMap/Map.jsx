/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";

import MarkersList from "../MarkersList/MarkersList";
import { addMarker } from "../../Redux/Slice";
import { getMarkers } from "../../Redux/Selector";
import styles from "./map.module.scss";

const containerStyle = {
    width: "60%",
    height: "70vh",
};

const center = {
    lat: 51.924,
    lng: 4.478,
};

const Map = () => {
    const dispatch = useDispatch();
    const [mapRef, setMapRef] = useState(null);
    const [isMarkershown, setIsMarkerShown] = useState(false);
    const [markerPosition, setMarkerPosition] = useState(null);
    const markers = useSelector(getMarkers);
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.REACT_APP_TEMP_KEY,
    });

    const onLoadHandler = (map) => {
        setMapRef(map);
        map.addListener("click", onMapClick);
    };

    const onMapClick = (e) => {
        const newMarkerPosition = {
            lat: parseFloat(e.latLng.lat().toFixed(3)),
            lng: parseFloat(e.latLng.lng().toFixed(3)),
        };
        console.log(newMarkerPosition);
        setMarkerPosition(e.latLng);
        setIsMarkerShown(true);
        dispatch(addMarker(newMarkerPosition));
    };

    return isLoaded ? (
        <div className={styles.mapContainer}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={9}
                onLoad={onLoadHandler}
            >
                {!!isMarkershown && <Marker position={markerPosition} />}
                {!!markers &&
                    markers?.map((marker, i) => {
                        const position = { lat: marker.lat, lng: marker.lng };
                        return <Marker key={i} position={position}></Marker>;
                    })}
            </GoogleMap>
            <MarkersList />
        </div>
    ) : (
        <></>
    );
};

export default Map;
