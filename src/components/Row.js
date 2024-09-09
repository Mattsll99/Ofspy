import React from 'react'
import styled from 'styled-components'

const Row = ({background, name, gender, ethnicity, age, country, oflikes, ofprice, igfollowers, xfollowers, tiktokfollowers, twitchfollowers}) => {
  return (
    <Container style={{background:background}}>
      <Box>{name}</Box>
      <Box>{gender}</Box>
      <Box>{ethnicity}</Box>
      <Box>{age}</Box>
      <Box>{country}</Box>
      <Box></Box>
      <Box>
        <Wrapper>Discover</Wrapper>
      </Box>
      <Box>
        <Bubble>
          <Fleche src="../assets/white_arrow.png"/>
        </Bubble>
      </Box>
      <Box>{oflikes}</Box>
      <Box>{ofprice}</Box>
      <Box>
      <Wrapper>Discover</Wrapper>
      </Box>
      <Box>
      <Bubble>
          <Fleche src="../assets/white_arrow.png"/>
        </Bubble>
      </Box>
      <Box>{igfollowers}</Box>
      <Box>
      <Bubble>
          <Fleche src="../assets/white_arrow.png"/>
        </Bubble>
      </Box>
      <Box>{xfollowers}</Box>
      <Box>🤷‍♀️</Box>
      <Box>{tiktokfollowers}</Box>
      <Box>🤷‍♀️</Box>
      <Box>{twitchfollowers}</Box>
    </Container>
  )
}

export default Row

const Container = styled.div`
  height: auto; 
  //width: 300vw;
  width: 4000px; 
  display: flex; 
  flex-direction: row; 
  position: relative; 
  white-space: nowrap;
  //background: #EAF1FF;
`;

const Box = styled.div`
  height: 60px; 
  width: 200px; 
  //border: solid 2px red;
  //background: #ffffff;
  display: flex; 
  align-items: center; 
  justify-content: center;
  //border: solid 1px red;
`;


const Profile = styled.div`
  height: 40px; 
  width: 40px;
  background: red; 
  border-radius: 80px; 
  position: absolute; 
  left: 20%; 
  top: 0; 
  bottom: 0; 
  margin-top: auto; 
  margin-bottom: auto;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: auto;
  width: auto; 
  padding-left: 10px; 
  padding-right: 10px; 
  padding-top: 5px; 
  padding-bottom: 5px;
  border-radius: 100px; 
  background: #F491FF;
  color: #ffffff;
  cursor: pointer;
`; 

const Bubble = styled.div`
  height: 30px; 
  width: 30px; 
  border-radius: 80px; 
  display: flex; 
  align-items: center; 
  justify-content: center;
  background: #F491FF;
  cursor: pointer;
  padding: 7px;
`;

const Fleche = styled.img`
  height: 100%; 
  width: auto;
  transform: rotate(220deg);
`;

// mettre la profile picture en absolute à gauche 