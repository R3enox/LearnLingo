import styled from 'styled-components';
import border from '../../assets/img/hero/rectangle.png';

export const HeroWrapper = styled.section`
  .main-wrapper {
    display: flex;
    column-gap: 24px;
    margin-bottom: 24px;
  }

  .left-side {
    display: flex;
    flex-direction: column;
    background-color: #f8f8f8;
    padding: 98px 108px 98px 64px;
    border-radius: 30px;
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
    padding: 80px 89px 0 88px;
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
    height: 60px;
    background-color: #f4c550;

    &:hover,
    &focus {
      background-color: #ffdc86;
    }
  }

  .hero-list {
    display: flex;
    column-gap: 100px;
    padding: 40px 122px 40px 123px;
    border-radius: 30px;
    background-image: url(${border});
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
