import "../css/game.css";

function PlayerIcon({ icon, size, description }: Icon) {
  return (
    <img
      className="player-icon-image"
      src={icon}
      width={size}
      height={size}
      alt={description || "Gift Icon"}
    />
  );
}

export default PlayerIcon;
