import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop } from './Modal.styled';
import svg from '../../assets/sprite.svg';

export const Modal = ({ body, setIsShowModal }) => {
  const portal = document.getElementById('modal');

  const memoizedhandleKeyDown = useCallback(
    (evt) => {
      if (evt.code === 'Escape') {
        setIsShowModal(false);
      }
    },
    [setIsShowModal]
  );

  useEffect(() => {
    window.addEventListener('keydown', memoizedhandleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', memoizedhandleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [memoizedhandleKeyDown]);

  const memoizedhandleOverlayClick = useCallback(
    (evt) => {
      if (evt.target === evt.currentTarget) {
        setIsShowModal(false);
      }
    },
    [setIsShowModal]
  );

  return createPortal(
    <Backdrop onClick={memoizedhandleOverlayClick}>
      <div className="modal">
        <button
          className="btn-cross"
          type="button"
          onClick={() => setIsShowModal(false)}
        >
          <svg className="icon-cross">
            <use href={svg + '#icon-cross'}></use>
          </svg>
        </button>
        {body}
      </div>
    </Backdrop>,
    portal
  );
};
