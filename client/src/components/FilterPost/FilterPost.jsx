import React, { useState } from "react";
import "./filterPost.scss";

const category = ["All", "Developer", "Design", "Financial", "Entertainment"];

const FilterPost = ({ posts, cate }) => {
  const [type, setType] = useState("All");
  const [filter, setFilter] = useState({});

  const handleFilter = (categories) => {
    setType(categories)
    setFilter({
      ...filter,
      categories
    })
  }
  console.log(type);
  console.log(filter);

  return (
    <div className="filterPost">
      <ul>
        {category.map((categories) => (
          <li
            key={categories}
            value={type}
            style={
              categories === type
                ? { color: "#000", backgroundColor: "#ddd" }
                : { color: "#5e5e5e" }
            }
            onClick={() => handleFilter(categories)}
          >
            {categories}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterPost;
