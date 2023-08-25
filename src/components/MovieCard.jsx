/* eslint-disable react/prop-types */
// MovieCard.jsx
import React from "react";
import { Card } from "antd";

const MovieCard = ({ movie }) => {
  const { title, overview, poster_path } = movie;

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
      <Card.Meta title={title} description={overview} />
    </Card>
  );
};

export default MovieCard;
