import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    playing: false,
    rules: false,
    level: 5,
    flip: false,
    playerIsAlive: true,
    pokemonsSelected: [],
    score: 0,
    win: false,
    continue: false,
  },
  reducers: {
    okRules(state) {
      state.rules = true;
    },
    startGame(state) {
      state.playing = true;
      state.rules = false;
      state.continue = true;
    },
    setLevel: (state, actions) => {
      state.level = actions.payload;
    },
    flipDown(state) {
      state.flip = !state.flip;
    },
    getPokemon(state, actions) {
      const checkPokemon = state.pokemonsSelected.includes(actions.payload);

      if (!checkPokemon) {
        state.pokemonsSelected.push(actions.payload);
        state.score++;
        if (state.pokemonsSelected.length === state.level) {
          state.win = true;
          state.playerIsAlive = false;
          state.playing = false;
        }
      } else {
        state.playerIsAlive = false;
        state.playing = false;
      }
    },
    playAgain(state) {
      state.playing = true;
      state.score = 0;
      state.win = false;
      state.pokemonsSelected = [];
      state.playerIsAlive = true;
    },
    exit(state) {
      state.level = 5;
      state.rules = false;
      state.playing = false;
      state.playerIsAlive = true;
      state.score = 0;
      state.win = false;
      state.continue = false;
    },
  },
});

export const gameAction = gameSlice.actions;

export default gameSlice;
