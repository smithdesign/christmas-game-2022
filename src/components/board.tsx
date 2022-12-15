import { useAppSelector } from "../hooks";
import CurrentPlayerInfo from "./current-player-info";
import Tile from "./tile";
import "../css/game.css";

function Board() {
  const squares = useAppSelector((state) => state.game.squares);

  const listItems = squares.map((square) => (
    <Tile key={square.id} square={square} className="tile" />
  ));

  return (
    <div className="play-background">
      <CurrentPlayerInfo />
      <div id="board" className="board">
        {listItems}
      </div>
    </div>
  );
}

export default Board;
