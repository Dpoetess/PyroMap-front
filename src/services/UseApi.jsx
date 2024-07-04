import { useState, useEffect } from 'react';
import axios from 'axios';
import Papa from 'papaparse';

const useAPI = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const parsedData = Papa.parse(response.data, { header: true }).data;
        setData(parsedData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useAPI;