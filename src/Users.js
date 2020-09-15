// src/Users.js
import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Addcontext from "./Compoment/AddContext";

const getUsersQuery = gql`
{
    todoList {
        _id
        content
        completed
    }
}
`;

const Users = ({ add }) => (
    <Query query={getUsersQuery} >
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            // 最重要的就是從 data 裡面取得資料
            return (
                <Addcontext add={add} data={data} />
            );
        }}
    </Query >
);
export default Users;