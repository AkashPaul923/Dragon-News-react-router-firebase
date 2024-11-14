import FindUs from "../FindUs";
import SocialLogIn from "../SocialLogIn";


const RightNavBar = () => {
    return (
        <div className="space-y-8">
            <SocialLogIn></SocialLogIn>
            <FindUs></FindUs>
        </div>
    );
};

export default RightNavBar;