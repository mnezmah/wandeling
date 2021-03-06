/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"

import { getUser } from "../../Redux/Selector";
import styles from "./home.module.scss";

const Home = () => {
    const user = useSelector(getUser);

    return (
        <div className={styles.appcontainer}>
        <Link to="/sign-in">Sign in</Link>
        <Link to="/register">Register</Link>
        </div>
    );
};

export default Home;
