import styled from 'styled-components';

export const Wrapper = styled.footer`
  display: flex;
  gap: 15px;
  justify-content: center;
  /* align-items: center; */
  margin: 0 auto;
  padding: 20px 128px;
  max-width: 1440px;

  .link {
  }

  .footer-title {
    font-weight: 500;
    font-size: 35px;
    line-height: 117%;
    letter-spacing: -0.02em;
    color: #121417;
  }

  .svg-list {
    display: flex;
    justify-content: center;
    gap: 15px;
  }

  .svg-telegram {
    width: 45px;
    height: 45px;
    fill: #2ca5e0;
  }

  .svg-linkedin {
    width: 45px;
    height: 45px;
    fill: #0077b5;
  }
`;
