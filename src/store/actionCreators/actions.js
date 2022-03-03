import store from "../store";

export const addJoke = (payload) => {
  const state = store.getState();
  const newJokesList = [...state.jokesList, payload];
  return {type: "addJoke", payload: newJokesList};
};

export const fetchAddJoke = () => ({type: "fetchAddJoke"});

