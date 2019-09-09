import React from 'react';
import PropTypes from 'prop-types';
import { definePageIndexes } from 'Utilities';
import { Container, PageButton } from 'Modules';

const Pagination = ({ total, perPage, curPage, changePage }) => {
  let pages = total / perPage > 100 ? 100 : Math.ceil(total / perPage);
  const [firstPages, middlePages, lastPages] = definePageIndexes(pages, perPage, curPage);

  const rederFirstPages = firstPages.map(i => (
    <PageButton key={i} active={curPage === i} onClick={() => changePage(i)}>
      {i}
    </PageButton>
  ));
  const rederLastPages = lastPages.map(i => (
    <PageButton key={i} active={curPage === i} onClick={() => changePage(i)}>
      {i}
    </PageButton>
  ));
  const renderMiddlePages = middlePages.map(i => (
    <PageButton key={i} active={curPage === i} onClick={() => changePage(i)}>
      {i}
    </PageButton>
  ));
  return (
    <>
      {pages > 2 && (
        <Container row justify='center'>
          <PageButton onClick={() => changePage(curPage - 1)} disabled={curPage === 1}>
            Previous
          </PageButton>
          {rederFirstPages}
          {curPage >= 7 && <PageButton disabled>...</PageButton>}
          {renderMiddlePages}
          {curPage <= pages - 6 && pages > 8 && <PageButton disabled>...</PageButton>}
          {pages > 4 ? rederLastPages : null}
          <PageButton onClick={() => changePage(curPage + 1)} disabled={curPage === pages - 1}>
            Next
          </PageButton>
        </Container>
      )}
    </>
  );
};

Pagination.propTypes = {
  total: PropTypes.number,
  perPage: PropTypes.number,
  curPage: PropTypes.number,
  changePage: PropTypes.func,
};

export default Pagination;
