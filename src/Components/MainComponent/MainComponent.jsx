import React from 'react';
import ShowFetchedData from '../ShowFetchedData';
import InputSearchData from '../InputSearchData';

const MainComponent = () => (
  <section className='search_container'>
    <InputSearchData />
    <ShowFetchedData />
  </section>
);

export default MainComponent;
