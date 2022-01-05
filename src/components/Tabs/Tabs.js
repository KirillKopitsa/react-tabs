import React, { useCallback, useMemo } from 'react';
import * as PropTypes from 'prop-types';
import clsx from 'clsx';

import { StyledWrapper as Wrapper } from './Tabs.styled';

const Tabs = ({ activeTabKey, options, onSelectTab }) => {
  const activeContent = useMemo(() => options.find(({ tabKey }) => tabKey === activeTabKey)?.content, [activeTabKey, options]);

  const getOnSelectTabHandler = useCallback((tabKey) => () => {
    onSelectTab && onSelectTab(tabKey);
  }, [onSelectTab]);

  return (
    <Wrapper>
      <div className="tabs">
        {options.map(({ tabKey, tabLabel }) => (
          <div
            key={tabKey}
            className={clsx('tab', { active: tabKey === activeTabKey })}
            onClick={getOnSelectTabHandler(tabKey)}
          >
            <span>{tabLabel}</span>
          </div>
        ))}
      </div>
      <div className="content">
        {activeContent}
      </div>
    </Wrapper>
  );
};

Tabs.propTypes = {
  activeTabKey: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      tabKey: PropTypes.string.isRequired,
      tabLabel: PropTypes.string.isRequired,
      content: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
      ]),
    }).isRequired
  ),
  onSelectTab: PropTypes.func,
};

Tabs.defaultProps = {
  onSelectTab: () => {},
};

export { Tabs };
