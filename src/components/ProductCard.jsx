import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ title, category, thumbnail, price, id }) => {
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer text-center"
      onClick={() => navigate(`${id}`)}
    >
      <div className="w-80 m-auto rounded-md bg-gray-200 hover:opacity-75 lg:h-80">
        <img
          src={thumbnail}
          alt={title}
          title={"title"}
          className="h-[200px] w-full object-fit lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="flex flex-col justify-center flex-1 ">
          <h3 className="text-sm text-gray-700 line-clamp-1">{title}</h3>
          <p className="mt-1 text-sm text-gray-500 line-clamp-1">{category}</p>
        </div>
        <p className="mt-2 text-sm font-medium text-gray-900 px-2 me-8 rounded-md bg-orange-200 py-1">
          {price} $
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
