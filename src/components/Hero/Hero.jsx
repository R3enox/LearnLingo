import { HeroWrapper } from './Hero.styled';
import * as imgHero from '../../assets/img/hero/index.js';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();
  return (
    <HeroWrapper>
      <div className="main-wrapper">
        <div className="left-side">
          <h1 className="main-title">
            Unlock your potential with the best{' '}
            <span className="main-word">language</span> tutors
          </h1>
          <p className="desc">
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <button
            className="btn-start"
            type="button"
            onClick={() => navigate('/teachers')}
          >
            Get started
          </button>
        </div>
        <div className="right-side">
          <picture>
            <source
              type="image/webp"
              srcSet={`${imgHero.heroImgWeb} 1x, ${imgHero.heroImgWeb2} 2x`}
            />
            <source
              type="image/png"
              srcSet={`${imgHero.heroImgPng} 1x, ${imgHero.heroImgPng2} 2x`}
            />
            <img
              className="hero-img"
              srcSet={imgHero.heroImgPng}
              alt="Girl with Notebook"
            />
          </picture>
        </div>
      </div>
      <ul className="hero-list">
        <li className="hero-list-item">
          <h2 className="list-item-title">32,000 +</h2>
          <p className="list-item-desc">Experienced tutors</p>
        </li>
        <li className="hero-list-item">
          <h2 className="list-item-title">300,000 +</h2>
          <p className="list-item-desc">5-star tutor reviews</p>
        </li>
        <li className="hero-list-item">
          <h2 className="list-item-title">120 +</h2>
          <p className="list-item-desc">Subjects taught</p>
        </li>
        <li className="hero-list-item">
          <h2 className="list-item-title">200 +</h2>
          <p className="list-item-desc">Tutor nationalities</p>
        </li>
      </ul>
    </HeroWrapper>
  );
};
