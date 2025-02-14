import { useState } from "react";

const GameBoard = () => {
    const [grid, setGrid] = useState(Array(8).fill(Array(8).fill(1))); // 10x10 поле
  
    return (
      <div className="game-board">
        {console.log(grid)}
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, cellIndex) => (
              <div key={cellIndex} className="cell">
                {cell && <Block type={cell} />}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };
  
  export default GameBoard;