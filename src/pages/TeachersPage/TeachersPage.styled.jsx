import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 0 auto;
  background-color: #f8f8f8;
  padding: 96px 0;
  min-width: 320px;
  max-width: 1440px;
  border-radius: 30px;
  min-height: 80vh;

  .section-teachers {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .btn-load {
    font-weight: 700;
    font-size: 18px;
    line-height: 1.56;
    border-radius: 12px;
    padding: 16px 48px;
    background-color: #f4c550;
    border: none;
    margin-top: 64px;
    outline: none;

    &:hover,
    &:focus {
      transition: 300ms;
      background-color: #ffdc86;
    }

    .title-not-teacher {
      font-weight: 500;
      font-size: 28px;
      line-height: 1.17%;
      letter-spacing: -0.02em;
      color: #121417;
    }
  }
`;

export const Title = styled.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;
