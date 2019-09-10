import React from 'react';
import PropTypes from 'prop-types';
import { Text, Container, PageButton } from 'Modules';
import { connect } from 'react-redux';
import { changePerPageAmount } from 'Store';

const ChoosePerPageAmount = ({ curPerPageNum, changePage }) => {
  const renderPagesOptions = [10, 25, 50, 100].map(item => (
    <PageButton key={item} onClick={() => changePage(item)} active={curPerPageNum === item}>
      {item}
    </PageButton>
  ));
  return (
    <Container margin='0.7rem 0' row justify='center' align='center'>
      <Text padding='0 0.7rem' size='1.5rem' bold>
        Data per page:
      </Text>
      {renderPagesOptions}
    </Container>
  );
};

ChoosePerPageAmount.propTypes = {
  curPerPageNum: PropTypes.number,
  changePage: PropTypes.func,
};
const mapStateToProps = state => {
  return {
    curPerPageNum: state.appData.curPerPage,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changePage: number => {
      dispatch(changePerPageAmount(number));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChoosePerPageAmount);
