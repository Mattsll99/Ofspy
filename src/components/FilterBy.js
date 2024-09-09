import React from 'react'
import styled from 'styled-components'

const FilterBy = ({text}) => {
  return (
    <Container>
      <Text>{text}</Text>
      <Arrow src="../assets/fleche.png"/>
    </Container>
  )
}

export default FilterBy

const Container = styled.div`
  height: 36px; 
  width: auto; 
  background: #95A4C2; 
  border-radius: 100px;
  color: #252525;
  font-size: 14px;
  padding-top: 10px;
  padding-bottom: 10px; 
  padding-left: 10px; 
  padding-right: 10px;
  margin-left: 5px;
  //border: solid 2px #ffffff;
  cursor: pointer;
  display: flex; 
  flex-direction: row;
  align-items: center;
`;

const Text = styled.text``;

const Arrow = styled.img`
  height: 15px; 
  width: auto; 
  margin-left: 15px;
`;