import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // const options = {
  //   method: "GET",
  //   url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  //   headers: {
  //     "X-RapidAPI-Key": '',
  //     "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  //   },
  //   params: { ...query },
  // const axios = require('axios');

const options = {
  method: 'GET',
  url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  headers: {
    'X-RapidAPI-Key': 'fea86fa18emsh83ca37e19c38a51p1736edjsn0ca06451e395',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  },
  params: {...query },
};

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
