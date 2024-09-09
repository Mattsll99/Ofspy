import React from 'react'
import styled from 'styled-components'

const CreatorBox = () => {
  return (
    <Container>
      <Profile src="../assets/amber_rose.jpg"/>
      <Top>Amber Rose</Top>
      <Body>
        <Revenue>$0.8M/m</Revenue>
        <Circle>
         <Cross src="../assets/plus.png"/>
        </Circle>
      </Body>
    </Container>
  )
}

export default CreatorBox

const Container = styled.div`
  height: auto; 
  width: 260px; 
  border-radius: 10px;
  //background: #ffffff;
  height: auto;
  background: #C1D6FF;
  display: flex; 
  flex-direction: column;
  padding: 15px;
  cursor: pointer;
`;

const Profile = styled.img`
  height: 150px; 
  width: auto;
  object-fit: cover;
  border-radius: 7px;
`;

const Top = styled.div`
  height: auto; 
  width: 100%;
  color: #252525; 
  margin-top: 20px;
  font-size: 14px;
`;

const Body = styled.div`
  height: auto; 
  width: 100%; 
  display: flex; 
  flex-direction: row; 
  align-items: end;
  margin-top: 20px;
  position: relative;
`;

const Revenue = styled.text`
  font-size: 22px;
`;

const Circle = styled.div`
  height: 40px; 
  width: 40px; 
  border-radius: 80px;
  display: flex; 
  align-items: center; 
  justify-content: center;
  background: #F491FF;
  position: absolute; 
  right: 0;
`;

const Cross = styled.img`
  height: 100%; 
  width: auto;
`;