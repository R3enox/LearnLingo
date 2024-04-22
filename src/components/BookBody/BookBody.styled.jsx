import styled from 'styled-components';

export const Body = styled.div`
  .main-title {
    font-weight: 500;
    font-size: 40px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    margin-bottom: 20px;
  }

  .desc {
    font-size: 16px;
    line-height: 1.37;
    color: rgba(18, 20, 23, 0.8);
    margin-bottom: 20px;
  }

  .rev-name {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
  }

  .teach-desc {
    font-weight: 500;
    font-size: 12px;
    line-height: 1.33;
    color: #8a8a89;
  }

  .avatar {
    width: 44px;
    height: 44px;
    border-radius: 50%;
  }

  .img-text-wrapper {
    display: flex;
    column-gap: 14px;
    margin-bottom: 40px;
  }

  .title {
    font-weight: 500;
    font-size: 24px;
    line-height: 1.33;
    margin-bottom: 20px;
  }

  .form-wrapper {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .radio-group {
    display: flex;
    flex-direction: column;
    row-gap: 18px;
    font-size: 16px;
    line-height: 1.37;
    color: #121417;
  }

  .radio {
    input[type='radio'] {
      position: absolute;
      opacity: 0;
      + .radio-label {
        &:before {
          content: '';
          border-radius: 10px;
          border: 2px solid rgba(18, 20, 23, 0.2);
          display: inline-block;
          width: 20px;
          height: 20px;
          position: relative;
          top: -0.2em;
          margin-right: 1em;
          vertical-align: top;
          cursor: pointer;
          text-align: center;
          transition: all 250ms ease;
        }
      }
      &:checked {
        + .radio-label {
          &:before {
            background-color: #f4c550;
            box-shadow: inset 0 0 0 4px #fff;
          }
        }
      }
      &:focus {
        + .radio-label {
          &:before {
            outline: none;
            border-color: #f4c550;
          }
        }
      }
    }
  }

  .input-form {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .form-inpt {
    border: 1px solid rgba(18, 20, 23, 0.1);
    border-radius: 12px;
    padding-left: 18px;
    max-width: 438px;
    height: 54px;

    &::placeholder {
      color: #121417;
    }
  }

  .form-btn {
    font-weight: 700;
    font-size: 18px;
    line-height: 1.56;
    color: #121417;
    background-color: #f4c550;
    border-radius: 12px;
    border: none;
    max-width: 438px;
    height: 60px;
  }
`;
