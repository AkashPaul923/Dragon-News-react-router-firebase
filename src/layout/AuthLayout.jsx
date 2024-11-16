import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";


const AuthLayout = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;