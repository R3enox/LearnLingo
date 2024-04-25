import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(18, 20, 23, 0.5);
  z-index: 99;
  &:hover {
    cursor: pointer;
  }

  .modal {
    position: relative;
    padding: 64px;
    max-width: 566px;
    max-height: 98vh;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 30px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    overflow-y: auto;

    &:hover {
      cursor: auto;
    }
  }

  .btn-cross {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    position: absolute;
    top: 20px;
    right: 20px;
  }

  .icon-cross {
    stroke: black;
    width: 32px;
    height: 32px;
  }
`;
