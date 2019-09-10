import { useLayoutEffect, useState, useRef } from 'react';

export const useTabSwitch = (activeTab, refs) => {
  const [values, setValue] = useState({ width: 0, position: 0 });
  let prevWidth = useRef(0);
  let curWidth = useRef(0);
  let activeTabHash = useRef(0);
  let check = refs.every(item => item.current);
  useLayoutEffect(() => {
    if (check) {
      let fullWidth = refs.map(item => item.current.getBoundingClientRect().width).reduce((a, b) => a + b);
      if (activeTab) {
        let value = refs
          .filter((item, index) => index < activeTab)
          .map(item => item.current.getBoundingClientRect().width)
          .reduce((a, b) => a + b);

        prevWidth.current = `${(value / fullWidth) * 100}%`;
        curWidth.current = `${(refs[activeTab].current.getBoundingClientRect().width / fullWidth) * 100}%`;
      } else {
        let rect = refs[activeTab].current.getBoundingClientRect();
        curWidth.current = `${(rect.width / fullWidth) * 100}%`;
        prevWidth.current = '0%';
      }
    }

    setValue(state => ({ position: prevWidth.current, width: curWidth.current }));
    activeTabHash.current = activeTab;
    /* eslint-disable */
  }, [activeTab, check]);
  /* eslint-enable */

  return values;
};
