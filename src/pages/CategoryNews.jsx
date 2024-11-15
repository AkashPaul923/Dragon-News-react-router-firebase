import { useLoaderData } from "react-router-dom";


const CategoryNews = () => {

    const data = useLoaderData()
console.log(data.data);
    return (
        <div>
            categoty :{data.data.length}
        </div>
    );
};

export default CategoryNews;