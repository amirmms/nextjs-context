import { useState } from "react";
import Header from "../components/Header";
import AuthContext from "../context/auth";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    const [login, setLogin] = useState(1);

    const loginHandler = () => {
        console.log("test");

        setLogin(login + 1);
    };

    return (
        <AuthContext.Provider
            value={{
                isLogin: login,
                onLogin: loginHandler,
            }}
        >
            <Header />

            <Component {...pageProps} />
        </AuthContext.Provider>
    );
}

export default MyApp;
