import React from "react"

import styles from "./inputField.module.scss";

const InputField = ({title, onChangeHandler, id, type, name, errorMessage, autofocus }) => {
    console.log(errorMessage);
    return (
        <div className={styles.container}>
        <label>{title}</label>
            <input
                type={type}
                id={id}
                name={name}
                onChange={onChangeHandler}
                autoFocus={autofocus}
            />
            {errorMessage && 
            <span className={styles.errorMessage}>{errorMessage}</span>}
        </div>

    )
}

export default InputField;