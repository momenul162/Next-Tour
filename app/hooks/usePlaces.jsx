"use client";

import { useEffect, useState } from "react";

export default function usePlaces() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your API endpoint
    fetch("/tourist.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []); // Empty array ensures the effect runs only once

  return {
    data,
    error,
  };
}
