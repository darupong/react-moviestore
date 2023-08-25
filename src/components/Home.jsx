/* eslint-disable no-unused-vars */
// Home.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Input } from "antd";
import MovieCard from "./MovieCard";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    handleSearch(searchQuery || "a");
  }, []);

  const handleSearch = async (value) => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/search/movie",
        {
          params: {
            api_key: "f7244dc14b7c74fef7cf464588ed50c9",
            query: value,
          },
        }
      );

      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <Input.Search
        placeholder="Search movies..."
        defaultValue={searchQuery}
        onSearch={handleSearch}
        enterButton
      />
      <Row gutter={[16, 16]}>
        {movies.map((movie) => (
          <Col key={movie.id} xs={24} sm={12} md={8} lg={6}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
