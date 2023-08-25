/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Input, Button } from "antd";
import MovieCard from "./MovieCard";
import Navbar from "./layout/Navbar";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [drawerVisible, setDrawerVisible] = useState(false);

  useEffect(() => {
    const storedSelectedMovies = localStorage.getItem("selectedMovies");
    if (storedSelectedMovies) {
      setSelectedMovies(JSON.parse(storedSelectedMovies));
    }
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

  const handleSelectMovie = (movie, isChecked) => {
    let updatedSelectedMovies;

    if (isChecked) {
      updatedSelectedMovies = [...selectedMovies, movie];
    } else {
      updatedSelectedMovies = selectedMovies.filter(
        (selectedMovie) => selectedMovie.id !== movie.id
      );
    }

    setSelectedMovies(updatedSelectedMovies);
    localStorage.setItem(
      "selectedMovies",
      JSON.stringify(updatedSelectedMovies)
    );
  };

  const clearCart = () => {
    setSelectedMovies([]);
    localStorage.setItem("selectedMovies", JSON.stringify([]));
    const updatedMovies = movies.map((movie) => {
      const updatedMovie = { ...movie, isChecked: false };
      localStorage.setItem(`checkbox-${movie.id}`, JSON.stringify(false));
      return updatedMovie;
    });

    setMovies(updatedMovies);
  };

  //console.log("this is selectedMv =>", selectedMovies);
  //console.log("this is mv =>", movies);

  return (
    <div className="p-10">
      <Input.Search
        placeholder="Search movies..."
        onSearch={handleSearch}
        enterButton
      />
      <Row gutter={[16, 16]}>
        {movies.map((movie) => (
          <Col key={movie.id} xs={24} sm={12} md={8} lg={6}>
            <MovieCard
              movie={movie}
              onSelect={handleSelectMovie}
              clearlist={clearCart}
            />
          </Col>
        ))}
      </Row>
      <Navbar selectedMovies={selectedMovies} clearCart={clearCart} />
    </div>
  );
};

export default Home;
