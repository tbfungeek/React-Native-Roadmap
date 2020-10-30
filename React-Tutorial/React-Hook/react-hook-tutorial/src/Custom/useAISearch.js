import { useEffect, useState } from "react";
import Axios from "axios";

export function useAISearch(query) {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios(
        "https://hn.algolia.com/api/v1/search?query=" + query
      );
      setData(result.data);
    };

    fetchData();
  }, [query]);

  return [data];
}
