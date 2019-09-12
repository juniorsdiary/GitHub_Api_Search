export const devideNumber = total_count => {
  let devidedTotal = String(total_count).split('');

  let i_1 = 4;
  let i_2 = 7;

  if (devidedTotal.length >= 4) {
    let replaceV_1 = `${devidedTotal.splice(-i_1, 1)},`;

    devidedTotal.splice(-i_1 + 1, 0, replaceV_1);
  }
  if (devidedTotal.length >= 7) {
    let replaceV_2 = `${devidedTotal.splice(-i_2, 1)},`;

    devidedTotal.splice(-i_2 + 1, 0, replaceV_2);
  }

  return devidedTotal.join('');
};

export const convertTime = time => {
  let now = new Date(),
    lastUpdate = new Date(time),
    dif = now - lastUpdate;

  if (dif < 86400000) {
    return `${dif / 3600000 > 0 ? Math.ceil(dif / 3600000) + ' hours' : ''}${
      dif / 60000 > 0 && dif / 60000 < 60 ? Math.ceil(dif / 60000) + ' minutes' : ''
    }${dif / 1000 > 0 && dif / 1000 < 60 ? Math.ceil(dif / 1000) + ' seconds' : ''}`;
  } else if (dif > 86400000 && dif < 86400000 * 2) {
    return `yesterday`;
  } else if (dif < 86400000 * 30) {
    return `${Math.ceil(dif / 86400000)} days ago`;
  } else if (now.getFullYear() === lastUpdate.getFullYear()) {
    return `${lastUpdate.getDate()} ${lastUpdate.toLocaleString('en-US', {
      month: 'short',
    })}`;
  } else {
    return `${lastUpdate.getDate()} ${lastUpdate.toLocaleString('en-US', {
      month: 'short',
    })} ${lastUpdate.getFullYear()}`;
  }
};

export const definePageIndexes = (pages, perPage, curPage) => {
  let firstPages = pages > 1 ? [1, 2] : [];

  let lastPages = pages >= 5 ? [pages - 1, pages] : [];

  let middlePages = [];

  for (let pageInd = 3; pageInd <= (pages < 5 ? pages : pages - 2); pageInd++) {
    if (pages < 9) {
      middlePages.push(pageInd);
    } else if ((curPage < 4 && pageInd <= 5) || (curPage >= pages - 5 && pageInd >= pages - 4)) {
      middlePages.push(pageInd);
    } else if (curPage <= 6 && pageInd <= curPage + 2) {
      middlePages.push(pageInd);
    } else if (curPage > 6 && pageInd <= curPage + 2 && pageInd >= curPage - 2) {
      middlePages.push(pageInd);
    }
  }

  return [firstPages, middlePages, lastPages];
};

export function getWidth(size) {
  if (!size) return;
  let width = (size / 12) * 100;
  return `${width}%`;
}
