import React from "react";
import { AiOutlineEye } from "react-icons/ai"; // For view icon
import { AiFillStar, AiOutlineStar } from "react-icons/ai"; // For star icon

const NewsCard = ({ news }) => {

    const filledStars = Math.floor(news.rating.number); // Integer part of the rating
    const hasHalfStar = news.rating.number % 1 !== 0; // If there is a decimal part, show a half star
    const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-full mx-auto my-5">
      {/* Author and Date */}
      <div className="flex items-center mb-4">
        <img
          src={news.author.img}
          alt={news.author.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h4 className="text-sm font-semibold">{news.author.name}</h4>
          <p className="text-xs text-gray-500">{new Date(news.author.published_date).toLocaleDateString()}</p>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg lg:text-xl font-bold mb-2">{news.title}</h2>

      {/* Thumbnail */}
      <img
        src={news.thumbnail_url}
        alt={news.title}
        className="w-full h-[200px] lg:h-[300px] object-cover rounded-lg mb-4"
      />

      {/* Description */}
      <p className=" text-gray-700 mb-4">
        {news.details.slice(0, 150)}... <br/>
        <button className="text-yellow-600 font-semibold cursor-pointer">Read More</button>
      </p>

      {/* Footer with rating and views */}
      <div className="flex justify-between items-center text-gray-500 text-sm">
        {/* Rating */}
        <div className="flex items-center">
          {/* Filled Stars */}
          {Array(filledStars).fill(<AiFillStar className="text-yellow-500" />)}
          
          {/* Half Star (optional) */}
          {hasHalfStar && <AiFillStar className="text-yellow-500" style={{ opacity: 0.5 }} />}
          
          {/* Empty Stars */}
          {Array(emptyStars).fill(<AiOutlineStar className="text-yellow-500" />)}

          <span className="ml-2">{news.rating.number}</span>
          <span className="ml-1 text-xs">({news.rating.badge})</span>
        </div>

        {/* Views */}
        <div className="flex items-center">
          <AiOutlineEye className="mr-1" />
          <span>{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
