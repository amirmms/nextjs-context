import { useContext } from "react";
import AuthContext from "../context/auth";

const Header = (props) => {
    const ctx = useContext(AuthContext);

    return <button onClick={ctx.onLogin}>update context</button>;
};

export default Header;
