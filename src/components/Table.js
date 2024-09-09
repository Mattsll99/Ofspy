import React from 'react'
import styled from 'styled-components'
import FilterBy from './FilterBy'
import Row from './Row'

const Table = () => {
  return (
    <Container>
      <Top>
      <Box>🆔 Name</Box>
      <Box>👨🧑 Gender</Box>
      <Box>👩🏽‍🦳👩🏾‍🦱👱🏼‍♀️ Ethnicity</Box>
      <Box>🎂 Age</Box>
      <Box>🇺🇸 Country</Box>
      <Box>💰 Revenue/m</Box>
      <Box>🏢 Agency</Box>
      <Box>Onlyfans</Box>
      <Box>💙 OF. Likes</Box>
      <Box>💳 OF. Sub. Price</Box>
      <Box>📣 Acquisition System</Box>
      <Box>Instagram</Box>
      <Box>💙 IG Followers</Box>
      <Box>X</Box>
      <Box>💙 X Followers</Box>
      <Box>Tiktok</Box>
      <Box>💙 Tiktok Followers</Box>
      <Box>Twitch</Box>
      <Box>💙 Twitch Followers</Box>
      <Box></Box>
      </Top>
      <Wrapper>
        <Row 
        background="#EAF1FF"
        name="Amber Rose"
        gender="female"
        ethnicity="Mixed-Black"
        age="40"
        country="USA"
        oflikes="121.4k"
        ofprice="$9"
        igfollowers="24,2M"
        xfollowers="3.7M"
        />
        <Row 
        name="Jack Doherty"
        gender="male"
        ethnicity="white"
        age="20"
        country="USA"
        oflikes="17.3k"
        ofprice="$49"
        igfollowers="2,7M"
        tiktokfollowers="9.9M"
        xfollowers="108.1k"
        />
        <Row 
        background="#EAF1FF"
        name="Cat Zingano"
        gender="female"
        ethnicity="Mixed-Latina"
        age="42"
        country="USA"
        igfollowers="500k"
        xfollowers="251.3k"
        oflikes="64.4k"
        ofprice="Free"
        />
        <Row 
        name="Mia Khalifa"
        gender="female"
        ethnicity="Middle Eastern"
        age="31"
        country="USA"
        igfollowers="26,3M"
        oflikes="457.3k"
        ofprice="$12"
        xfollowers="6.2M"
        tiktokfollowers="38.6M"
        twitchfollowers="429,2k"
        />
        <Row 
        background="#EAF1FF"
        name="Lana Rhoades"
        gender="female"
        ethnicity="White"
        age="27"
        country="USA"
        igfollowers="15,4M"
        tiktokfollowers="618,7k"
        xfollowers="0"
        oflikes="675.6k"
        />
        <Row 
        name="Bhad Bhabie"
        ethnicity="Mixed-White"
        gender="female"
        age="21"
        country="USA"
        oflikes="1.77M"
        ofprice="$23.99"
        igfollowers="15,9M"
        tiktokfollowers="6.9M"
        xfollowers="783.9k"
        twitchfollowers="0"
        />
        <Row 
        background="#EAF1FF"
        name="Sophie Dee"
        gender="female"
        ethnicity="White"
        age="40"
        country="USA"
        oflikes="2.93M"
        ofprice="$4.99"
        igfollowers="12,8M"
        xfollowers="1.7M"
        twitchfollowers="0"
        tiktokfollowers="0"
        />
        <Row 
        name="Ana Cherì"
        ethnicity="Mixed-Latina"
        gender="female"
        age="38"
        country="USA"
        igfollowers="12M"
        xfollowers="0"
        oflikes="1.61M"
        ofprice="$29.99"
        tiktokfollowers="210.9k"
        twitchfollowers="0"
        />
        <NewRow>UNLOCK 1M+ PROFILES</NewRow>
      </Wrapper>
      <Body>
        <TopBody>
          
        </TopBody>
      </Body>
    </Container>
  )
}

export default Table

const Container = styled.div`
  //height: 100vh; 
  width: auto;
  //margin-top: 20px;
  display: flex; 
  flex-direction: column; 
  overflow-x: scroll;
  //background: red;
  white-space: nowrap;
  color: #252525;
  font-size: 14px;
`;

const Top = styled.div`
  height: auto; 
  //width: 300vw; 
  width: 4000px;
  display: flex; 
  flex-direction: row; 
  align-items: center;
  overflow-x:scroll;
  white-space: nowrap;
`;


const Body = styled.div`
  height: auto; 
  width: auto; 
  display: flex; 
  flex-direction: column;
  white-space: nowrap;
`;

const TopBody = styled.div`
  height:auto; 
  width: auto; 
  display: flex; 
  flex-direction: row;
  margin-top: 40px;
  background: green;
`;

const Box = styled.div`
  height: 40px; 
  width: 200px; 
  //border: solid 2px red;
  //background: #ffffff;
  display: flex; 
  align-items: center; 
  justify-content: center;
  //background: #ffffff; 
  //border: solid 1px blue;
`;

const Wrapper = styled.div`
  height: auto; 
  width: 200vw; 
  display: flex; 
  flex-direction: column;
  white-space: nowrap;
`;

const NewRow = styled.div`
  height: 60px; 
  width: 300vw; 
  display: flex; 
  flex-direction: row; 
  position: relative; 
  background: red;
  align-items: center; 
  justify-content: center;
  color: #ffffff; 
  //font-size: 50px;
  //background: #EAF1FF;
`;