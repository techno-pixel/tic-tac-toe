import React from 'react';
import Header from '../shared/Header';
import Board from './Board';

const TicTacToe = () => {
  return (
    <>
      <Header title="Tick It, Tack It, Toe It!"/>
      <Board/>
    </>
  );
}
 
export default TicTacToe;