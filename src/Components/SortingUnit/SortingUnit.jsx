import React from 'react';
import PropTypes from 'prop-types';

const SortingUnit = ({ sorting, order, cmd, changeSorting }) => {
  return (
    <div role='button' tabIndex='-1' onKeyPress={() => changeSorting({ sorting, order, cmd })} onClick={() => changeSorting({ sorting, order, cmd })}>
      {sorting}
    </div>
  );
};

SortingUnit.propTypes = {
  sorting: PropTypes.string,
  order: PropTypes.string,
  cmd: PropTypes.string,
  changeSorting: PropTypes.func,
};

export default SortingUnit;
