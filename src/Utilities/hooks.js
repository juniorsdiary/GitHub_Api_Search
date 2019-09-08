import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { AUTH, API_BASE } from './constants';

export const useFetch = (type, name, subject) => {
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

export const useTabSwitch = (activeTab, refs) => {
  const [values, setValue] = useState({ width: 0, position: 0 });
  let prevWidth = useRef(0);
  let curWidth = useRef(0);
  let activeTabHash = useRef(0);
  let check = refs.every(item => item.current);
  let curElem,
    value = 0;
  if (check) {
    curElem = refs[activeTab].current;
    refs.forEach((item, index) => (index < activeTab ? (value += item.current.getBoundingClientRect().width) : (value += 0)));
  }

  useEffect(() => {
    if (check) {
      prevWidth.current = value.toFixed(2);
      curWidth.current = curElem.getBoundingClientRect().width;
    }
    if (check && !activeTab) {
      let rect = curElem.getBoundingClientRect();
      curWidth.current = rect.width;
      prevWidth.current = 0;
    }

    setValue(state => ({ position: prevWidth.current, width: curWidth.current }));
    activeTabHash.current = activeTab;
  }, [activeTab, check, curElem, value]);

  return values;
};
