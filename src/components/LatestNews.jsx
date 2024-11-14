import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className="flex gap-4 items-center max-w-6xl mx-auto bg-base-200 p-4">
            <p className="bg-[#D72050] text-white text-xl font-medium py-2 px-6">Latest</p>
            <Marquee pauseOnHover="true" className="text-lg font-semibold">
                <Link className="mr-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit.  </Link>
                <Link className="mr-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit.  </Link>
                <Link className="mr-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit.  </Link>
                <Link className="mr-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit.  </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;