import React from 'react'
import styled from 'styled-components'

const Popup = () => {

  const stopPropagation = (e) => {
    e.stopPropagation();
  }

  return (
    
      <Wrapper onClick={stopPropagation}>
        <Icon>💔</Icon>
        <Title>You're out of credit</Title>
        <Subtitle>Your free access is over. You can fix it!</Subtitle>
        <Button>Get Lifetime Access</Button>
      </Wrapper>
    
  )
}

export default Popup



const Wrapper = styled.div`
  position: fixed; 
  top: 0; 
  bottom: 0; 
  margin-top: auto; 
  margin-bottom: auto; 
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto;
  height: 270px; 
  width: 400px; 
  background: #ffffff;
  border-radius: 20px;
  display: flex; 
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  padding-left: 20px; 
  padding-right: 20px;
  padding-bottom: 20px; 
`;

const Icon = styled.text`
  font-size: 50px;
`;

const Title = styled.text`
  color: #252525;
  font-size: 20px;
`; 

const Subtitle = styled.text`
  color: #646464;
  font-size: 14px;
`; 

const Button = styled.div`
  height: 50px; 
  width: 100%; 
  background: rgba(244, 145, 255, 0.3);  /* Set background opacity to 0.3 */
  border: solid 2px #F491FF;  /* Fully opaque border */
  color: #F491FF;  /* Fully opaque text */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  border-radius: 10px;
  cursor: pointer;
`;