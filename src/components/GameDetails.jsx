import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const GameDetails = () => {
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
  return (
    <>
      {!state.isLoading && (
        <CardShadow onClick={exitDetailHandler} className="shadow">
          <Detail>
            <Stats>
              <div className="rating">
                <h3>{state.gameDetails.name}</h3>
                <p>Rating: {state.gameDetails.rating}</p>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {state.gameDetails?.platforms?.map((data) => (
                    <h3 key={data.platform.id}>{data.platform.name}</h3>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <img src={state.gameDetails.background_image} alt="" />
            </Media>
            <Description>
              <p>{state.gameDetails.description_raw}</p>
            </Description>
            <div className="gallery">
              {state.screenshots?.results?.map((shots) => (
                <img src={shots.image} alt="game" key={shots.id} />
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
