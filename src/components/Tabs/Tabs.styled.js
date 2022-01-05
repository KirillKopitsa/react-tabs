import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 5px;

  background-color: #DBDBDB;

  .tabs {
    display: flex;
    justify-content: flex-start;

    width: 100%;

    .tab {
      display: flex;
      justify-content: center;
      flex-grow: 1;

      font-style: normal;
      font-size: 28px;
      font-weight: 400;
      line-height: 42px;
      letter-spacing: 0px;
      color: #181818;

      cursor: pointer;

      &.active {
        background-color: #FFFFFF;
        font-weight: bold;
      }
    }
  }

  .content {
    width: 100%;
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: #FFFFFF;
  }
`;
