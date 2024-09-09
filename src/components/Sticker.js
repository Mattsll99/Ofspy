import React from 'react'
import styled from 'styled-components'

const Sticker = ({source}) => {
  return (
    <Container>
      <Icon src={source}/>
    </Container>
  )
}

export default Sticker

const Container = styled.div`
  height: 60px; 
  width: 60px; 
  border-radius: 20px; 
  background: #F491FF; 
  display: flex; 
  align-items: center; 
  justify-content: center;
`;

const Icon = styled.img`
  height: 40px; 
  width: auto;
`;