/* eslint-disable no-unused-vars */
import React from "react";

import Map from "../GoogleMap/Map";
import UserQuery from "../UserQuery";
import styles from "./home.module.scss";

const Home = () => {
    return (
        <div className={styles.appcontainer}>
            <h1 className={styles.title}>Wandeling</h1>
            <Map></Map>
            <div className={styles.markersList}>
                <p>user:</p>
                <p>Markers: </p>
                <UserQuery></UserQuery>
            </div>
        </div>
    );
};

export default Home;
