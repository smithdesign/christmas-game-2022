/* eslint-disable react/prop-types */
import React, { useMemo } from "react";
import Modal from "react-modal";
import { useAppSelector, useAppDispatch } from "../hooks";
import {
  changePlayer,
  changePlayerScore,
  changeSquare,
} from "../reducers/gameSlice";
import {
  numberFormat,
  getModalTitle,
  getModalImage,
  getTextBlurb,
} from "../util/common_game";
import "../css/game.css";
import PlayerIcon from "./player-icon";

type AppProps = React.PropsWithChildren<{
  square: Square;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

function Tile({ square }: AppProps) {
  const player = useAppSelector(
    (state) => state.game.players[state.game.turnIndex]
  );
  const dispatch = useAppDispatch();
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    if (!square.isChosen) {
      setIsOpen(true);
    }
  };

  const modalData = {
    title: useMemo(() => getModalTitle(square.amount), [square.amount]),
    image: useMemo(() => getModalImage(square.amount), [square.amount]),
    button: getTextBlurb("button"),
  };

  const closeModal = () => {
    setIsOpen(false);
    dispatch(
      changeSquare({
        id: square.id,
        icon: player.icon,
        isChosen: true,
        iconAlt: player.name,
      })
    );

    dispatch(
      changePlayerScore({
        id: player.id,
        score: square.amount,
      })
    );
    dispatch(changePlayer());
  };

  const customStyles = {
    content: {
      width: "50vw",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  Modal.setAppElement("#root");

  return (
    <div
      className={`tile ${square.isChosen ? "chosen" : ""}`}
      data-test={`tile-${square.name}`}
    >
      <a onClick={openModal} className="tile-button" role="button">
        <PlayerIcon size={50} icon={square.icon} description={square.iconAlt} />
        <span className="tile-content">
          {square.isChosen ? numberFormat(square.amount) : square.name}
        </span>
      </a>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        closeTimeoutMS={200}
      >
        <h2 className="modal-title">{modalData.title}</h2>
        <div
          className="modal-content"
          data-test={`modal-content-${square.name}`}
        >
          <div className="modal-image">{modalData.image}</div>
          <div className="modal-prize">
            <p>Your prize is...</p>
            <h2>{numberFormat(square.amount)}</h2>
            <button
              onClick={closeModal}
              type="button"
              data-test={`modal-close-${square.name}`}
            >
              {modalData.button}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Tile;
