import React, { useCallback, useState, useMemo } from 'react';

import { useFetch } from '../../hooks';
import { SECTION_KEYS, SECTION_OPTIONS } from '../../constants/sections';
import { UrlUtils } from '../../utils/UrlUtils';

import { Tabs } from '../../components/Tabs';
import { ContentList } from '../../components/ContentList';
import { StyledWrapper as Wrapper } from './App.styled';

const App = () => {
  const [activeSection, setActiveSection] = useState(SECTION_KEYS.ukNews);
  const url = useMemo(() => UrlUtils.generateSearchAPIUrlBySection(activeSection), [activeSection]);
  const { data, loading } = useFetch(url);

  const preparedData = useMemo(() => data.map(({ webUrl, webTitle }) => ({ webUrl, webTitle })), [data]);

  const options = useMemo(() => {
    return SECTION_OPTIONS.map(({ key, label }) => {
      return {
        tabKey: key,
        tabLabel: label,
        content: key === activeSection ? <ContentList loading={loading} data={preparedData} /> : null,
      };
    });
  }, [activeSection, preparedData, loading]);

  const onSelectTabHandler = useCallback((tabKey) => {
    setActiveSection(tabKey);
  }, [setActiveSection]);

  return (
    <Wrapper>
      <Tabs
        activeTabKey={activeSection}
        options={options}
        onSelectTab={onSelectTabHandler}
      />
    </Wrapper>
  );
};

export { App };
