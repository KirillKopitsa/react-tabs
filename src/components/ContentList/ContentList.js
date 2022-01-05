import React from 'react';
import * as PropTypes from 'prop-types';

import { StyledWrapper as Wrapper } from './ContentList.styled';

const ContentList = ({ loading, data }) => {
  return (
    <Wrapper>
      {!loading && (
        <ol>
          {data.map(({ webTitle, webUrl }) => (
            <li key={webUrl}>
              <a href={webUrl} target="_blank" rel="noreferrer">
                {webTitle}
              </a>
            </li>
          ))}
        </ol>
      )}
      {loading && <div className="loader">Loading...</div>}
    </Wrapper>
  );
};

ContentList.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      webUrl: PropTypes.string.isRequired,
      webTitle: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export { ContentList };
