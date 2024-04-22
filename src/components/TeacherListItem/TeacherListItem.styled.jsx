import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  column-gap: 48px;
  padding: 24px;
  border-radius: 24px;
  background-color: #fff;
  max-width: 1184px;
  width: 100%;

  .avatar {
    width: 120x;
    height: 120px;
    border-radius: 50%;
    padding: 12px;
    border: 3px solid #fbe9ba;
  }
  .svg-wrapper {
    position: relative;
  }

  .svg-point {
    position: absolute;
    top: 23px;
    left: 87px;
    border: white 1px solid;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    fill: #38cd3e;
    display: inline-block;
  }
  .right-side {
    width: 100%;
  }

  .favorite-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 697px;
    width: 100%;
  }

  .top-wrapper {
    display: flex;
    align-items: start;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 32px;
  }

  .text-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    margin-right: 134px;
  }

  .desc {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: #8a8a89;
  }

  .title {
    white-space: nowrap;
    font-weight: 500;
    font-size: 24px;
    line-height: 1;
  }

  .card-list {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
  }

  .card-list-item:first-child,
  .card-list-item:nth-child(3) {
    display: flex;
    align-items: center;
  }

  .card-list li:not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.2);
    padding-right: 15px;
  }

  .svg-book {
    stroke: black;
    fill: white;
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }

  .svg-star {
    fill: #ffc531;
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }

  .btn-heart-wrapper {
    border: none;
    background-color: transparent;
    margin-left: 45px;
  }

  .isFavHeart {
    width: 26px;
    height: 26px;
    fill: #f4c550;
    stroke: none;
  }

  .isNotFavHeart {
    width: 26px;
    height: 26px;
    fill: none;
    stroke: #121417;
  }

  .price {
    color: #38cd3e;
  }

  .list-info {
    width: 100%;
    max-width: 968px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
  }

  .list-info > *:last-child {
    margin-bottom: 16px;
  }

  .text-desc {
    color: #8a8a89;
  }

  .lang {
    text-decoration: underline;
  }
  .btn-more {
    background-color: transparent;
    border: none;
    padding: 0;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    margin-bottom: 32px;
  }

  .list-lang {
    display: flex;
    flex-direction: row;
    gap: 8px;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.14;
  }

  .list-lang-item {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(18, 20, 23, 0.2);
    border-radius: 35px;
    padding: 8px 12px;
    height: 32px;
  }

  .item-level-css {
    background-color: #f4c550;
    border: none;
  }

  .exp-desc {
    max-width: 968px;
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 32px;
  }

  .rev-list-item {
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-bottom: 32px;
  }

  .rev-name {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: #8a8a89;
  }

  .star-wrapper {
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
  }

  .btn-trial-lesson {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.56;
    border: none;
    border-radius: 12px;
    background-color: #f4c550;
    padding: 16px 48px;
    margin-top: 32px;
  }
`;

export const IconWrapper = styled.svg``;
