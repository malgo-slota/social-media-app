import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem('user')) || null
    );

    const login = () => {
        setCurrentUser({
            id: 1,
            name: "admin",
        });
    };

    useEffect(() => {
      localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser])   

    return (
        <AuthContext.Provider value={{ currentUser, login }}>
            {children}
        </AuthContext.Provider>
    );
};