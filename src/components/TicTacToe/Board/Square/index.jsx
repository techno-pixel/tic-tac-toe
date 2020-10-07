import React from 'react';
import Piece from './Piece';
import Styles from './styles';

const Square = ({piece, changePlayer}) => {
  return (
    <Styles.Square onClick={() => changePlayer()}>
      <Piece piece={piece}/>
    </Styles.Square>
  );
}
 
export default Square;