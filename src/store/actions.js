// export const fetchAll = (apiArr, searchValue, pageInd, perPageNum, sortingOpts) => dispatch => {
//   let options = `&page=${pageInd}&per_page=${perPageNum}&sort=${sortingOpts.cmd}&order=${sortingOpts.order}`;
//
//   let cbs = apiArr.map(item => fetch(`${item.url_name}${searchValue}${options}`).then(res => res.json()));
//
//   Promise.all(cbs).then(data =>
//     data.forEach((item, i) => {
//       dispatch({
//         type: FETCH_DATA,
//         apidata: item,
//         url_name: apiArr[i].url_name,
//         searchValue,
//         pageInd,
//         perPageNum,
//         sortName: sortingOpts.sortName,
//         order: sortingOpts.order,
//         cmd: sortingOpts.cmd,
//       });
//     })
//   );
// };
