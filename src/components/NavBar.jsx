import { Link } from "react-router-dom";
import userImg from "../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const NavBar = () => {
    const { user , handleSignOut } = useContext( AuthContext )
    // console.log(user);
    return (
        <div className="flex justify-between items-center">
            <div>{user && <p className="font-bold text-xl">{user.displayName}</p>}</div>
            <div className="space-x-3 md:space-x-10 text-lg">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/career">Career</Link>
            </div>
            <div className="flex items-center gap-3">
                <img className="rounded-full object-cover w-14 h-14" src={user? user?.photoURL : userImg} alt="" />
                {
                    !user ? 
                    <Link to="/auth/login" className="btn btn-neutral rounded-none text-xl font-semibold md:px-10">Login</Link> 
                    : <button onClick={handleSignOut} className="btn btn-neutral rounded-none text-xl font-semibold md:px-10">Log Out</button>
                }
            </div>
        </div>
    );
};

export default NavBar;