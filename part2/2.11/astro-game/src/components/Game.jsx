import React from 'react';
import '/style/game.css';

// Functional Component
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
        </div>
        <div className="board-row">
          {this.renderSquare(10)}
          {this.renderSquare(11)}
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
          {this.renderSquare(15)}
          {this.renderSquare(16)}
          {this.renderSquare(17)}
          {this.renderSquare(18)}
          {this.renderSquare(19)}
        </div>
        <div className="board-row">
          {this.renderSquare(20)}
          {this.renderSquare(21)}
          {this.renderSquare(22)}
          {this.renderSquare(23)}
          {this.renderSquare(24)}
          {this.renderSquare(25)}
          {this.renderSquare(26)}
          {this.renderSquare(27)}
          {this.renderSquare(28)}
          {this.renderSquare(29)}
        </div>
        <div className="board-row">
          {this.renderSquare(30)}
          {this.renderSquare(31)}
          {this.renderSquare(32)}
          {this.renderSquare(33)}
          {this.renderSquare(34)}
          {this.renderSquare(35)}
          {this.renderSquare(36)}
          {this.renderSquare(37)}
          {this.renderSquare(38)}
          {this.renderSquare(39)}
        </div>
        <div className="board-row">
          {this.renderSquare(40)}
          {this.renderSquare(41)}
          {this.renderSquare(42)}
          {this.renderSquare(43)}
          {this.renderSquare(44)}
          {this.renderSquare(45)}
          {this.renderSquare(46)}
          {this.renderSquare(47)}
          {this.renderSquare(48)}
          {this.renderSquare(49)}
        </div>
        <div className="board-row">
          {this.renderSquare(50)}
          {this.renderSquare(51)}
          {this.renderSquare(52)}
          {this.renderSquare(53)}
          {this.renderSquare(54)}
          {this.renderSquare(55)}
          {this.renderSquare(56)}
          {this.renderSquare(57)}
          {this.renderSquare(58)}
          {this.renderSquare(59)}
        </div>
        <div className="board-row">
          {this.renderSquare(60)}
          {this.renderSquare(61)}
          {this.renderSquare(62)}
          {this.renderSquare(63)}
          {this.renderSquare(64)}
          {this.renderSquare(65)}
          {this.renderSquare(66)}
          {this.renderSquare(67)}
          {this.renderSquare(68)}
          {this.renderSquare(69)}
        </div>
        <div className="board-row">
          {this.renderSquare(70)}
          {this.renderSquare(71)}
          {this.renderSquare(72)}
          {this.renderSquare(73)}
          {this.renderSquare(74)}
          {this.renderSquare(75)}
          {this.renderSquare(76)}
          {this.renderSquare(77)}
          {this.renderSquare(78)}
          {this.renderSquare(79)}
        </div>
        <div className="board-row">
          {this.renderSquare(80)}
          {this.renderSquare(81)}
          {this.renderSquare(82)}
          {this.renderSquare(83)}
          {this.renderSquare(84)}
          {this.renderSquare(85)}
          {this.renderSquare(86)}
          {this.renderSquare(87)}
          {this.renderSquare(88)}
          {this.renderSquare(89)}
        </div>
        <div className="board-row">
          {this.renderSquare(90)}
          {this.renderSquare(91)}
          {this.renderSquare(92)}
          {this.renderSquare(93)}
          {this.renderSquare(94)}
          {this.renderSquare(95)}
          {this.renderSquare(96)}
          {this.renderSquare(97)}
          {this.renderSquare(98)}
          {this.renderSquare(99)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(100).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    // console.log('Current.squares: ' + current.squares);
    // console.log('stepNumber: ' + this.state.stepNumber);

    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else if (this.state.stepNumber === 100) {
      status = 'It\'s a tie :|';
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
    <>
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div className="status">{status}</div>
          <ul>{moves}</ul>
        </div>
      </div>
    </>
    );
  }
}

// The actual dump part. How to check all the possibilities to have 5 in a row?
function calculateWinner(squares) {
  const lines = [
    // ROWS
    [0, 1, 2, 3, 4], [1, 2, 3, 4, 5], [2, 3, 4, 5, 6], [3, 4, 5, 6, 7], [4, 5, 6, 7, 8], [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14], [11, 12, 13, 14, 15], [12, 13, 14, 15, 16], [13, 14, 15, 16, 17], [14, 15, 16, 17, 18], [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24], [21, 22, 23, 24, 25], [22, 23, 24, 25, 26], [23, 24, 25, 26, 27], [24, 25, 26, 27, 28], [25, 26, 27, 28, 29],
    [30, 31, 32, 33, 34], [31, 32, 33, 34, 35], [32, 33, 34, 35, 36], [33, 34, 35, 36, 37], [34, 35, 36, 37, 38], [35, 36, 37, 38, 39],
    [40, 41, 42, 43, 44], [41, 42, 43, 44, 45], [42, 43, 44, 45, 46], [43, 44, 45, 46, 47], [44, 45, 46, 47, 48], [45, 46, 47, 48, 49],
    [50, 51, 52, 53, 54], [51, 52, 53, 54, 55], [52, 53, 54, 55, 56], [53, 54, 55, 56, 57], [54, 55, 56, 57, 58], [55, 56, 57, 58, 59],
    [60, 61, 62, 63, 64], [61, 62, 63, 64, 65], [62, 63, 64, 65, 66], [63, 64, 65, 66, 67], [64, 65, 66, 67, 68], [65, 66, 67, 68, 69],
    [70, 71, 72, 73, 74], [71, 72, 73, 74, 75], [72, 73, 74, 75, 76], [73, 74, 75, 76, 77], [74, 75, 76, 77, 78], [75, 76, 77, 78, 79],
    [80, 81, 82, 83, 84], [81, 82, 83, 84, 85], [82, 83, 84, 85, 86], [83, 84, 85, 86, 87], [84, 85, 86, 87, 88], [85, 86, 87, 88, 89],
    [90, 91, 92, 93, 94], [91, 92, 93, 94, 95], [92, 93, 94, 95, 96], [93, 94, 95, 96, 97], [94, 95, 96, 97, 98], [95, 96, 97, 98, 99],
    // COLUMNS
    [0, 10, 20, 30, 40], [10, 20, 30, 40, 50], [20, 30, 40, 50, 60], [30, 40, 50, 60, 70], [40, 50, 60, 70, 80], [50, 60, 70, 80, 90],
    [1, 11, 21, 31, 41], [11, 21, 31, 41, 51], [21, 31, 41, 51, 61], [31, 41, 51, 61, 71], [41, 51, 61, 71, 81], [51, 61, 71, 81, 91],
    [2, 12, 22, 32, 42], [12, 22, 32, 42, 52], [22, 32, 42, 52, 62], [32, 42, 52, 62, 72], [42, 52, 62, 72, 82], [52, 62, 72, 82, 92],
    [3, 13, 23, 33, 43], [13, 23, 33, 43, 53], [23, 33, 43, 53, 63], [33, 43, 53, 63, 73], [43, 53, 63, 73, 83], [53, 63, 73, 83, 93],
    [4, 14, 24, 34, 44], [14, 24, 34, 44, 54], [24, 34, 44, 54, 64], [34, 44, 54, 64, 74], [44, 54, 64, 74, 84], [54, 64, 74, 84, 94],
    [5, 15, 25, 35, 45], [15, 25, 35, 45, 55], [25, 35, 45, 55, 65], [35, 45, 55, 65, 75], [45, 55, 65, 75, 85], [55, 65, 75, 85, 95],
    [6, 16, 26, 36, 46], [16, 26, 36, 46, 56], [26, 36, 46, 56, 66], [36, 46, 56, 66, 76], [46, 56, 66, 76, 86], [56, 66, 76, 86, 96],
    [7, 17, 27, 37, 47], [17, 27, 37, 47, 57], [27, 37, 47, 57, 67], [37, 47, 57, 67, 77], [47, 57, 67, 77, 87], [57, 67, 77, 87, 97],
    [8, 18, 28, 38, 48], [18, 28, 38, 48, 58], [28, 38, 48, 58, 68], [38, 48, 58, 68, 78], [48, 58, 68, 78, 88], [58, 68, 78, 88, 98],
    [9, 19, 29, 39, 49], [19, 29, 39, 49, 59], [29, 39, 49, 59, 69], [39, 49, 59, 69, 79], [49, 59, 69, 79, 89], [59, 69, 79, 89, 99],
    // DIAGLONALS
    [0, 11, 22, 33, 44], [10, 21, 32, 43, 54], [20, 31, 42, 53, 64], [30, 41, 52, 63, 74], [40, 51, 62, 73, 84], [50, 61, 72, 83, 94],
    [1, 12, 23, 34, 45], [11, 22, 33, 44, 55], [21, 32, 43, 54, 65], [31, 42, 53, 64, 75], [41, 52, 63, 74, 85], [51, 62, 73, 84, 95],
    [2, 13, 24, 35, 46], [12, 23, 34, 45, 56], [22, 33, 44, 55, 66], [32, 43, 54, 65, 76], [42, 53, 64, 75, 86], [52, 63, 74, 85, 96],
    [3, 14, 25, 36, 47], [13, 24, 35, 46, 57], [23, 34, 45, 56, 67], [33, 44, 55, 66, 77], [43, 54, 65, 76, 87], [53, 64, 75, 86, 97],
    [4, 15, 26, 37, 48], [14, 25, 36, 47, 58], [24, 35, 46, 57, 68], [34, 45, 56, 67, 78], [44, 55, 66, 77, 88], [54, 65, 76, 87, 98],
    [5, 16, 27, 38, 49], [15, 26, 37, 48, 59], [25, 36, 47, 58, 69], [35, 46, 57, 68, 79], [45, 56, 67, 78, 89], [55, 66, 77, 88, 99],
    [4, 13, 22, 31, 40], [14, 23, 32, 41, 50], [24, 33, 42, 51, 60], [34, 43, 52, 61, 70], [44, 53, 62, 71, 80], [54, 63, 72, 81, 90],
    [5, 14, 23, 32, 41], [15, 24, 33, 42, 51], [25, 34, 43, 52, 61], [35, 44, 53, 62, 71], [45, 54, 63, 72, 81], [55, 64, 73, 82, 91],
    [6, 15, 24, 33, 42], [16, 25, 34, 43, 52], [26, 35, 44, 53, 62], [36, 45, 54, 63, 72], [46, 55, 64, 73, 82], [56, 65, 74, 83, 92],
    [7, 16, 25, 34, 43], [17, 26, 35, 44, 53], [27, 36, 45, 54, 63], [37, 46, 55, 64, 73], [47, 56, 65, 74, 83], [57, 66, 75, 84, 93],
    [8, 17, 26, 35, 44], [18, 27, 36, 45, 54], [28, 37, 46, 55, 64], [38, 47, 56, 65, 74], [48, 57, 66, 75, 84], [58, 67, 76, 85, 94],
    [9, 18, 27, 36, 45], [19, 28, 37, 46, 55], [29, 38, 47, 56, 65], [39, 48, 57, 66, 75], [49, 58, 67, 76, 85], [59, 68, 77, 86, 95]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c, d, e] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d] && squares[a] === squares[e]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;