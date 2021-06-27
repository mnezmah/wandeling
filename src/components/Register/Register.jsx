/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import { useDispatch } from "react-redux"

import InputField from "../InputFiled/InputField";
import { setUser } from "../../Redux/Slice";
import styles from "./register.module.scss"




const Register =  (props) => {
    const dispatch = useDispatch();
    const [userName, setUserName] = useState(undefined);
    const [password, setPassword] = useState(undefined);
    const [confirmPassword, setConfirmPassword] = useState(undefined);
    const [errorMessage, setErrorMessage] = useState({});
    const passwordsMatch = password && confirmPassword && password === confirmPassword;
    const allFieldIn = userName && password && confirmPassword;
    const bothPasswordsFilled = password && confirmPassword;

    const isEmpty = (value) => {
    if(value && value.lenght >= 5 && value) return false 
    else return true
    }

    const validate = () => {
        const errorObject = {
            userName: "Username must be at leaset 3 characters long",
            password: "Password must be at least 5 characters long!",
            confirmPassword: "Passwords do not match"
        }

        switch(true) {
            case isEmpty(userName) && bothPasswordsFilled && !passwordsMatch:
                setErrorMessage({userName: errorObject.userName, 
                    confirmPassword: errorObject.confirmPassword})
                    break;
                    case   isEmpty(userName) && isEmpty(password) && !passwordsMatch:
                        setErrorMessage(errorObject);
                        break;
                case isEmpty(password) && !passwordsMatch:
                    setErrorMessage({ 
                        password: errorObject.password,
                        confirmPassword: errorObject.confirmPassword});
                        break;
                        case  isEmpty(userName):
                            console.log( "case 1");
                            setErrorMessage({userName: errorObject.userName})
                        break;
                        case isEmpty(password): setErrorMessage({password: errorObject.password});
                        break;
                        case  bothPasswordsFilled && !passwordsMatch:setErrorMessage({ confirmPassword: errorObject.confirmPassword})
                        break;
                        case  isEmpty(userName) && isEmpty(password):
                            setErrorMessage({userName: errorObject.userName, 
                                password: errorObject.password})
                                break;
            default: setErrorMessage({})
        }


        // isEmpty(userName) && setErrorMessage({userName: errorObject.userName});
        // isEmpty(password) && setErrorMessage({password: errorObject.password});
        // bothPasswordsFilled && !passwordsMatch && setErrorMessage({ confirmPassword: errorObject.confirmPassword})
        
        //combinations
        
        // no userName, faulty pass,
        // isEmpty(userName) && isEmpty(password) && setErrorMessage({userName: errorObject.userName, 
        //     password: errorObject.password})

        // no userName, passes not match
        // isEmpty(userName) && bothPasswordsFilled && !passwordsMatch && setErrorMessage({userName: errorObject.userName, 
        //     confirmPassword: errorObject.confirmPassword})
        
        // no userName, faulty pass, passes not match
        // isEmpty(userName) && isEmpty(password) && !passwordsMatch && setErrorMessage(errorObject)
      
        // faulty pass, passes not match
        // isEmpty(password) && !passwordsMatch && setErrorMessage({ 
        // password: errorObject.password,
        // confirmPassword: errorObject.confirmPassword})

    }

    const onClickHandler = (event) => {
        event.preventDefault();
        console.log(userName, password, confirmPassword);
        validate()
        console.log( "erronrM", errorMessage)
        if (Object.keys(errorMessage).length === 0) return false;
        props.history.push("/wandeling");
        // dispatch(createUser(userName));

    };

    const onChangeNameHandler = (event) => {
        const value = event.currentTarget.value;
        console.log("name: ", event.currentTarget.value);
        setUserName(value);
        validate();
    };

    const onChangePasswordHandler = (event) => {
        const value = event.currentTarget.value;
        console.log("pass :", event.currentTarget.value);
        setPassword(value);
        validate();
    };

    const onChangeConfirmPasswordHandler = (event) => {
        const value = event.currentTarget.value;
        console.log("pass again:", event.currentTarget.value);
        setConfirmPassword(value);
        validate();
    }


    const formItems = [
        {
            label: "Please enter your name",
            type: "text",
            id:"userName",
            name: "userName",
            change: onChangeNameHandler, 
            autofocus: "autofocus"
        },
        {
            label: "Choose your password",
            type: "password",
            id:"password",
            name: "password",
            change: onChangePasswordHandler, 
            autofocus: undefined
        },
        {
            label: "Confirm password", 
            type: "password",
            id:"confirmPassword",
            name: "confirmPassword",
            change: onChangeConfirmPasswordHandler,
            autofocus: undefined
        }
    ]


    return (
        <div className={styles.container}>
        <h1 className={styles.title}>Welcome to Wandeling 🚶</h1>

        <form className={styles.formContainer}>
        
            { formItems.map(({label, type, id, change, blur, name, disabled, autofocus}) => (
                <InputField 
                key={id} 
                type={type} 
                id={id} 
                onChangeHandler={change}
                name={name} 
                errorMessage={errorMessage[id] && errorMessage[id]} 
                title={label}
                autofocus={autofocus}
                />
            )) }
            
            <button className={styles.button} type="button" onClick={onClickHandler}>
                Register!
            </button>
        </form>
    </div>
    )
}

export default Register
