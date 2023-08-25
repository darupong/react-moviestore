/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Card, Checkbox } from "antd";

const MovieCard = ({ movie, onSelect, clearlist }) => {
  const { title, poster_path } = movie;
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
        />
      }
    >
      <Card.Meta title={title} />
      <Checkbox
        checked={isChecked}
        clearlist={setIsChecked}
        onChange={handleCheckboxChange}
      />
    </Card>
  );
};

export default MovieCard;
