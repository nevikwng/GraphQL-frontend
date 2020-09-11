// src/Users.js
import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const getUsersQuery = gql`
{
    sql {
        UserName
    }
}
`;
const Users = () => (
    <Query query={getUsersQuery}>
        {({ loading, error, data }) => {
            console.log(data)
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            // 最重要的就是從 data 裡面取得資料
            const lists = data.sql.map((currentUser, index) => (
                <li key={index}> {currentUser.UserName} </li>
            ));

            return (
                <div>
                    <ul style={{ "listStyleType": "none" }}>{lists}</ul>
                </div>
            );
        }}
    </Query>
);
export default Users;