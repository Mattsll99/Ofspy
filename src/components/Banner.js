import React from 'react'
import styled, { keyframes } from 'styled-components'

const Banner = () => {
  // Create an array with repeated content
  const wraps = new Array(10).fill(null).map((_, index) => (
    <Wrap style={{marginLeft: "80px"}} key={index}>
      <Text>BE TOP LISTED</Text>
      <Text style={{ marginLeft: "20px" }}>•</Text>
      <Text style={{ marginLeft: "20px" }}>CLICK HERE</Text>
      <Image src="../assets/white_click.png" />
    </Wrap>
  ));

  return (
    <Container>
      <ScrollWrapper>
        {wraps}
        {wraps} {/* Duplicate to ensure continuous scrolling */}
      </ScrollWrapper>
    </Container>
  )
}

export default Banner

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

const Container = styled.div`
  height: 30px; 
  width: 100%; 
  position: fixed; 
  top: 0; 
  background: #222222;
  z-index: 8;
  overflow: hidden; /* Hide overflow to create the scroll effect */
  //display: flex; 
  align-items: center;
`;

const ScrollWrapper = styled.div`
  display: flex;
  white-space: nowrap; /* Prevent line breaks */
  animation: ${scroll} 40s linear infinite; /* Animation for infinite scroll */
  display: flex; 
  align-items: center;
  flex-direction: row;
  padding-top: 5px;
  cursor: pointer;
  
  &:hover {
    animation-play-state: paused; /* Pause scrolling on hover */
  }
`;

const Wrap = styled.div`
  display: inline-flex; /* Inline to align in a single row */
  align-items: center;
`;

const Text = styled.div`
  font-size: 12px; 
  color: #ffffff;
`;

const Image = styled.img`
  height: 15px; 
  width: auto;
  margin-left: 7px;
`;