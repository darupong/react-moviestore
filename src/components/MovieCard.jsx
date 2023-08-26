/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Card, Checkbox } from "antd";

const MovieCard = ({ movie, onSelect, clearlist }) => {
  const { title, poster_path, overview } = movie;
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const storeCheckbox = localStorage.getItem(`checkbox-${movie.id}`);
    if (storeCheckbox) {
      setIsChecked(JSON.parse(storeCheckbox));
    } else {
      return clearlist();
    }
  }, [movie.id]);

  const handleCheckboxChange = (event) => {
    const newCheckboxState = event.target.checked;
    setIsChecked(newCheckboxState);

    localStorage.setItem(
      `checkbox-${movie.id}`,
      JSON.stringify(newCheckboxState)
    );

    onSelect(movie, newCheckboxState);
  };

  return (
    <Card
      hoverable
      cover={
        <img
          alt={title}
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          className="w-full h-[450px] object-cover object-center"
        />
      }
    >
      <Card.Meta title={title} />
      <p className="line-clamp-4 text-left text-gray-500 pt-4">{overview}</p>
      <div className="flex flex-row justify-start pt-4">
        <Checkbox
          checked={isChecked}
          clearlist={setIsChecked}
          onChange={handleCheckboxChange}
        />
        <p className="pl-2">Add to Cart</p>
      </div>
    </Card>
  );
};

export default MovieCard;
