import React from "react";

import Map from "../GoogleMap/Map";
import styles from "./home.module.scss";

const Home = () => {
    return (
        <div className={styles.appcontainer}>
            <h1 className={styles.title}>Wandeling</h1>
            <Map></Map>
        </div>
    );
};

export default Home;
