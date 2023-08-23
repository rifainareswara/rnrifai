"use client";
import axios from "axios";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import url from "./../../node_modules/axios/lib/platform/node/classes/URLSearchParams";

// const apiKeyNewsApi = "f31c177f2442429c92757cfed2a8f3e1";

type Article = {
  title: string;
  urlToImage: string;
  url: string;
};

export default function News() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // function get berita terbaru
    const getBreakingNews = async () => {
      //  set loading true
      setIsLoading(true);
      try {
        // variable url
        const url =
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=f31c177f2442429c92757cfed2a8f3e1";
        // menunggu response
        const response = await axios.get(url);
        console.log(response.data);

        // set articles dari response
        setArticles(response.data.articles);
      } catch (error) {
        // jika errror
        console.log(error);
      } finally {
        // set loading false setelah response
        setIsLoading(false);
      }
    };

    // pemanggilan
    getBreakingNews();

    return () => {};
  }, []);

  if (isLoading) {
    return <h1 className="font-bold text-2xl text-center">Loading...</h1>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:m-10">
      {articles.length > 0 &&
        articles.map((article, index) => (
          <div key={index} className="bg-white p-4 shadow-md rounded-lg">
            <img
              src={article?.urlToImage}
              alt="image"
              className="w-full h-[250px] mb-2"
            />
            <a href={article?.url} target="_blank">
              <p className="text-base font-semibold">{article?.title}</p>
            </a>
          </div>
        ))}
    </div>
  );
}
