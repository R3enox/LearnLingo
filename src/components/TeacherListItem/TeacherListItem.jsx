import { Wrapper } from './TeacherListItem.styled';
import sprite from '../../assets/sprite.svg';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoritesTeachers } from '../../redux/favorites/favoritesSelectors';
import {
  addFavorite,
  deleteFavorite,
} from '../../redux/favorites/favoritesSlice';
import { Modal } from '../Modal/Modal';
import { BookBody } from '../BookBody/BookBody';
import { selectAuthenticated } from '../../redux/auth/authSelectors';
import { MessageBody } from '../MessageBody/MessageBody';

export const TeacherListItem = ({ teacher, levelCss }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [readMore, setReadMore] = useState(true);
  const dispatch = useDispatch();
  const favoritesTeachers = useSelector(selectFavoritesTeachers);
  const isAuthenticated = useSelector(selectAuthenticated);
  const [contentModal, setContentModal] = useState(null);

  const closeModal = () => {
    setIsShowModal(false);
  };

  const {
    name,
    surname,
    languages,
    levels,
    rating,
    reviews,
    price_per_hour,
    lessons_done,
    avatar_url,
    lesson_info,
    conditions,
    experience,
  } = teacher;

  const isFavorite = favoritesTeachers.some(({ id }) => id === teacher.id);

  const formatLanguages = (languages) => {
    if (!Array.isArray(languages) || languages.length === 0) {
      return '';
    }
    const lastIndex = languages.length - 1;
    const formattedLanguages = languages.map((language, index) => {
      if (index === lastIndex) {
        return language;
      } else {
        return language + ', ';
      }
    });
    return formattedLanguages.join('');
  };

  const addDecimal = (reviewRating) => {
    if (reviewRating) {
      return reviewRating + '.0';
    }
  };

  const openModal = (modalBody) => {
    setContentModal(modalBody);
    setIsShowModal(true);
  };

  const onMore = () => {
    setReadMore(false);
  };

  const MODAL = {
    BOOK: 'BOOK',
    MESSAGE: 'MESSAGE',
  };

  const modalContent = useMemo(() => {
    if (contentModal === 'BOOK') {
      return (
        <BookBody
          teacher={teacher}
          setIsShowModal={closeModal}
          modalBody={contentModal}
        />
      );
    } else if (contentModal === 'MESSAGE') {
      return (
        <MessageBody setIsShowModal={closeModal} modalBody={contentModal} />
      );
    }
    return null;
  }, [contentModal, teacher]);

  const handleFavoriteClick = () => {
    if (isAuthenticated) {
      dispatch(isFavorite ? deleteFavorite(teacher) : addFavorite(teacher));
    } else {
      openModal(MODAL.MESSAGE);
    }
  };

  return (
    <>
      <Wrapper>
        <div className="left-side">
          <div className="svg-wrapper">
            <img
              className="avatar"
              src={avatar_url}
              alt={`${name}, ${surname}`}
            />
            <svg className="svg-point">
              <use href={`${sprite}#icon-green-point`} />
            </svg>
          </div>
        </div>
        <div className="right-side">
          <div className="top-wrapper">
            <div className="text-wrapper">
              <p className="desc">Languages</p>
              <h2 className="title">
                {name} {surname}
              </h2>
            </div>
            <div className="favorite-wrapper">
              <ul className="card-list">
                <li className="card-list-item">
                  <svg className="svg-book">
                    <use href={`${sprite}#icon-book`} />
                  </svg>
                  <p>Lessons online</p>
                </li>
                <li className="card-list-item">
                  <p>Lessons done: {lessons_done}</p>
                </li>
                <li className="card-list-item">
                  <svg className="svg-star">
                    <use href={`${sprite}#icon-star`} />
                  </svg>
                  <p>Rating: {rating}</p>
                </li>
                <li className="card-list-item">
                  <p>
                    Price / 1 hour:{' '}
                    <span className="price">{price_per_hour}$</span>
                  </p>
                </li>
              </ul>
              <button
                className="btn-heart-wrapper"
                type="button"
                onClick={handleFavoriteClick}
              >
                <svg className={isFavorite ? 'isFavHeart' : 'isNotFavHeart'}>
                  <use href={`${sprite}#icon-heart`}></use>
                </svg>
              </button>
            </div>
          </div>

          <ul className="list-info">
            <li>
              <p>
                <span className="text-desc">Speaks:</span>{' '}
                <span className="lang">{formatLanguages(languages)}</span>
              </p>
            </li>
            <li>
              <p>
                <span className="text-desc">Lesson Info:</span> {lesson_info}
              </p>
            </li>
            <li>
              <p>
                <span className="text-desc">Conditions: </span>
                {conditions.map((cond) => {
                  return cond + ' ';
                })}
              </p>
            </li>
          </ul>
          {!readMore && (
            <>
              <p className="exp-desc">{experience}</p>
              <ul className="rev-list-item">
                {reviews.map(
                  ({ reviewer_name, reviewer_rating, comment }, idx) => (
                    <li key={idx}>
                      <h3 className="rev-name">{reviewer_name}</h3>
                      <div className="star-wrapper">
                        <svg className="svg-star">
                          <use href={`${sprite}#icon-star`} />
                        </svg>
                        <p>{addDecimal(reviewer_rating)}</p>
                      </div>
                      <p>{comment}</p>
                    </li>
                  )
                )}
              </ul>
            </>
          )}
          {readMore && (
            <button className="btn-more" onClick={onMore}>
              Read more
            </button>
          )}
          <ul className="list-lang">
            {levels.map((level) => (
              <li
                className={`list-lang-item ${
                  level === levelCss ? 'item-level-css' : ''
                }`}
                key={level}
              >
                <p>#{level}</p>
              </li>
            ))}
          </ul>
          {!readMore && (
            <button
              className="btn-trial-lesson"
              onClick={openModal(MODAL.BOOK)}
            >
              Book trial lesson
            </button>
          )}
        </div>
      </Wrapper>
      {isShowModal && <Modal body={modalContent} setIsShowModal={closeModal} />}
    </>
  );
};
