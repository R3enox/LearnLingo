import { TeacherList } from '../../components/TeacherList/TeacherList';
import { selectFavoritesTeachers } from '../../redux/favorites/favoritesSelectors';
import { Container } from './FavoritesPage.styled';
import { useSelector } from 'react-redux';
import * as imgFavorite from '../../assets/img/favorites/index.js';

const FavoritesPage = () => {
  const favoritesTeachers = useSelector(selectFavoritesTeachers);

  return (
    <Container>
      <section className="favorites-section">
        {favoritesTeachers.length === 0 ? (
          <>
            <img srcSet={imgFavorite.favoritesImg} alt="Girl" />
            <h1>You haven't added any teachers to your favorites.</h1>
          </>
        ) : (
          <TeacherList teachers={favoritesTeachers} />
        )}
      </section>
    </Container>
  );
};

export default FavoritesPage;
