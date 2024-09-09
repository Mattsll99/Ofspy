import Sticker from '@/components/Sticker';
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Payment from './Payment';

const Section1 = () => {
  
  const [display, setDisplay] = useState(false)

  const handledisplay = () => {
    setDisplay(true)
  }

  const handleClose = () => {
    setDisplay(false)
  }

  return (
    <Container>
      {display === true &&
      <CoverPayment onClick={handleClose}>
        <Payment />
      </CoverPayment>
      }
      <Top>
        <TopButton>
          <Cover>
            <Logo src="../assets/of_white_logo.png" />
          </Cover>
          <Text>Launch on 8 October</Text>
        </TopButton>
        <Title>Spy millions of</Title>
        <Title style={{ marginTop: '-15px' }}>content creators</Title>
        <Subtitle>
          Spy them all, their content, their acquisition strategies, their agencies
          <br />
          Grow as a creator by copying the top players
        </Subtitle>
        <Button2 onClick={handledisplay}>Get Lifetime Access</Button2>
        <Panel>
          <Click>
            <Clicky />
          </Click>
          <Warning>Limited available seats before launch</Warning>
        </Panel>
      </Top>
      <Bottom>
        <Circle>
          <Profile src="../assets/bella.jpg"/>
        </Circle>
        <Circle style={{marginLeft:"-8px"}}>
          <Profile src="../assets/tyga.jpeg"/>
        </Circle>
        <Circle style={{marginLeft:"-8px"}}>
        <Profile src="../assets/coco.jpg"/>
        </Circle>
        <Circle style={{marginLeft:"-8px"}}>
        <Profile src="../assets/bhad.webp"/>
        </Circle>
        <Circle style={{marginLeft:"-8px"}}>
        <Profile src="../assets/pia.webp"/>
        </Circle>
      </Bottom>
      <Gallery>
        <Sticky>
          <Sticker source="../assets/of_white_logo.png"/>
        </Sticky>
        <Sticky2>
          <Sticker source="../assets/fansly_heart.png"/>
        </Sticky2>
        <Sticky3>
        <Sticker source="../assets/patreon.png"/>
        </Sticky3>
        <Sticky4>
        <Sticker source="../assets/mym_logo.png"/>
        </Sticky4>
      </Gallery>
    </Container>
  );
};

export default Section1;

// Keyframe Animations
const fadeInOut = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

// Styled Components
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  //z-index: 3;
  z-index: 3;
  margin-top: 60px;
  align-items: center;
  padding-top: 100px;
  //position: fixed;
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
  z-index: 10;
`;

const Gallery = styled.div`
  position: absolute; 
  height: 100%; 
  width: 100%;
  //background: red;
`;

const Sticky = styled.div`
  position: absolute;
  margin-left: 20vw;
  transform: rotate(3deg);
  @media(max-width: 750px) {
    z-index: -1;
    filter:blur(2px);
  }
`;

const Sticky2 = styled.div`
  position: absolute; 
  right: 20vw;
  margin-top: 50px;
  transform: rotate(-15deg);
  @media(max-width: 955px) {
    right: 15vw;
  }
  @media(max-width: 808px) {
    right: 10vw;
  }
  @media(max-width: 750px) {
    z-index: -1;
    filter:blur(2px);
  }
`;

const Sticky3 = styled.div`
  position: absolute; 
  left: 15%;
  margin-top: 170px;
  transform: rotate(-20deg);
  @media(max-width: 970px) {
    left: 8%;
  }
  @media(max-width: 750px) {
    z-index: -1;
    filter:blur(2px);
    margin-top: 100px;
  }
`; 

const Sticky4 = styled.div`
  position: absolute; 
  right: 18vw; 
  margin-top: 220px; 
  transform: rotate(20deg);
  @media(max-width: 1175px) {
    right: 10vw;
  }
  @media(max-width: 960px) {
    right: 6vw;
  }
  @media(max-width: 850px) {
    right: 3vw;
  }
  @media(max-width: 799px) {
    margin-top: 190px;
  }

  @media(max-width: 750px) {
    z-index: -1;
    filter:blur(2px);
  }
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

const TopButton = styled.div`
  height: 35px;
  width: 230px;
  border: 1px solid #f491ff;
  border-radius: 100px;
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  margin-bottom: 20px;
  @media(max-width: 578px) {
    border: 1px solid #2e2e2e;
    background: #2E2E2E; 
    color: #ffffff;
  }
`;

const Cover = styled.div`
  height: 100%;
  width: 50px;
  background: #f491ff;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  height: 20px;
  width: auto;
`;

const Text = styled.span`
  font-size: 14px;
  color: #1e1e1e;
  font-weight: 500;
  margin-left: 7px;
  @media(max-width: 578px) {
    color: #ffffff;
  }
`;

const Title = styled.h1`
  color: #2e2e2e;
  font-size: 60px;
  font-weight: 500;
  margin: 5px 0;
  @media(max-width: 750px) {
    font-size: 7vw;
  }
`;

const Subtitle = styled.p`
  color: #797979;
  font-size: 18px;
  line-height: 1.5;
  @media(max-width: 750px) {
    font-size: 2.5vw;
  }
  @media(max-width: 750px) {
    color: #2e2e2e;
  }
  //margin: 20px 0;
`;


const Panel = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Click = styled.div`
  height: 14px;
  width: 14px;
  border: 1px solid #ffb356;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeInOut} 2s infinite;
`;

const Clicky = styled.div`
  height: 8px;
  width: 8px;
  background: #ffb356;
  border-radius: 50%;
`;

const Warning = styled.span`
  font-size: 12px;
  color: #ffb356;
  font-weight: 500;
  margin-left: 10px;
`;

const Button2 = styled.div`
  height: 50px; 
  width: 215px; 
  padding: 20px; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  color: #ffffff; 
  background: #F491FF; 
  border-radius: 100px;
  margin-top: 30px;
  margin-left: 20px;
  cursor: pointer;
  z-index: 6;
`;

const Bottom = styled.div`
  height: auto; 
  width: auto; 
  display: flex; 
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

const Circle = styled.div`
  height: 30px; 
  width: 30px; 
  border: solid 2px #91B8FF;
  border-radius: 100px;
  background: #ffffff;
  overflow: hidden;
`; 

const Profile = styled.img`
  height: auto; 
  width: 100%;
`;