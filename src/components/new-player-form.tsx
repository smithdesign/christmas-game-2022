import React, { useState } from "react";
import uuid from "react-uuid";
import { useAppDispatch } from "../hooks";
import { addPlayer } from "../reducers/gameSlice";
import { playerIcons } from "../util/icons";
import "../css/game.css";

function NewPlayerForm() {
  const dispatch = useAppDispatch();
  const ref = React.useRef<HTMLInputElement>(null);
  const [selectedIcon, setSelectedIcon] = useState(0);

  const onAddPlayer = (e: React.FormEvent) => {
    e.preventDefault();

    // eslint-disable-next-line no-undef
    const data = new FormData(e.target as HTMLFormElement);
    const name = data.get("name") as string;

    if (name) {
      const player = {
        id: uuid(),
        name,
        score: 0,
        icon: playerIcons[selectedIcon],
      };

      if (ref.current) {
        ref.current.value = "";
      }

      playerIcons.splice(selectedIcon, 1);
      setSelectedIcon(0);

      dispatch(addPlayer(player));
    }
  };

  const playerIconList = playerIcons.map((playerIcon, i) => (
    <div
      key={i}
      className={`player-icon ${selectedIcon === i ? "selected" : ""}`}
    >
      <img
        src={playerIcon}
        onClick={() => setSelectedIcon(i)}
        alt="Player Icon"
      />
    </div>
  ));

  return (
    <>
      <header className="game-start-header">
        <h1>Let&apos;s Add Some Players</h1>
      </header>
      <div className="player-form">
        <div className="player-stage">
          <form onSubmit={onAddPlayer} className="form-new-player">
            <label htmlFor="new-player-name">What's your name?</label>
            <input
              ref={ref}
              type="text"
              name="name"
              id="new-player-name"
              data-test="new-player-name"
              autoFocus
            />

            <h2 className="player-icon-header">Select an Icon</h2>

            <div className="player-icons">{playerIconList}</div>
            <p>
              <button
                type="submit"
                id="new-player-button"
                data-test="new-player-button"
              >
                Add Player
              </button>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default NewPlayerForm;
