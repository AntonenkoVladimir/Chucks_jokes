export const localMiddleware = store => next => action => {
  switch (action.type) {
    case "addJoke": localStorage.setItem("jokesList", JSON.stringify(action.payload));
  }
  const result = next(action);
  return result;
}

