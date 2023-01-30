import React from 'react';
import {createContext, useState} from 'react';

export const UserContext = createContext();

export default function UserContextProvider(props){
    const [username, setUsername] = useState('');
    const [secret, setSecret] = useState('')

    const data = {
        username, setUsername, secret, setSecret
    }

    return<UserContext.Provider value = {data}>{props.children}</UserContext.Provider>
}