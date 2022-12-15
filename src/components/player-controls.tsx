import { useAppSelector, useAppDispatch } from "../hooks";
import { changeStage, ezEnd, newGame } from "../reducers/gameSlice";
import "../css/game.css";

function PlayerControls() {
  const dispatch = useAppDispatch();
  const squares = useAppSelector((state) => state.game.squares);

  const determineWinner = () => {
    if (squares.every((square) => square.isChosen)) {
      // End game
      dispatch(changeStage("end"));
    }
  };

  const onEzEnd = () => {
    const output = squares.map((square) => ({
      ...square,
      isChosen: true,
    }));

    dispatch(ezEnd(output));
  };

  const onNewGame = () => {
    dispatch(newGame());
  };

  determineWinner();

  return (
    <div className="play-controls">
      <button type="button" onClick={onNewGame}>
        New Game
      </button>
      <button type="button" onClick={onEzEnd}>
        End Game
      </button>
    </div>
  );
}

export default PlayerControls;
