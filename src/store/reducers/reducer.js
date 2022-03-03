export const reducer = (state, action) => {
  switch (action.type) {
    case "addJoke": return {...state, jokesList: action.payload };

    default:
      return state;
  }
}
