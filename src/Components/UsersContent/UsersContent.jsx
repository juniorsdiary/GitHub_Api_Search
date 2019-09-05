import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { UserCard, Filters } from 'Components';
import { Container } from 'Modules';

// import FetchedResults from './FetchedResults';
// import Pagination from './Pagination';

const UsersContent = ({ searchValue, activeTab, data }) => {
  const renderData = data.map(user => <UserCard key={user.id} {...user} />);
  return (
    <>
      {activeTab === 'users' && (
        <Container maxWidth='lg' column>
          <Container>
            <Filters />
            {/* <OverallResults /> */}
          </Container>
          {renderData}
          {/* {apiData.total_count > curPerPage ? <Pagination /> : null} */}
        </Container>
      )}
    </>
  );
};
// fetched_data_results
// users_output_block
UsersContent.propTypes = {
  searchValue: PropTypes.string,
  activeTab: PropTypes.string,
  data: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    data: state.usersData.apidata,
    searchValue: state.appData.curSearchValue,
    activeTab: state.appData.activeTab,
  };
};

export default connect(mapStateToProps)(UsersContent);
