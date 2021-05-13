import React, { useState, useCallback } from "react";
import { GoogleMap, InfoWindow, useJsApiLoader } from "@react-google-maps/api";

import styles from "./map.module.scss";

const containerStyle = {
    width: "400px",
    height: "400px",
};

const center = {
    lat: -3.745,
    lng: -38.523,
};

const Map = () => {
    const [map, setMap] = useState(null);
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.REACT_APP_TEMP_KEY,
    });
    console.log(map);

    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map);
    }, []);

    const onUnmount = useCallback(function callback(map) {
        setMap(null);
    }, []);
    return isLoaded ? (
        <div className={styles.mapcontainer}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
            ></GoogleMap>
        </div>
    ) : (
        <></>
    );
};

export default Map;
