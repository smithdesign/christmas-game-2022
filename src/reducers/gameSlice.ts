import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import uuid from "react-uuid";
import { getRandomAmounts, randomIcon } from "../util/common_game";

const initialState: GameState = {
  stage: "start",
  players: [],
  turnIndex: 0,
  squares: getRandomAmounts().map((amount, i) => ({
    id: uuid(),
    name: i + 1,
    amount,
    isChosen: false,
    icon: randomIcon(),
  })),
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    addPlayer: (state, action: PayloadAction<Player>) => {
      state.players.push(action.payload);
    },
    changeStage: (state, action: PayloadAction<string>) => {
      state.stage = action.payload;
    },
    changePlayer: (state) => {
      state.turnIndex =
        state.players.length === state.turnIndex + 1 ? 0 : state.turnIndex + 1;
    },
    changePlayerScore: (state, action: PayloadAction<PlayerScore>) => {
      const player = state.players.find(
        (player) => player.id === action.payload.id
      );
      if (player) {
        player.score += action.payload.score;
      }
    },
    changeSquare: (state, action: PayloadAction<SquareUpdate>) => {
      const square = state.squares.find(
        (square) => square.id === action.payload.id
      );
      if (square) {
        square.icon = action.payload.icon;
        square.isChosen = action.payload.isChosen;
        square.iconAlt = action.payload.iconAlt;
      }
    },
    ezEnd: (state, action: PayloadAction<Square[]>) => {
      state.squares = action.payload;
    },
    newGame: () => initialState,
  },
});

export const {
  addPlayer,
  changeStage,
  changePlayer,
  changePlayerScore,
  changeSquare,
  ezEnd,
  newGame,
} = gameSlice.actions;

export default gameSlice.reducer;
