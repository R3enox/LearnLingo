import { nanoid } from '@reduxjs/toolkit';
import { TeacherListItem } from '../TeacherListItem/TeacherListItem';
import { List } from './TeacherList.styled';

export const TeacherList = ({ teachers, levelCss }) => {
  return (
    <List>
      {teachers.map((teacher) => {
        const id = nanoid();
        return (
          <TeacherListItem teacher={teacher} key={id} levelCss={levelCss} />
        );
      })}
    </List>
  );
};
