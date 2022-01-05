import styled from 'styled-components';

export const StyledWrapper = styled.div`
  ol {
    padding-left: 40px;
    list-style-type: decimal;

    li {
      padding-top: 10px;
      padding-bottom: 10px;

      a {
        text-decoration: none;
        color: #181818;
        cursor: pointer;
      }

      &:hover {
        opacity: 0.5;
      }
    }
  }

  .loader {
    display: flex;
    justify-content: center;
  }
`;
