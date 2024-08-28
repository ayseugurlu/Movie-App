import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const MovieDetail = () => {
  const { id } = useParams();

  const [filmdetail, setFilmDetail] = useState("");

  const [video, setVideo] = useState("");

  const {
    title,
    poster_path,
    overview,
    vote_average,
    release_date,
    vote_count,
  } = filmdetail;

  const API_KEY = process.env.REACT_APP_TMDB_KEY;

  const movieDetailUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;

  const baseImageUrl = "https://image.tmdb.org/t/p/w1280";

  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;

  console.log(videoUrl);
  const Image =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

  useEffect(() => {
    axios.get(movieDetailUrl).then((res) => setFilmDetail(res.data));

    axios.get(videoUrl).then((res) => setVideo(res.data.results[0]));
  }, [movieDetailUrl, videoUrl]);

  return (
    <div className="md:container px-10 mx-auto mt-16 lg:mt-10 py-5">
      <div className="md:container  flex justify-center px-10">
        <div className="flex flex-col lg:flex-row max-w-6xl rounded-lg bg-gray-100 dark:bg-slate-950 shadow-lg">
          <img
            className=" lg:w-1/3 lg:h-[600px] object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={poster_path ? baseImageUrl + poster_path : Image}
            alt="poster"
          />
          <div className="p-6 flex flex-col justify-between">
            <h1 className="text-center text-fuchsia-800 dark:text-fuchsia-700 text-3xl">{title}</h1>
            <div>
              <h5 className="text-gray-900 dark:text-gray-200 text-xl font-medium mb-2">
                Overview
              </h5>
              <p className="text-gray-700 dark:text-gray-300 text-base mb-4">
                {overview}
              </p>
            </div>

            <div className="fragman-container  md:container mb-7 px-10">
              <iframe
                title={title}
                width="100%"
                min-height="400px"
                allowFullScreen
                src={`https://www.youtube.com/embed/${video?.key}`}
              ></iframe>
            </div>

            <ul className="bg-gray-100 dark:bg-inherit rounded-lg border border-gray-400 text-gray-900 dark:text-slate-200">
              <li className="px-6 py-2 border-b border-gray-400 w-full rounded-t-lg">
                {"Release Date : " + release_date}
              </li>
              <li className="px-6 py-2 border-b border-gray-400 w-full">
                {"Rate : " + vote_average}
              </li>
              <li className="px-6 py-2 border-b border-gray-400 w-full">
                {"Total Vote : " + vote_count}
              </li>
              <li className="px-6 py-2 border-gray-400 bg-fuchsia-600 w-full rounded-b-lg text-center text-lg">
                <Link
                  to={-1}
                  className="text-slate-200 hover:text-slate-950  transition duration-300 ease-in-out mb-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-8  inline mx-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                    />
                  </svg>
                  
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
