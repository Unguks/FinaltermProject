import { useState, useEffect } from 'react';

function useApiRequest(url, options = {}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);

  async function fetchData() {
    try {
      const response = await fetch(url, options);
      const responseData = await response.json();
      setData(responseData);
      setLoading(false);
      setResponse(response);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setLoading(true);
    fetchData();
  };

  return { data, loading, error, response, refetch };
}

export default useApiRequest;
