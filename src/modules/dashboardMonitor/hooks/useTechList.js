import { useState, useEffect } from 'react';
import { UseTechListAPI } from './useTechListApi';

export function UseTechList() {
  const [techList, setTechList] = useState([]);
  const [fetchList, fetchListDetails] = UseTechListAPI();
  useEffect(() => {
    async function fetchData() {
      const data = await fetchList();
      console.log('data', data);
      setTechList(data);
    }
    fetchData();
  }, []);

  const fetchDetails = async (id) => {
    const data = await fetchListDetails(id);
    setTechList((curr) =>
      curr.map((item) => (item.id !== id ? item : { ...item, details: data }))
    );
  };

  return [techList, fetchDetails];
}
