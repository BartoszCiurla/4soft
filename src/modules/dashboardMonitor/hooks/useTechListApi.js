import { useState } from 'react';

export function UseTechListAPI() {
  const [loading, setLoading] = useState(false);

  const fetchList = async () => {
    setLoading(true);
    return await fetch('https://api.recruitment.4soft.tech/list')
      .then((response) => response.json())
      .catch((e) => {
        setLoading(false);
      })
      .finally(() => setLoading(false));
  };

  const fetchListDetails = async (id) => {
    setLoading(true);
    return await fetch(`https://api.recruitment.4soft.tech/details/${id}`)
      .then((response) => response.json())
      .catch((e) => {
        setLoading(false);
      })
      .finally(() => setLoading(false));
  };

  return [fetchList, fetchListDetails, loading];
}
