import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 20px 128px;
  max-width: 1440px;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #121417;
`;

export const PageWrapper = styled.div`
  margin-left: 390px;
  display: flex;
  column-gap: 28px;

  .headerLink {
    color: #121417;
  }

  .active {
    border-bottom: 2px solid #f4c550;
    color: #121417;
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
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
`;

export const IconWrapper = styled.svg`
  width: ${(props) => props.size || '12px'};
  height: ${(props) => props.size || '12px'};
  stroke: ${(props) => props.stroke || 'black'};
  fill: ${(props) => props.fill || 'black'};
  display: inline-block;
  margin-right: 8px;
`;

export const LogOutWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 18px;
  margin-left: 268px;
`;

export const AuthWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
  margin-left: 268px;
`;
