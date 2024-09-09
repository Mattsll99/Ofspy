import React from 'react'
import styled from 'styled-components'

const Section2 = () => {
  return (
    <Container>
      <Wrapping>
      <Wrapper> </Wrapper>
      <Cover src="../assets/mock_app.png"/>
      </Wrapping>
    </Container>
  )
}

export default Section2

const Container = styled.div`
  //margin-top: 75vh;
  height: auto; 
  width: 100vw; 
  background: transparent; 
  display: flex; 
  align-items: center; 
  justify-content: center;
  background: transparent;
  padding-top: 30px;
  //z-index: 7;
  
  //padding-top: 10px;
`;

const Wrapping = styled.div`
  height: auto; 
  width: 80%;
  position: relative;
  display: flex;
`; 

const Wrapper = styled.div`
  width: 100%; 
  height: 100%; 
  background: #F491FF;
  //height: 80%;
  z-index: 1;
  //filter: blur(10px);
  //z-index: 1;
  position: absolute; 
  filter:blur(50px);
`;


const Cover = styled.img`
  cursor: pointer;
  width: 100%; 
  //height: inherit;
  //height: 80%;
  //background: red;
  z-index: 1;
`;