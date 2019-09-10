import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { TotalResults } from 'Components';
import axios from 'axios';
import { constants } from 'Utilities';

const TabContent = ({ active, search, total, MapComponent }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let isMounted = true;
    const url = `${constants.API_BASE}/${search}`;
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const fetchData = async () =>
      await axios({ method: 'get', url, headers: { Authorization: `token ${constants.AUTH}` } }, { cancelToken: source.token }).then(({ data }) => {
        if (isMounted) {
          setData(data);
        }
      });
    if (search) {
      fetchData();
    }
    return () => {
      isMounted = false;
    };
  }, [search]);

  return (
    <>
      {active && (
        <>
          {!!total && <TotalResults total={total} />}
          {data.map(item => (
            <MapComponent key={item.id} {...item} />
          ))}
        </>
      )}
    </>
  );
};

TabContent.propTypes = {
  active: PropTypes.bool,
  search: PropTypes.string,
  total: PropTypes.number,
  MapComponent: PropTypes.elementType,
};

export default TabContent;
