import React, { useState, useEffect, useMemo, createContext } from 'react'
import { getToken, setToken, removeToken } from "../helpers/auth";
import {
    registerApi,
    loginApi,
    findAllUsersApi
} from "../services/api"

const UserContext = createContext()

export const UserProvider = (props) => {
    const [user, setUser] = useState({})
    const [token, setToken] = useState(getToken())
    const [error, setError] = useState(false)
    const [darkMode, setDarkMode] = useState(false)

    const logIn = async (form) => {
        try {
            const response = await loginApi({ ...form })
            return response;
        } catch (err) {
            return err
        }
    }
    const logOut = () => {
        setToken()
        return removeToken()
    }

    //clean all subcriptions to avoid warnings of leak memory
    useEffect(() => {
    }, [token])

    //Memorized
    const value = useMemo(() => {
        return {
            user,
            token,
            darkMode,
            setToken,
            logIn,
            logOut,
            setDarkMode
        }
    }, [token])

    return (
        <UserContext.Provider value={value} {...props}></UserContext.Provider>
    )
}

export const useUser = () => {
    const context = React.useContext(UserContext)
    if (!context) {
        throw new Error('useUser not found')
    }
    return context
}
