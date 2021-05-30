/* eslint-disable no-unused-vars */
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import styles from "./userQuery.module.scss";

const USER_QUERY = gql`
    query UserQuery($id: String!) {
        user(id: $id) {
            name
            markers {
                id
                title
            }
        }
    }
`;
const UserQuery = () => {
    const id = "2";
    const { loading, error, data } = useQuery(USER_QUERY, {
        variables: { id },
    });
    if (loading) {
        console.log("loading");
    }
    if (error) {
        console.log("error:", error);
    }
    console.log("data", data);
    return (
        <div className={styles.markersList}>
            <p>{data?.user?.name}</p>
            <ul>
                {data?.user?.markers?.map((marker) => (
                    <li key={marker.id}>{marker.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserQuery;
