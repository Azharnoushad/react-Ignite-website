import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { smallImage } from "../util";
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetails = ({ pathId }) => {
  const getPlatFormImage = (platforms) => {
    switch (platforms) {
      case "PlayStation 5":
        return playstation;
      case "steam":
        return steam;
      case "Xbox One":
        return xbox;
      case "Nintendo Switch":
        return nintendo;
      case "IOS":
        return apple;
      default:
        return gamepad;
    }
  };
  const navigate = useNavigate();
  const state = useSelector((state) => state.GameDetails);

  // exit detail handler----------------------------------------------------------------

  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      navigate("/");
    }
  };

  // get stars------------------------
  const getStarts = () => {
    const stars = [];
    const rating = Math.floor(state.gameDetails.rating);

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starFull} />);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty} />);
      }
    }
    return stars;
  };
  return (
    <>
      {!state.isLoading && (
        <CardShadow onClick={exitDetailHandler} className="shadow">
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>
                  {state.gameDetails.name}
                </motion.h3>
                {getStarts()}
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {state.gameDetails?.platforms?.map((data) => (
                    <img
                      key={data.platform.id}
                      src={getPlatFormImage(data.platform.name)}
                    />
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                src={state.gameDetails.background_image}
                alt=""
                layoutId={`image${pathId}`}
              />
            </Media>
            <Description>
              <p>{state.gameDetails.description_raw}</p>
            </Description>
            <div className="gallery">
              {state.screenshots?.results?.map((shots) => (
                <img
                  src={smallImage(shots.image, 1280)}
                  alt="game"
                  key={shots.id}
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.2rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;
export default GameDetails;
