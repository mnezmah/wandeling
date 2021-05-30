import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { setUser } from "../../Redux/Slice";
import styles from "./signIn.module.scss";

const SignIn = (props) => {
    const dispatch = useDispatch();
    const [userName, setUserName] = useState(undefined);
    const [password, setPassword] = useState(undefined);

    const onClickHandler = (event) => {
        event.preventDefault();
        console.log(userName, password);
        dispatch(setUser(userName));
        props.history.push("/wandeling");
    };

    const onChangeNameHandler = (event) => {
        const value = event.currentTarget.value;
        console.log("name: ", event.currentTarget.value);
        setUserName(value);
    };

    const onChangePasswordHandler = (event) => {
        const value = event.currentTarget.value;
        console.log("pass :", event.currentTarget.value);
        setPassword(value);
    };
    return (
        <div className={styles.container}>
            <h1>Welcom to Wandeling</h1>

            <form action="" className={styles.formContainer}>
                <label>Please enter your name</label>
                <input
                    type="text"
                    id="userName"
                    name="userName"
                    onChange={onChangeNameHandler}
                />
                <label>and your password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={onChangePasswordHandler}
                />
                <button type="button" onClick={onClickHandler}>
                    Let's wandel!
                </button>
            </form>
        </div>
    );
};

export default SignIn;
