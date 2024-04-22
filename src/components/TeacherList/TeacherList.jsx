import { TeacherListItem } from '../TeacherListItem/TeacherListItem';
import { List } from './TeacherList.styled';

export const TeacherList = ({ teachers, levelCss }) => {
  return (
    <List>
      {teachers.map((teacher) => {
        return (
          <TeacherListItem
            teacher={teacher}
            key={teacher.avatar_url}
            levelCss={levelCss}
          />
        );
      })}
    </List>
  );
};
