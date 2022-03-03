import {useDispatch, useSelector} from "react-redux";
import {fetchAddJoke} from "./store/actionCreators/actions";
import {Button, Joke, Jokes, MainDiv} from "./styles";

const App = () => {
  const jokes = useSelector(state => state["jokesList"]);
  const dispatch = useDispatch();

  return (
    <MainDiv>
      <Button onClick={() => dispatch(fetchAddJoke())}>MORE!!!!</Button>
      <Jokes>
        {
          jokes.map(joke => (
            <Joke key={joke.id}>
              <img src={joke.icon}/>
              <p>{joke.value}</p>
            </Joke>
          ))
        }
      </Jokes>
    </MainDiv>
  );
}

export default App;
