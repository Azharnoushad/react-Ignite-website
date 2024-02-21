import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNewGames,
  fetchPopularGames,
  fetchUpcomingGames,
} from "./redux/gameSlice/gameSlice";
const App = () => {
  const state = useSelector((state) => state.Games);



  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopularGames());
    dispatch(fetchUpcomingGames());
    dispatch(fetchNewGames());
  }, []);




  return <div>App</div>;
};

export default App;
