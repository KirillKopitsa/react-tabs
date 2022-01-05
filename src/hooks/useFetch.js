import { useCallback, useState, useEffect } from 'react';

import { APIService } from '../services/APIService';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [refetching, setRefetching] = useState(false);

  const fetchData = useCallback(async (url) => {
    setLoading(true);

    const result = await APIService.get(url);

    if (result?.status) {
      setError(result);
    } else {
      setData(result);
    }

    setLoading(false);
    setRefetching(false);
  }, [setData, setError]);

  const refetch = useCallback(() => {
    setRefetching(true);
  }, [setRefetching]);

  useEffect(() => {
    fetchData(url);
  }, [fetchData, url]);

  useEffect(() => {
    if (refetching && !loading) {
      fetchData(url);
    }
  }, [fetchData, url, refetching, loading]);

  return {
    data,
    error,
    loading,
    refetch,
  };
};

export { useFetch };
