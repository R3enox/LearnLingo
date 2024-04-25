import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background-color: #f8f8f8;
  padding: 96px 0;
  min-width: 320px;
  max-width: 1440px;
  border-radius: 30px;
  min-height: 100vh;

  .favorite-img {
    width: 100%;
  }
  .favorites-section {
    display: flex;
    justify-content: center;
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
`;
