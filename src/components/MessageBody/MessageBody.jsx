import { Wrapper } from './MessageBody.styled';

export const MessageBody = () => {
  return (
    <Wrapper>
      <h2 className="title">
        Hello, in order to add to favorites, you need to{' '}
        <span className="main-word">Register</span> or{' '}
        <span className="main-word">Log in</span>.
      </h2>
    </Wrapper>
  );
};
