import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 20px;
  max-width: 1440px;
  margin: 0 auto;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0 auto;
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #121417;

  &:hover,
  &:focus {
    transition-duration: 300ms;
    color: #ffdc86;
  }

  .btn-log-out {
    padding: 10px 0;
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  column-gap: 28px;
  flex-direction: wrap;
  padding: 14px 0;

  .headerLink {
    color: #121417;

    &:hover,
    &:focus {
      transition-duration: 300ms;
      color: #ffdc86;
    }
  }

  .active {
    border-bottom: 2px solid #f4c550;
    color: #121417;

    &:hover,
    &:focus {
      transition-duration: 300ms;
      color: #ffdc86;
    }
  }
`;

export const ButtonReg = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  width: 166px;
  height: 48px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: #fff;
  background-color: #121417;
  border: none;

  &:hover,
  &:focus {
    transition-duration: 300ms;
    background-color: #ffdc86;
    color: #121417;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;

  &:hover,
  &:hover .svg-log-out,
  &:hover .svg-log-in,
  &:focus,
  &:focus .svg-log-in,
  &:focus .svg-log-out {
    transition-duration: 300ms;
    color: #ffdc86;
    stroke: #121417;
  }
`;

export const IconWrapper = styled.svg`
  width: ${(props) => props.size || '12px'};
  height: ${(props) => props.size || '12px'};
  stroke: ${(props) => props.stroke || 'none'};
  fill: ${(props) => props.fill || 'black'};
  display: inline-block;
  margin-right: 8px;
  outline: none;

  &:hover,
  &:focus {
    transition-duration: 300ms;
    transform: scale(1.2);
  }
`;

export const LogOutWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 18px;
`;

export const AuthWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
`;
