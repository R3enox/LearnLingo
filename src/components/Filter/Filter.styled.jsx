import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 18px;
  align-items: end;
  margin-bottom: 50px;

  .search-wrapper {
    position: static;
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  .label-wrapper {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .lang-wrapper {
    width: 244px;
  }

  .price-wrapper {
    width: 125px;
  }

  label {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.29;
    margin-bottom: 8px;
    color: #8a8a89;
  }

  select {
    position: relative;
    padding: 14px 18px;
    appearance: none;
    cursor: pointer;
    background-color: #fff;
    border: none;
    border-radius: 14px;
    outline: none;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.11;
  }

  .btn-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
  }

  .sbmt-btn,
  .rest-btn {
    font-weight: 700;
    font-size: 18px;
    line-height: 1.56;
    color: #121417;
    border: none;
    border-radius: 12px;
    min-width: 136px;
    padding: 10px 44px;
    background-color: #f4c550;
  }

  .rest-btn[disabled] {
    opacity: 0.5;
    cursor: auto;
  }

  .sbmt-btn,
  .rest-btn {
    transition: background-color 250ms cubic-bezier(0, 0.91, 1, 0.56);
  }

  .sbmt-btn:hover,
  .rest-btn:hover,
  .sbmt-btn:focus,
  .rest-btn:focus {
    background-color: #ffdc86;
  }

  option {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.11;
    color: rgba(18, 20, 23, 0.2);
    padding: 8px;
  }

  option:checked {
    color: #121417;
  }

  select::-webkit-scrollbar-thumb {
    background-color: rgba(18, 20, 23, 0.05);
    border-radius: 6px;
  }

  .icon-chevron {
    pointer-events: none;
    stroke: black;
    fill: transparent;
    width: 20px;
    height: 20px;
    transition: transform 250ms cubic-bezier(0, 0.91, 1, 0.56);
  }
`;

export const Wrapper = styled.div`
  .btn-wrapper {
    position: absolute;
    bottom: 12px;
    right: 18px;
    background-color: transparent;
    border: none;
  }
  .icon-chevron {
    pointer-events: none;
    stroke: black;
    fill: transparent;
    width: 20px;
    height: 20px;
  }

  .lang-chevron,
  .btn-wrapper,
  .price-chevron,
  .level-chevron {
    transition: transform 250ms cubic-bezier(0, 0.91, 1, 0.56);
  }

  .lang-chevron {
    transform: ${(prop) => (prop.$languageClick ? 'none' : 'rotate(180deg)')};
  }

  .price-chevron {
    transform: ${(prop) => (prop.$priceClick ? 'none' : 'rotate(180deg)')};
  }
  .level-chevron {
    transform: ${(prop) => (prop.$levelClick ? 'none' : 'rotate(180deg)')};
  }
`;
