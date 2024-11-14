import { Link } from "react-router-dom";
import userImg from "../assets/user.png"

const NavBar = () => {
    return (
        <div className="flex justify-between items-center">
            <div></div>
            <div className="space-x-3 md:space-x-10 text-lg">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/career">Career</Link>
            </div>
            <div className="flex items-center gap-3">
                <img src={userImg} alt="" />
                <button className="btn btn-neutral rounded-none text-xl font-semibold md:px-10">Login</button>
            </div>
        </div>
    );
};

export default NavBar;