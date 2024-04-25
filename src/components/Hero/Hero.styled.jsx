import styled from 'styled-components';

export const HeroWrapper = styled.section`
  min-width: 320px;
  max-width: 1440px;
  width: 100%;

  .main-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;
    margin-bottom: 24px;
  }

  .left-side {
    border-radius: 30px;
    display: block;
    max-width: 720px;
    padding: 98px 64px;
    width: 100%;
    background-color: #f8f8f8;
  }

  .main-title {
    font-weight: 500;
    font-size: 48px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    max-width: 548px;
    margin-bottom: 32px;
  }

  .main-word {
    font-style: italic;
    font-weight: 400;
    background: #fbe9ba;
    border-radius: 8px;
    padding: 0 8px;
  }

  .desc {
    font-size: 16px;
    line-height: 1.37;
    letter-spacing: -0.02em;
    margin-bottom: 64px;
  }

  .right-side {
    max-width: 568px;
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 80px;
    border-radius: 30px;
    background-color: #fbe9ba;
  }

  .btn-start {
    border-radius: 12px;
    padding: 16px 88px;
    border: none;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.56;
    max-width: 272px;
    background-color: #f4c550;

    &:hover,
    &:focus {
      transition-duration: 300ms;
      background-color: #ffdc86;
    }
  }

  .hero-img {
    width: 100%;
    height: auto;
    width: 100%;
  }

  .hero-list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 100px;
    row-gap: 10px;
    padding: 40px 20px;
    border-radius: 30px;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='30' ry='30' stroke='orange' stroke-width='1.5px' stroke-dasharray='14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  }

  .hero-list {
    display: flex;
    align-items: center;
  }
  .hero-list-item {
    display: flex;
    column-gap: 16px;
  }

  .list-item-title {
    font-weight: 500;
    font-size: 28px;
    line-height: 1.14;
    letter-spacing: -0.02em;
  }

  .list-item-desc {
    max-width: 74px;
    font-size: 14px;
    line-height: 129%;
    letter-spacing: -0.02em;
    color: rgba(18, 20, 23, 0.7);
  }
`;
