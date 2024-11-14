import moment from "moment";
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 my-8">
        <div>
            <img src={logo} alt="" />
        </div>
        <p className="text-lg text-gray-500">Journalism Without Fear or Favour</p>
        <p className="text-xl font-medium text-gray-600">{moment().format('dddd, MMMM Do YYYY')}</p>
    </div>
  );
};

export default Header;
