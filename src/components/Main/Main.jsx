import React from "react";
import { useSelector } from "react-redux";

import Map from "../GoogleMap/Map";
import { getUser } from "../../Redux/Selector";
import styles from "./main.module.scss";

const Home = () => {
    const user = useSelector(getUser);

    return (
        <div className={styles.appcontainer}>
            {!!user && (
                <h1 className={styles.title}>Hello {user}, welcome back 😊</h1>
            )}
            <Map></Map>
        </div>
    );
};

export default Home;
