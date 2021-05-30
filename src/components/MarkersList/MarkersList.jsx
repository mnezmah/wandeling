/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { getMarkers } from "../../Redux/Selector";

const MarkersList = () => {
    const markers = useSelector(getMarkers);
    useEffect(() => {
        if (markers) console.log(markers);
    }, [markers]);

    return (
        <div>
            <h3>Your places:</h3>
            <ul>
                {markers?.map((marker) => (
                    <li key={marker.id}>
                        lat:{marker.lat} lng: {marker.lng}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MarkersList;
