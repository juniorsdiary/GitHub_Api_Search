import React from 'react';
import PropTypes from 'prop-types';
import { Container, InputField } from 'Modules';

const SortingOptions = ({ changeSorting, sortingOptions, curSorting }) => {
  const renderSortOptions = sortingOptions.map((item, index) => (
    <option key={index} value={`${item.order} ${item.cmd}`}>
      {item.sorting}
    </option>
  ));
  return (
    <Container row align='center'>
      <label htmlFor='sort_opt'>Sort: </label>
      <InputField as='select' name='sort_opt' id='sort_opt' onChange={e => changeSorting(e.target.value)}>
        {renderSortOptions}
      </InputField>
    </Container>
  );
};

SortingOptions.propTypes = {
  sortingOptions: PropTypes.array,
  curSorting: PropTypes.object,
  changeSorting: PropTypes.func,
};

export default SortingOptions;
