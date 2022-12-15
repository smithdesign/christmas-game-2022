import { useAppSelector } from "../hooks";
import { numberFormat } from "../util/common_game";
import "../css/game.css";
import PlayerIcon from "./player-icon";

function CurrentPlayerInfo() {
  const player = useAppSelector(
    (state) => state.game.players[state.game.turnIndex]
  );

  return (
    <div className="current-player-info">
      <p className="current-player-info-name">
        <PlayerIcon icon={player.icon} size={50} />
        {player.name} Pick a Box!
      </p>
      <p className="current-player-info-score">
        {player.name}'s Current Cash: {numberFormat(player.score)}
      </p>
    </div>
  );
}

export default CurrentPlayerInfo;
