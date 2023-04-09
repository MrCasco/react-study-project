import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useEffect } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function TicTacToe() {
  const [turn, setTurn] = useState("X");
  const initialGrid = ["_", "_", "_", "_", "_", "_", "_", "_", "_"];
  const [grid, setGrid] = useState(initialGrid);
  const [topText, setTopText] = useState("It's X's turn");
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (checkWinner()) {
      setTopText(`Congrats ${turn === "X" ? "O" : "X"} won!`);
      setGameOver(true);
    }
  });

  const changeTurn = (index) => {
    let newGrid = grid.slice();
    if (newGrid[index] !== "_" || gameOver) {
      return;
    }
    newGrid[index] = turn;
    setGrid(newGrid);
    setTurn(turn === "X" ? "O" : "X");
    setTopText(`It's ${turn === "X" ? "O" : "X"}'s turn`);
  };

  const checkWinner = () => {
    for (let i = 0; i < 7; i += 3) {
      if (
        grid[i] !== "_" &&
        grid[i] === grid[i + 1] &&
        grid[i] === grid[i + 2]
      ) {
        return true;
      }
    }

    for (let i = 0; i < 3; i++) {
      if (
        grid[i] !== "_" &&
        grid[i] === grid[i + 3] &&
        grid[i] === grid[i + 6]
      ) {
        return true;
      }
    }

    if (grid[0] !== "_" && grid[0] === grid[4] && grid[0] === grid[8]) {
      return true;
    }

    if (grid[6] !== "_" && grid[6] === grid[4] && grid[6] === grid[2]) {
      return true;
    }
    return false;
  };

  const resetGame = () => {
    setGrid(initialGrid);
    setTurn("X");
    setGameOver(false);
    setTopText("It's X's turn");
  };

  return (
    <div style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}>
      <h1>{topText}</h1>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {Array.from(Array(9)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item onClick={() => changeTurn(index)}>{grid[index]}</Item>
          </Grid>
        ))}
      </Grid>
      <Button disabled={!gameOver} onClick={resetGame}>
        Play again
      </Button>
    </div>
  );
}

export default TicTacToe;
