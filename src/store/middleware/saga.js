import {put, takeEvery} from "redux-saga/effects";
import {addJoke, fetchAddJoke} from "../actionCreators/actions";

function* addJokeWorker() {
  let result = {};
  yield fetch("https://api.chucknorris.io/jokes/random")
    .then(res => res.json())
    .then(data => {
      result = {
        id: data.id,
        icon: data["icon_url"],
        value: data.value
      }
    });
  yield put(addJoke(result));
}

export function* addJokeWatcher() {
  yield takeEvery("fetchAddJoke", addJokeWorker);
}

