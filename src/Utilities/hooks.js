import { useEffect, useState } from 'react';
import axios from 'axios';
import { AUTH, API_BASE } from './constants';
const useFetch = (type, name, subject) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = `${API_BASE}/${type}/${name}/${subject}`;
    const fetchData = async () => await axios({ method: 'get', url, headers: { Authorization: `token ${AUTH}` } }).then(data => setData(data.data));
    if (name) {
      fetchData();
    }
  }, [type, subject, name]);
  return data;
};

export default useFetch;
