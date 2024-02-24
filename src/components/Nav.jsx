import React, { useState } from "react";
//Animation
import styled from "styled-components";
import { motion, useScroll } from "framer-motion";
import logo from "../img/logo.svg";
import { useDispatch } from "react-redux";
import {
  clearGameSearch,
  fetchSearchGames,
} from "../redux/gameSlice/gameSlice";

const Nav = () => {
  const dispatch = useDispatch();

  const [gameName, setGameName] = useState("");

  const searchGameHandler = (e) => {
    e.preventDefault();

    dispatch(fetchSearchGames(gameName));
    setGameName("");
  };
  const clearSearchHandler = () => {
    dispatch(clearGameSearch());
  };
  return (
    <StyledNav>
      <Logo onClick={clearSearchHandler}>
        <img src={logo} alt="logo" />
        <h1>Ignite</h1>
      </Logo>
      <form className="search">
        <input
          type="text"
          onChange={(e) => setGameName(e.target.value)}
          value={gameName}
        />
        <button type="submit" onClick={searchGameHandler}>
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`;

export default Nav;
