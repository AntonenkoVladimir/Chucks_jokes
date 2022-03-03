const jokesList = JSON.parse(localStorage.getItem("jokesList"));
export const initialState = {
  jokesList: !!jokesList ? jokesList : [],
};
