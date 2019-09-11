import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchUsersData, setSearchValue, fetchReposData } from 'Store';
import { Container, InputField, Button } from 'Modules';

const SearchComponent = ({ fetchUsers, fetchRepos, perPageNum, setSearchValue, usersSorting, reposSorting }) => {
  const [searchValue, setValue] = useState('');
  const [invalidValue, setValidation] = useState(false);

  /* eslint-disable */
  const submitSearch = useCallback(
    e => {
      e.preventDefault();
      if (searchValue) {
        setSearchValue(searchValue);
        fetchUsers(searchValue, 1, perPageNum, usersSorting);
        fetchRepos(searchValue, 1, perPageNum, reposSorting);
        setValidation(false);
      } else {
        setValidation(true);
      }
    },
    [fetchRepos, fetchUsers, perPageNum, searchValue, setSearchValue]
  );
  /* eslint-enable */

  const setInputValue = useCallback(e => {
    setValue(e.target.value);
  }, []);

  return (
    <Container xs='6' sm='4' md='2' as='form' justify='center' align='center' onSubmit={submitSearch}>
      <InputField
        error={invalidValue}
        type='text'
        id='search_input'
        value={searchValue}
        onFocus={() => setValidation(false)}
        onChange={setInputValue}
      />
      <Button type='submit' id='submit_search'>
        Search
      </Button>
    </Container>
  );
};

SearchComponent.propTypes = {
  fetchUsers: PropTypes.func,
  fetchRepos: PropTypes.func,
  perPageNum: PropTypes.number,
  setSearchValue: PropTypes.func,
  usersSorting: PropTypes.object,
  reposSorting: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    perPageNum: state.appData.curPerPage,
    usersSorting: state.usersData.curSorting,
    reposSorting: state.reposData.curSorting,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: (searchValue, pageInd, perPageNum, sorting) => {
      dispatch(fetchUsersData(searchValue, pageInd, perPageNum, sorting));
    },
    fetchRepos: (searchValue, pageInd, perPageNum, sorting) => {
      dispatch(fetchReposData(searchValue, pageInd, perPageNum, sorting));
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
