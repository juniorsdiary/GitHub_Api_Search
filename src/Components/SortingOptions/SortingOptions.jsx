import React from 'react';
import PropTypes from 'prop-types';
import { SortingUnit } from 'Components';

const SortingOptions = ({ changeSorting, sortingOptions, curSorting }) => {
  const renderSortOptions = sortingOptions.map((item, index) => <SortingUnit key={index} {...item} changeSorting={changeSorting} />);
  return (
    <details>
      <summary>Sort: {curSorting.sorting}</summary>
      <details-menu>
        <div>Sort options</div>
        <div>{renderSortOptions}</div>
      </details-menu>
    </details>
  );
};

SortingOptions.propTypes = {
  sortingOptions: PropTypes.array,
  curSorting: PropTypes.object,
  changeSorting: PropTypes.func,
};

export default SortingOptions;
