import { useAppDispatch } from "../hooks";
import { changeStage } from "../reducers/gameSlice";
import "../css/game.css";

function TitleScreen() {
  const dispatch = useAppDispatch();

  const onChangeStage = (stage: string) => {
    dispatch(changeStage(stage));
  };

  return (
    <div className="title">
      <div className="title-content">
        <h1>Santa&apos;s Big Fat Ass Bonus Game</h1>
        <button
          type="button"
          data-test="start-game-button"
          onClick={() => {
            onChangeStage("addPlayers");
          }}
        >
          Start Game
        </button>
      </div>
    </div>
  );
}

export default TitleScreen;
