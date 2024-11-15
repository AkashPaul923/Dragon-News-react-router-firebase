import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";


const CategoryNews = () => {

    const {data} = useLoaderData()

    return (
        <div>
            <h3  className="text-xl font-semibold mb-5">Dragon News Home</h3>
            <p>{data.length} news found in this category</p>
            <div>
                {
                    data.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;