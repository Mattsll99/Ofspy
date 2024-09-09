import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Payment from './Payment';

const Bottom = () => {
  
  const [display, setDisplay] = useState(false)

  const handleDisplay = () => {
    setDisplay(true)
  }

  const handleClose = () => {
    setDisplay(false)
  }

  const [hoverTime, setHoverTime] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;
    if (isHovered) {
      interval = setInterval(() => {
        setHoverTime((prevTime) => Math.min(prevTime + 0.1, 2));
      }, 100);
    } else {
      setHoverTime(0);
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <Wrapper>
      {
        display === true &&
        <CoverPayment onClick={handleClose}>
        <Payment />
      </CoverPayment>

      }
    <Container onClick={handleDisplay}>
      <Text
        hoverTime={hoverTime}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        BECOME A TOP PLAYER
      </Text>
    </Container>
    </Wrapper>
  );
};

export default Bottom;

const Wrapper = styled.div`
  height: auto; 
  width: auto; 
  z-index: 3;
  margin-top: 100px;
`;

const Container = styled.div`
  width: 100%;
  //height: 300px;
  height: 30vw;
  background-color: #222222;
  border-top: solid 2px #222222;
  //z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 200px;
  font-style: italic;
  font-weight: 700;
  z-index: 2;
`;

const shake = keyframes`
  0% { transform: translateX(0); }
  20% { transform: translateX(-2px); }
  40% { transform: translateX(2px); }
  60% { transform: translateX(-2px); }
  80% { transform: translateX(2px); }
  100% { transform: translateX(0); }
`;

const Text = styled.div`
  //-webkit-text-stroke: 2px #222222;
  color: ${({ hoverTime }) =>
    `rgb(${255 + hoverTime * (-255 + 244)}, ${255 + hoverTime * (-255 + 145)}, ${255 + hoverTime * (-255 + 255)})`};
  //font-size: 100px;
  font-size: 8vw;
  cursor: pointer;

  ${({ hoverTime }) => css`
    animation: ${shake} ${Math.max(0.1, 1 - hoverTime)}s infinite linear;
  `}
`;

const CoverPayment = styled.div`
  height: 100vh; 
  width: 100vw;
  background: rgba(53,53,53,0.8);
  display: flex; 
  //align-items: center; 
  justify-content: center; 
  //padding-top: 160px;
  position: fixed; 
  top: 0; 
  z-index: 50;
  @media(max-width: 640px) {
    align-items: start;
    //justify-content: start;
  }
`;