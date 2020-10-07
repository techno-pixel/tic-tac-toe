import React from 'react';
import Styles from './styles';

const Piece = ({piece}) => {
  return (
    <Styles.Piece>
      {piece}
    </Styles.Piece>
  );
}
 
export default Piece;