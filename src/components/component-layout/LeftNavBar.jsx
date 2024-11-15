import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-5">All Category</h2>
      <div className="flex flex-wrap md:flex-col gap-4">
        {categories.map((category) => (
          <NavLink to={`/category/${category.category_id}`}
            className="btn lg:justify-start lg:pl-10"
            key={category.category_id}
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNavBar;

// category_id
// :
// "08"
// category_name
// :
// "All News"
