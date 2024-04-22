import styled from 'styled-components';

export const Body = styled.div`
  .title {
    font-weight: 500;
    font-size: 40px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    margin-bottom: 20px;
  }

  .desc {
    font-size: 16px;
    line-height: 1.37;
    color: rgba(18, 20, 23, 0.8);
    margin-bottom: 40px;
  }

  .form-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 18px;
    font-size: 16px;
    line-height: 1.37;
    color: #121417;
  }

  .form-inpt {
    border: 1px solid rgba(18, 20, 23, 0.1);
    border-radius: 12px;
    padding-left: 18px;
    max-width: 438px;
    height: 54px;

    &::placeholder {
      color: #121417;
    }

    &:nth-child(n + 2) {
      margin-bottom: 22px;
    }
  }

  .form-btn {
    font-weight: 700;
    font-size: 18px;
    line-height: 1.56;
    color: #121417;
    background-color: #f4c550;
    border-radius: 12px;
    border: none;
    max-width: 438px;
    height: 60px;
  }
`;
