import { useEffect, useState } from 'react';
import { PRICE_HOURS } from '../../constans/constans';
import { nanoid } from '@reduxjs/toolkit';
import { Form, Wrapper } from './Filter.styled';
import sprite from '../../assets/sprite.svg';

export const Filter = ({
  setFilteredTeachers,
  allTeachers,
  teachers,
  setLoadMore,
  setLevelCss,
}) => {
  const [language, setLanguage] = useState('');
  const [price, setPrice] = useState('');
  const [level, setLevel] = useState('');
  const [languageClick, setLanguageClick] = useState(null);
  const [priceClick, setPriceClick] = useState(null);
  const [levelClick, setLevelClick] = useState(null);
  const [uniqueLanguages, setUniqueLanguages] = useState([]);
  const [uniqueLevel, setUniqueLevel] = useState([]);

  useEffect(() => {
    const newUniqueLanguages = [];
    const newUniqueLevel = [];

    allTeachers.forEach((teacher) => {
      if (teacher.languages) {
        teacher.languages.forEach((language) => {
          if (!newUniqueLanguages.includes(language)) {
            newUniqueLanguages.push(language);
          }
        });
      }
      if (teacher.levels) {
        teacher.levels.forEach((level) => {
          if (!newUniqueLevel.includes(level)) {
            newUniqueLevel.push(level);
          }
        });
      }
    });

    setUniqueLanguages(newUniqueLanguages);
    setUniqueLevel(newUniqueLevel);
    console.log('1');
  }, [allTeachers]);

  const handleLanguageChange = ({ target: { value } }) => {
    setLanguage(value);
    setLanguageClick(false);
  };

  const handlePriceChange = ({ target: { value } }) => {
    setPrice(value);
    setPriceClick(false);
  };

  const handleLevelChange = ({ target: { value } }) => {
    setLevel(value);
    setLevelClick(false);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let filteredTeachers = allTeachers;

    if (language) {
      filteredTeachers = filteredTeachers.filter((teacher) =>
        teacher.languages.some(
          (lang) => lang.toLowerCase() === language.toLowerCase()
        )
      );
      //   toastSuccess(`This is the ${brand} you've been looking for.`);
    }

    if (price) {
      filteredTeachers = filteredTeachers.filter(
        (teacher) => teacher.price_per_hour <= Number(price)
      );

      //   toastSuccess(`This is the ${price} you've been looking for.`);
    }

    if (level) {
      filteredTeachers = filteredTeachers.filter((teacher) =>
        teacher.levels.some((lev) => lev.toLowerCase() === level.toLowerCase())
      );
      setLevelCss(level);

      //   toastSuccess(`This is the ${price} you've been looking for.`);
    }
    setFilteredTeachers(filteredTeachers);
    setLoadMore(false);
  };

  const handleReset = () => {
    setLanguage('');
    setPrice('');
    setLevel('');
    setLevelCss('');
    setFilteredTeachers(teachers);
    setLoadMore(true);
    // toastSuccess(`The filter's been cleaned successfully.`);
  };

  const isActive = language || price || level;

  return (
    <Form onSubmit={handleSubmit}>
      <div className="label-wrapper lang-wrapper">
        <label htmlFor="language">Languages</label>
        <select
          onFocus={() => setLanguageClick(true)}
          onBlur={() => setLanguageClick(false)}
          onChange={handleLanguageChange}
          id="language"
          value={language}
        >
          <option value="" key="default" defaultValue>
            Enter the language
          </option>
          {uniqueLanguages?.map((language) => {
            const id = nanoid();
            return (
              <option value={language} key={id}>
                {language}
              </option>
            );
          })}
        </select>
        <Wrapper $languageClick={languageClick}>
          <button type="button" className="btn-wrapper">
            <svg className="icon-chevron lang-chevron">
              <use href={sprite + '#icon-chevron'}></use>
            </svg>
          </button>
        </Wrapper>
      </div>

      <div className="label-wrapper lang-wrapper">
        <label htmlFor="level">Level of knowledge</label>
        <select
          onFocus={() => setLevelClick(true)}
          onBlur={() => setLevelClick(false)}
          onChange={handleLevelChange}
          id="level"
          value={level}
        >
          <option value="" defaultValue>
            Enter the level
          </option>
          {uniqueLevel.map((level) => {
            const id = nanoid();
            return (
              <option key={id} value={level}>
                {level}
              </option>
            );
          })}
        </select>
        <Wrapper $levelClick={levelClick}>
          <button type="button" className="btn-wrapper">
            <svg className="icon-chevron level-chevron">
              <use href={sprite + '#icon-chevron'}></use>
            </svg>
          </button>
        </Wrapper>
      </div>

      <div className="label-wrapper price-wrapper">
        <label htmlFor="price">Price/ 1hour</label>
        <select
          onFocus={() => setPriceClick(true)}
          onBlur={() => setPriceClick(false)}
          onChange={handlePriceChange}
          id="price"
          value={price}
        >
          <option value="" defaultValue>
            To $
          </option>
          {PRICE_HOURS.map((value) => {
            const id = nanoid();
            return (
              <option key={id} value={value}>
                {`${value} $`}
              </option>
            );
          })}
        </select>
        <Wrapper $priceClick={priceClick}>
          <button type="button" className="btn-wrapper">
            <svg className="icon-chevron price-chevron">
              <use href={sprite + '#icon-chevron'}></use>
            </svg>
          </button>
        </Wrapper>
      </div>
      <div className="btn-wrapper">
        <button className="sbmt-btn" type="submit">
          Search
        </button>
        <button
          className="rest-btn"
          disabled={!isActive}
          onClick={handleReset}
          type="button"
        >
          Reset
        </button>
      </div>
    </Form>
  );
};
