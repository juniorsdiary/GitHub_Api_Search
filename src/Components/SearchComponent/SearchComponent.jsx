import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchUsersData, setSearchValue, fetchReposData } from 'Store';
import { FormContainer, InputField, Button } from 'Modules';

const SearchComponent = ({ fetchUsers, fetchRepos, perPageNum, setSearchValue }) => {
  const [searchValue, setValue] = useState('');

  const submitSearch = e => {
    e.preventDefault();
    setSearchValue(searchValue);
    fetchUsers(searchValue, 1, perPageNum, 'Best Match', 'desc', '');
    fetchRepos(searchValue, 1, perPageNum, 'Best Match', 'desc', '');
  };

  const setInputValue = useCallback(e => {
    setValue(e.target.value);
  }, []);

  return (
    <FormContainer onSubmit={submitSearch}>
      <InputField type='text' id='search_input' value={searchValue} onChange={setInputValue} />
      <Button type='submit' id='submit_search'>
        Search
      </Button>
    </FormContainer>
  );
};

SearchComponent.propTypes = {
  fetchUsers: PropTypes.func,
  fetchRepos: PropTypes.func,
  perPageNum: PropTypes.number,
  setSearchValue: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    perPageNum: state.appData.curPerPage,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: (searchValue, pageInd, perPageNum, sorting, order, cmd) => {
      dispatch(fetchUsersData(searchValue, pageInd, perPageNum, sorting, order, cmd));
    },
    fetchRepos: (searchValue, pageInd, perPageNum, sorting, order, cmd) => {
      dispatch(fetchReposData(searchValue, pageInd, perPageNum, sorting, order, cmd));
    },
    setSearchValue: value => {
      dispatch(setSearchValue(value));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchComponent);
