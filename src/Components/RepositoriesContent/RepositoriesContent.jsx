import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import FetchedResults from './FetchedResults';
// import Pagination from './Pagination';
// import RepoUnit from './RepoUnit';

const RepositoriesContent = ({ searchValue, activeTab, data }) => {
  return <>{activeTab === 'repos' && <div>repos</div>}</>;
};

RepositoriesContent.propTypes = {
  searchValue: PropTypes.string,
  activeTab: PropTypes.string,
  data: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    data: state.reposData.apidata,
    searchValue: state.appData.curSearchValue,
    activeTab: state.appData.activeTab,
  };
};

export default connect(mapStateToProps)(RepositoriesContent);

// const RepositoriesContent = ({ apiData, curPerPage }) => {
//   let renderData = apiData.items.map((repo, id) => {
//     return (
//       <RepoUnit
//         key={id}
//         id={repo.id}
//         url={repo.html_url}
//         name={repo.full_name}
//         description={repo.description}
//         license={repo.license}
//         updated={repo.updated_at}
//         language={repo.language}
//         stars={repo.stargazers_count}
//       />
//     );
//   });
//
//   return (
//     <div className='fetched_data_results'>
//       <FetchedResults />
//       <div className='repos_output_block'>{renderData}</div>
//       {apiData.total_count > curPerPage ? <Pagination /> : null}
//     </div>
//   );
// };
//
// RepositoriesContent.propTypes = {
//   apiData: PropTypes.object,
//   curPerPage: PropTypes.number,
// };
//
// const mapStateToProps = state => {
//   return {
//     apiData: state.availabelAPI.filter(item => item.active)[0].apidata,
//     curPerPage: state.curPerPage,
//   };
// };
