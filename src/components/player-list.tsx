/* eslint-disable react/jsx-no-useless-fragment */
import { useAppSelector } from "../hooks";
import "../css/game.css";

function PlayerList() {
  const players = useAppSelector((state) => state.game.players);
  const listItems = players.map((player) => (
    <li key={player.id}>
      <img src={player.icon} alt="icon" />
      {player.name}
    </li>
  ));

  return (
    <>
      {players.length > 0 && (
        <div className="player-list">
          <h2>Current Players</h2>

          <ul>{listItems}</ul>
        </div>
      )}
    </>
  );
}

export default PlayerList;
