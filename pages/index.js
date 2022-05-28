import AuthContext from "../context/auth";
import { useContext } from "react";

export default function Home() {
    const ctx = useContext(AuthContext);

    return <h1>{ctx.isLogin}</h1>;
}
