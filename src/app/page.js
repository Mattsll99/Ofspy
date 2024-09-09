"use client"

import Image from "next/image";
import styles from "./page.module.css";
import styled from "styled-components";
import Header from "@/components/Header";
import Section1 from "@/pages/Section1";
import Banner from "@/components/Banner";
import Section2 from "@/pages/Section2";
import Bottom from "@/pages/Bottom";
import Dashboard from "@/pages/Dashboard";
import Payment from "@/pages/Payment";
import { useState } from "react";

export default function Home() {
  
  return (
    <Container>
      
      <Wrapper style={{background:"#d2e1ff"}}>
        <Banner />
        <Header />
        <Background>
        <Circle></Circle>
      </Background>
      <Section1 />
      <Section2 />
      
      <Bottom />
      
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  height: auto; 
  width: 100vw; 
  display: flex; 
  flex-direction: column;
  font-family: poppins
`;

const Wrapper = styled.div`
  height: auto; 
  width: 100%; 
  display: flex; 
  flex-direction: column;
`;

const Background = styled.div`
  height: 100vh; 
  width: 100vw;
  //background: #91B8FF;
  position: fixed; 
  top: 0;
  z-index: 1;
  background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(145,184,255,1) 100%);
  display: flex; 
  flex-direction: column; 
  align-items : center;
`;

const Circle = styled.div`
  width: 1000px;
  height: 700px; 
  background: #ffffff;
  border-bottom-right-radius: 500px; 
  border-bottom-left-radius: 500px;
  filter: blur(30px);
`;

const CoverPayment = styled.div`
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










//<Wrapper>
      //<Banner />
      //<Header />
      //<Background>
        //<Circle></Circle>
      //</Background>
      //<Section1 />
      //<Section2 />
      //<Bottom />
      //</Wrapper>




//<Wrapper style={{background:"#d2e1ff"}}>
      //<Banner />
      //<Header />
      //<Dashboard />
      //</Wrapper>





      //<Wrapper style={{background:"#d2e1ff"}}>
        //<Banner />
        //<Header />
        //<Payment />
      //</Wrapper>