import React from "react";
import { useSelector } from "react-redux";

import Map from "../GoogleMap/Map";
import { getUser } from "../../Redux/Selector";
import UserQuery from "../UserQuery/UserQuery";
import styles from "./home.module.scss";

const Home = () => {
    const user = useSelector(getUser);

    return (
        <div className={styles.appcontainer}>
            {!!user && (
                <h1 className={styles.title}>Hello {user}, welcome back 😊</h1>
            )}
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
