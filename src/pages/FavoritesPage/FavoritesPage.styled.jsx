import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background-color: #f8f8f8;
  padding: 96px 0;
  max-width: 1440px;
  border-radius: 30px;

  .favorites-section {
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
