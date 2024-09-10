import Plus from '@/components/Plus'
import Link from 'next/link'
import React from 'react'
import styled, { keyframes } from 'styled-components'

const Payment = ({ onClick }) => {
  return (
    
      <Wrapper onClick={e => e.stopPropagation()}>
        <Top>
          <Text>LIFETIME ACCESS</Text>
        </Top>
        <PriceDiv>
          <Box>
            <Tiret></Tiret>
          <Price style={{color:"#B7B7B7"}}>$410</Price>
          </Box>
          <Box>
          <Price>$89</Price>
          </Box>
        </PriceDiv>
        <SubDiv>
        <Click>
            <Clicky />
          </Click>
          <Warning>Limited access before the launch on 09/28</Warning>
        </SubDiv>
        <Badge>Everything you need to become a top player 🔥</Badge>
        <Span>FOR LIFE</Span>
        <Line style={{marginTop:"20px"}}>
          <Plus />
          <LineText>Spy millions of creators, agencies and competitors</LineText>
        </Line>
        <Line style={{marginTop:"10px"}}>
        <Plus />
        <LineText>Unlimited access to their acquisition systems</LineText>
        </Line>
        <Line style={{marginTop:"10px"}}>
        <Plus />
        <LineText>Unlimited access to their strategies </LineText>
        </Line>
        <Line style={{marginTop:"10px"}}>
        <Plus />
        <LineText>Unlimited access to their data</LineText>
        </Line>
        <Wrap>
        <Link style={{width: "100%"}} href="https://buy.stripe.com/9AQ7ug6hS7d74Eg6op" target='_blank'>
        <Button>Start Winning</Button>
        </Link>
        </Wrap>
      </Wrapper>
    
  )
}

export default Payment

const Container = styled.div`
  height: 100vh; 
  width: 100vw;
  background: rgba(53,53,53,0.8);
  display: flex; 
  //align-items: center; 
  justify-content: center; 
  //padding-top: 160px;
  position: fixed; 
  top: 0; 
  z-index: 50;
`;

const Wrap = styled.div`
  height: auto; 
  width: 100%;
  //background: red;
  display: flex; 
  align-items: center;
  justify-content: center;
  padding-left: 38px;
  z-index: 2;
`;

const fadeInOut = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

const Wrapper = styled.div`
  height: 550px; 
  width: 440px; 
  background: #ffffff; 
  border-radius: 20px;
  display: flex; 
  flex-direction: column; 
  align-items: center;
  border: solid 2px #5D93FF;
  color: #252525;
  padding-bottom: 20px;
  //margin-top: 160px;
  @media(max-width: 640px) {
    height: auto;
    width: auto;
  }
  //z-index: 10;
`;

const Top = styled.div`
  height: auto; 
  width: 100%; 
  padding: 20px; 
  font-size: 16px;
`;

const Text = styled.text``;

const PriceDiv = styled.div`
  height: auto; 
  width: 100%; 
  display: flex;
  flex-direction: row;
  align-items: center; 
  justify-content: center;
  padding-left: 40px;
  padding-right: 40px;
`;

const Box = styled.div`
  height: auto;
  width: 50%; 
  display: flex;
  align-items: center; 
  justify-content: center; 
  position: relative;
  color: #252525;
  //background: red;
`;

const Tiret = styled.div`
  height: 2px; 
  width: 80%; 
  position: absolute; 
  top: 0; 
  bottom: 0; 
  margin-top: auto; 
  margin-bottom: auto; 
  background: #252525;
`;

const Price = styled.text`
  font-size: 60px; 
  font-weight: 300;
`; 

const SubDiv = styled.div`
  height: auto; 
  width: 100%; 
  display: flex; 
  flex-direction: row; 
  align-items: center; 
  justify-content: center;
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

const Badge = styled.div`
  height: 50px; 
  width: 90%; 
  background: rgba(93, 147, 255, 0.2);
  border: solid 2px #5D93FF; 
  color: #397AFC;
  margin-top: 20px;
  border-radius: 10px;
  display: flex; 
  align-items: center; 
  justify-content: center;
  font-size: 14px;
`;

const Span = styled.text`
  margin-top: 30px;
  color: #9E9E9E;
`;

const Line = styled.div`
  height: auto; 
  width: 100%; 
  display: flex; 
  flex-direction: row; 
  align-items: center;
  padding-left: 20px; 
  padding-right: 20px;
`; 

const LineText = styled.text`
  font-size: 14px; 
  margin-left: 10px;
`;

const Button = styled.div`
  height: 50px; 
  width: 90%;
  background: #F491FF; 
  border: solid 2px #93579A; 
  color: #632E69;
  border-radius: 10px;
  margin-top: 30px;
  font-size: 14px;
  display: flex; 
  align-items: center; 
  justify-content: center;
  cursor: pointer;
`;