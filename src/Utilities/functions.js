export const devideNumber = total_count => {
  let defidedTotal = String(total_count).split('');

  let i_1 = 4;
  let i_2 = 7;

  if (defidedTotal.length >= 4) {
    let replaceV_1 = `${defidedTotal.splice(-i_1, 1)},`;

    defidedTotal.splice(-i_1 + 1, 0, replaceV_1);
  }
  if (defidedTotal.length >= 7) {
    let replaceV_2 = `${defidedTotal.splice(-i_2, 1)},`;

    defidedTotal.splice(-i_2 + 1, 0, replaceV_2);
  }

  return defidedTotal.join('');
};

export const convertLastUpadate = time => {
  let now = new Date(),
    lastUpdate = new Date(time),
    dif = now - lastUpdate;

  if (dif < 86400000) {
    return `Updated ${dif / 3600000 > 0 ? Math.ceil(dif / 3600000) + ' hours' : ''}${
      dif / 60000 > 0 && dif / 60000 < 60 ? Math.ceil(dif / 60000) + ' minutes' : ''
    }${dif / 1000 > 0 && dif / 1000 < 60 ? Math.ceil(dif / 1000) + ' seconds' : ''}`;
  } else if (dif > 86400000 && dif < 86400000 * 2) {
    return `Updated yesterday`;
  } else if (dif < 86400000 * 30) {
    return `Updated ${Math.ceil(dif / 86400000)} days ago`;
  } else if (now.getFullYear() === lastUpdate.getFullYear()) {
    return `Updated ${lastUpdate.getDate()} ${lastUpdate.toLocaleString('en-US', {
      month: 'short',
    })}`;
  } else {
    return `Updated ${lastUpdate.getDate()} ${lastUpdate.toLocaleString('en-US', {
      month: 'short',
    })} ${lastUpdate.getFullYear()}`;
  }
};

export const trimNumbers = number => {
  return number > 1000 ? (number / 1000).toFixed(0) + 'K' : number;
};
