import React, { useState, useEffect } from 'react';
import Square from './Square';
import Styles from './styles';
import Won from './Won';

const Board = () => {
  const [player, setPlayer] = useState(1);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [piece, setPiece] = useState('x');
  const [won, setWon] = useState(false);

  const changePlayer = location => {
    const cur = [...board];
    cur[location] = piece;
    setBoard(cur);
    setPlayer(player === 1 ? 2 : 1);
    setPiece(piece === 'x' ? 'o' : 'x');
  }

  const resetBoard = () => {
    setBoard(Array(9).fill(null));
    setWon(false);
    setPiece('x');
    setPlayer(1);
  }

  useEffect(() => {
    console.log("checking");
    const possibleWins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8]
    ];

    for (let [pos1, pos2, pos3] of possibleWins) {
      if (!board[pos1] || !board[pos2] || !board[pos3]) continue;

      if (board[pos1] === board[pos2] && board[pos2] === board[pos3]) {
        setWon(true);
      }
    }
  }, [player]);

  return (
    <>
      {won ? (
        <Won/>
      ) : null }
      <Styles.Board>
        {board.map((boardPiece, i) => (
          <Square key={i} piece={boardPiece} changePlayer={() => changePlayer(i)}/>
        ))}
      </Styles.Board>
      <button onClick={resetBoard}>Reset</button>
    </>
  );
}
 
export default Board;