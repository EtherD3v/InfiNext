import './styles/main.css';
import React, { FC, useEffect } from 'react';

interface SquareProps {
  value: number;
}

const Square: FC<SquareProps> = ({ value }) => {
  const backgroundColor = getBackgroundColor(value);

  return <div className="square" style={{ backgroundColor }}>{value}</div>;
}

function getBackgroundColor(value: number): string {
  switch (value) {
    case 0:
      return '#afa192';
    case 2:
      return '#eee4da';
    case 4:
      return '#ede0c8';
    case 8:
      return '#f2b179';
    case 16:
      return '#ffcea4';
    case 32:
      return '#e8c064';
    case 64:
      return '#ffab6e';
    case 128:
      return '#fd9982';
    case 256:
      return '#ead79c';
    case 512:
      return '#76daff';
    case 1024:
      return '#beeaa5';
    case 2048:
      return '#d7d4f0';
    default:
      return '';
  }
}

const Game: FC = () => {
  const width = 4;
  const [squares, setSquares] = useState<number[]>(Array(width * width).fill(0));
  const [score, setScore] = useState(0);
  const [result, setResult] = useState('');

  useEffect(() => {
    createBoard();
    generate();
    generate();
  }, []);

  function createBoard() {
    const newSquares = Array(width * width).fill(0);
    setSquares(newSquares);
  }

  function generate() {
    const randomNumber = Math.floor(Math.random() * squares.length);
    if (squares[randomNumber] === 0) {
      const newSquares = [...squares];
      newSquares[randomNumber] = 2;
      setSquares(newSquares);
      checkForGameOver();
    } else {
      generate();
    }
  }

  function moveRight() {
    const newSquares = [...squares];
    for (let i = 0; i < width * width; i++) {
      if (i % width === 0) {
        const row = newSquares.slice(i, i + width);
        const filteredRow = row.filter(num => num !== 0);
        const missing = width - filteredRow.length;
        const zeros = Array(missing).fill(0);
        const newRow = zeros.concat(filteredRow);
        newSquares.splice(i, width, ...newRow);
      }
    }
    setSquares(newSquares);
  }

  function moveLeft() {
    const newSquares = [...squares];
    for (let i = 0; i < width * width; i++) {
      if (i % width === 0) {
        const row = newSquares.slice(i, i + width);
        const filteredRow = row.filter(num => num !== 0);
        const missing = width - filteredRow.length;
        const zeros = Array(missing).fill(0);
        const newRow = filteredRow.concat(zeros);
        newSquares.splice(i, width, ...newRow);
      }
    }
    setSquares(newSquares);
  }

  function moveUp() {
    const newSquares = [...squares];
    for (let i = 0; i < width; i++) {
      const column = [];
      for (let j = i; j < width * width; j += width) {
        column.push(newSquares[j]);
      }
      const filteredColumn = column.filter(num => num !== 0);
      const missing = width - filteredColumn.length;
      const zeros = Array(missing).fill(0);
      const newColumn = filteredColumn.concat(zeros);
      for (let j = i; j < width * width; j += width) {
        newSquares[j] = newColumn[j / width];
      }
    }
    setSquares(newSquares);
  }

  function moveDown() {
    const newSquares = [...squares];
    for (let i = 0; i < width; i++) {
      const column = [];
      for (let j = i; j < width * width; j += width) {
        column.push(newSquares[j]);
      }
      const filteredColumn = column.filter(num => num !== 0);
      const missing = width - filteredColumn.length;
      const zeros = Array(missing).fill(0);
      const newColumn = zeros.concat(filteredColumn);
      for (let j = i; j < width * width; j += width) {
        newSquares[j] = newColumn[j / width];
      }
    }
    setSquares(newSquares);
  }

  function combineRow() {
    const newSquares = [...squares];
    let newScore = score;
    for (let i = 0; i < width * width - 1; i++) {
      if (newSquares[i] === newSquares[i + 1]) {
        const combinedTotal = newSquares[i] + newSquares[i + 1];
        newSquares[i] = combinedTotal;
        newSquares[i + 1] = 0;
        newScore += combinedTotal;
      }
    }
    setSquares(newSquares);
    setScore(newScore);
    checkForWin();
  }

  function combineColumn() {
    const newSquares = [...squares];
    let newScore = score;
    for (let i = 0; i < width * width - width; i++) {
      if (newSquares[i] === newSquares[i + width]) {
        const combinedTotal = newSquares[i] + newSquares[i + width];
        newSquares[i] = combinedTotal;
        newSquares[i + width] = 0;
        newScore += combinedTotal;
      }
    }
    setSquares(newSquares);
    setScore(newScore);
    checkForWin();
  }

  function control(e: React.KeyboardEvent) {
    if (e.keyCode === 37) {
      keyLeft();
    } else if (e.keyCode === 38) {
      keyUp();
    } else if (e.keyCode === 39) {
      keyRight();
    } else if (e.keyCode === 40) {
      keyDown();
    }
  }

  useEffect(() => {
    document.addEventListener('keyup', control);
    return () => {
      document.removeEventListener('keyup', control);
    };
  }, []);

  function keyRight() {
    moveRight();
    combineRow();
    moveRight();
    generate();
  }

  function keyLeft() {
    moveLeft();
    combineRow();
    moveLeft();
    generate();
  }

  function keyUp() {
    moveUp();
    combineColumn();
    moveUp();
    generate();
  }

  function keyDown() {
    moveDown();
    combineColumn();
    moveDown();
    generate();
  }

  function checkForWin() {
    if (squares.some(square => square === 2048)) {
      setResult('You WIN');
      document.removeEventListener('keyup', control);
      setTimeout(() => {
        setResult('');
        clear();
      }, 3000);
    }
  }

  function checkForGameOver() {
    if (squares.every(square => square !== 0)) {
      setResult('You LOSE');
      document.removeEventListener('keyup', control);
      setTimeout(() => {
        setResult('');
        clear();
      }, 3000);
    }
  }

  function clear() {
    clearInterval(myTimer);
  }

  return (
    <div>
      <div className="grid">
        {squares.map((value, index) => (
          <Square key={index} value={value} />
        ))}
      </div>
      <div id="score">{score}</div>
      <div id="result">{result}</div>
    </div>
  );
}

export default Game;
