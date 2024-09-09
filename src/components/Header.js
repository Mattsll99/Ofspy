import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Container>
      <Logo src="../assets/logo_ofspy.png"/>
      <Title style={{marginLeft:"10px"}}>OF<Title style={{color:"#F491FF"}}>spy</Title></Title>
    </Container>
  )
}

export default Header

const Container = styled.div`
  height: 60px; 
  width: 100%; 
  display: flex; 
  flex-direction: row;
  border-bottom: solid 0.5px #E5E5E5;
  position: fixed; 
  top: 30px; 
  z-index: 8;
  background: #ffffff;
  align-items: center;
  padding: 30px;
  //z-index: 4;
`;

const Logo = styled.img`
  height: 30px; 
  width: auto;
  border-radius: 8px;
`;

const Title = styled.text`
  color: #969696;
  font-size: 20px;
`;

//7AA8FF
//969696