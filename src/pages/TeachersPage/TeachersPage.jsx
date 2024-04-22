import { useEffect, useState } from 'react';
import { TeacherList } from '../../components/TeacherList/TeacherList';
import { Container } from './TeachersPage.styled';
import {
  child,
  endAt,
  get,
  getDatabase,
  onValue,
  orderByKey,
  query,
  ref,
  startAt,
} from 'firebase/database';
import { app } from '../../firebase/firebase';
import { Filter } from '../../components/Filter/Filter';

const TeachersPage = () => {
  const [teachers, setTeachers] = useState([]);
  const [allTeachers, setAllTeachers] = useState([]);
  const [filteredTeachers, setFilteredTeachers] = useState(null);
  const [_, setStartIdx] = useState('0');
  const [endIdx, setEndIdx] = useState('3');
  const [loadMore, setLoadMore] = useState(true);
  const [levelCss, setLevelCss] = useState(null);
  const allLanguages = [];
  const uniqueLanguages = [];
  const allLevel = [];
  const uniqueLevel = [];

  const fetchAllTeachers = () => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, 'teachers/'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setAllTeachers(snapshot.val());
        } else {
        }
      })
      .catch((error) => {});
  };

  const fetchTeachers = (startIdx, endIdx) => {
    const db = getDatabase(app);
    const dbRef = ref(db, 'teachers/');
    const batchQuery = query(
      dbRef,
      orderByKey(),
      startAt(startIdx),
      endAt(endIdx)
    );
    onValue(
      batchQuery,
      (snapshot) => {
        const teacherData = [];
        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          teacherData.push({ id: childKey, ...childData });
        });
        setTeachers((prevState) => {
          return [...prevState, ...teacherData];
        });
      },
      {
        onlyOnce: true,
      }
    );
  };

  useEffect(() => {
    fetchTeachers('0', '3');
    fetchAllTeachers();
  }, []);

  const handleLoadMore = () => {
    const newStartIdx = (Number(endIdx) + 1).toString();
    const newEndIdx = (Number(endIdx) + 4).toString();
    setStartIdx(newStartIdx);
    setEndIdx(newEndIdx);
    fetchTeachers(newStartIdx, newEndIdx);
  };

  allTeachers.forEach((teacher) => {
    if (teacher.languages) {
      teacher.languages.forEach((language) => {
        if (!uniqueLanguages.includes(language)) {
          uniqueLanguages.push(language);
        }
        allLanguages.push(language);
      });
    }
    if (teacher.levels) {
      teacher.levels.forEach((level) => {
        if (!uniqueLevel.includes(level)) {
          uniqueLevel.push(level);
        }
        allLevel.push(level);
      });
    }
  });

  return (
    <Container>
      <section className="section-teachers">
        <Filter
          setFilteredTeachers={setFilteredTeachers}
          allTeachers={allTeachers}
          teachers={teachers}
          uniqueLanguages={uniqueLanguages}
          uniqueLevel={uniqueLevel}
          setLoadMore={setLoadMore}
          setLevelCss={setLevelCss}
        />
        <TeacherList
          teachers={filteredTeachers ? filteredTeachers : teachers}
          levelCss={levelCss}
        />
        {loadMore && teachers.length < 30 && (
          <button className="btn-load" onClick={handleLoadMore}>
            Load More
          </button>
        )}
      </section>
    </Container>
  );
};

export default TeachersPage;
