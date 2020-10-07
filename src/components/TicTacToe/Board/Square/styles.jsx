import styled from 'styled-components';

export default {
  Square: styled.div`
    background: #d35400;
    width: 80px;
    height: 80px;
    margin: 10px;
    border-radius: 15px;
    transition: 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;

    &:hover {
      background: #f39c12;
      transform: scale(1.1);
    }

    &:active {
      background: #f1c40f;
    }
  `
}