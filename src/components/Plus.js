import React from 'react'
import styled from 'styled-components'

const Plus = () => {
  return (
    <Container>
      <Tiret></Tiret>
      <Tiret2></Tiret2>
    </Container>
  )
}

export default Plus

const Container = styled.div`
  height: 20px; 
  width: 20px; 
  border-radius: 40px; 
  border: solid 2px #5D93FF;
  position: relative;
`;

const Tiret = styled.div`
  height: 100%; 
  width: 2px; 
  background: #5D93FF;
  position: absolute; 
  top: 0; 
  bottom: 0; 
  margin-top: auto; 
  margin-bottom: auto;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto;
`; 

const Tiret2 = styled(Tiret)`
  transform: rotate(90deg);
`;