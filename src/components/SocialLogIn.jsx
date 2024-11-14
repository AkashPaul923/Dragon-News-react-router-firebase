import { FaGithub, FaGoogle } from "react-icons/fa";


const SocialLogIn = () => {
    return (
      <div>
        <h2 className="text-xl font-semibold mb-5">Login With</h2>
        <div className="flex flex-col gap-3">
          <button className="btn md:text-[10px] lg:text-sm">
            <FaGoogle></FaGoogle> Login With Google
          </button>
          <button className="btn md:text-[10px] lg:text-sm">
            <FaGithub></FaGithub> Login with Github
          </button>
        </div>
      </div>
    );
};

export default SocialLogIn;