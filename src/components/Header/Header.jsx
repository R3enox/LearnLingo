import { useMemo, useState } from 'react';
import { Modal } from '../Modal/Modal';
import {
  HeaderContainer,
  Navigation,
  IconWrapper,
  Button,
  ButtonReg,
  AuthWrapper,
  PageWrapper,
  LogoLink,
  LogOutWrapper,
} from './Header.styled';
import sprite from 'assets/sprite.svg';
import { SignUpBody } from '../SignUpBody/SignUpBody';
import { SignInBody } from '../SignInBody/SignInBody';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthenticated } from '../../redux/auth/authSelectors';
import { signOut as logOut } from '../../redux/auth/authSlice';
import { getAuth, signOut } from 'firebase/auth';
import { NavLink } from 'react-router-dom';
import { toastSuccess } from '../../helpers/toast';

export const Header = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [contentModal, setContentModal] = useState(null);
  const isAuthenticated = useSelector(selectAuthenticated);
  const dispatch = useDispatch();

  const openModal = (modalBody) => {
    setContentModal(modalBody);
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  const removeUser = () => {
    const auth = getAuth();
    signOut(auth);
    dispatch(logOut());
    toastSuccess(
      `You have been successfully logged out. Thank you for visiting our website. We look forward to welcoming you back soon!`
    );
  };

  const MODAL = {
    LOGIN: 'LOGIN',
    REGISTER: 'REGISTER',
  };

  const modalContent = useMemo(() => {
    if (contentModal === 'LOGIN') {
      return <SignInBody closeModal={closeModal} modalBody={contentModal} />;
    } else if (contentModal === 'REGISTER') {
      return <SignUpBody closeModal={closeModal} modalBody={contentModal} />;
    }
    return null;
  }, [contentModal]);

  return (
    <>
      <HeaderContainer>
        <Navigation>
          <LogoLink to="/">
            <Button>
              <IconWrapper size={'28px'}>
                <use href={`${sprite}#icon-ukraine`} />
              </IconWrapper>
            </Button>
            LearnLingo
          </LogoLink>
          <PageWrapper>
            <NavLink
              className={({ isActive }) => {
                return !isActive ? 'headerLink' : 'active';
              }}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => {
                return !isActive ? 'headerLink' : 'active';
              }}
              to="/teachers"
            >
              Teachers
            </NavLink>
            {isAuthenticated && (
              <NavLink
                className={({ isActive }) => {
                  return !isActive ? 'headerLink' : 'active';
                }}
                to="/favorites"
              >
                Favorites
              </NavLink>
            )}
          </PageWrapper>
          {isAuthenticated ? (
            <LogOutWrapper>
              <Button className="btn-log-out" onClick={() => removeUser()}>
                <IconWrapper
                  className="svg-log-out"
                  size={'20px'}
                  stroke={'#F4C550'}
                  fill={'none'}
                >
                  <use href={`${sprite}#icon-log-in`} />
                </IconWrapper>
                Log Out
              </Button>
            </LogOutWrapper>
          ) : (
            <AuthWrapper>
              <Button onClick={() => openModal(MODAL.LOGIN)}>
                <IconWrapper
                  className="svg-log-in"
                  size={'20px'}
                  stroke={'#F4C550'}
                  fill={'none'}
                >
                  <use href={`${sprite}#icon-log-in`} />
                </IconWrapper>
                Log in
              </Button>
              <ButtonReg onClick={() => openModal(MODAL.REGISTER)}>
                Registration
              </ButtonReg>
            </AuthWrapper>
          )}
        </Navigation>
      </HeaderContainer>
      {isShowModal && (
        <Modal body={modalContent} setIsShowModal={setIsShowModal} />
      )}
    </>
  );
};
