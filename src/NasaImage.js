// src/NasaImage.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function NasaImage() {
  const [nasaData, setNasaData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
        );
        setNasaData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="gray-background">
      <div className="container text-center mt-4">
        <h1 className="mb-4">NASA Astronomy Picture of the Day</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <img
              src={nasaData.url}
              alt={nasaData.title}
              className="img-fluid"
            />
            <p className="mt-4">{nasaData.title}</p>
            <p>{nasaData.explanation}</p>
          </>
        )}
        <footer className="mt-4">
          Made by Hutch
          <br />
          &copy; {new Date().getFullYear()} Hutch Macana
        </footer>
      </div>
    </div>
  );
}

export default NasaImage;
