import { Link } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';
import { Wrapper } from './Footer.styled';

export const Footer = () => {
  return (
    <Wrapper>
      <h2 className="footer-title">
        The site was created using React by{' '}
        <Link
          className="link"
          to="https://github.com/R3enox"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mykyta Yeremenko
        </Link>
      </h2>

      <ul className="svg-list">
        <li>
          <Link
            to="https://t.me/R3enox"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="svg-telegram">
              <use href={sprite + '#icon-telegram'}></use>
            </svg>
          </Link>
        </li>
        <li>
          <Link
            to="https://www.linkedin.com/in/mykyta-yeremenko/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="svg-linkedin">
              <use href={sprite + '#icon-linkedin'}></use>
            </svg>
          </Link>
        </li>
      </ul>
    </Wrapper>
  );
};
