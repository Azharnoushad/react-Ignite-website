import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNewGames,
  fetchPopularGames,
  fetchUpcomingGames,
} from "../redux/gameSlice/gameSlice";
import Game from "../components/Game";
import styled from "styled-components";
import { motion } from "framer-motion";
import { popularGamesUrl } from "../api";

const Home = () => {
  const { popularGames, upcomingGames, newGames } = useSelector(
    (state) => state.Games
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopularGames());
    dispatch(fetchUpcomingGames());
    dispatch(fetchNewGames());
  }, [dispatch]);

  return (
    <GameList>
      <h2>Upcomig Games</h2>
      <Games >
        {upcomingGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>

      <h2>Popular Games</h2>
      <Games>
        {popularGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id} 
          />
        ))}
      </Games>

      <h2>New Games</h2>
      <Games>
        {newGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
