import CreatorBox from '@/components/CreatorBox'
import FilterBy from '@/components/FilterBy'
import Popup from '@/components/Popup'
import Table from '@/components/Table'
import React, { useState } from 'react'
import styled from 'styled-components'

const Dashboard = () => {
  
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Container>
      {open === true &&
      <Cover onClick={handleClose}>
        <Popup />
      </Cover>
      }
      <Top>
        <Button>
          <LeftSide>
            <Text>🧑 Creators</Text>
          </LeftSide>
          <RightSide>
          <Text style={{color:"#A9B4CB"}}>🏢 Agencies</Text>
          </RightSide>
        </Button>
      </Top>
      <Body>
        
        <Right>
          <TopRight>
            <Menu>
              <Search>
                <Icon src="../assets/grey_loupe.png"/>
                <SearchText>Search</SearchText>
              </Search>
              <Ranking></Ranking>
            </Menu>
          </TopRight>
          <BodyRight>
            <TopBodyRight>
            <FilterBy text="🇺🇸 Country"/>
            <FilterBy text="👩🏽‍🦳👩🏾‍🦱👱🏼‍♀️ Ethnicity"/>
            <FilterBy text="🎂 Age"/>
            <FilterBy text="👨🧑 Gender"/>
            <FilterBy text="📺 Platform(s)"/>
            <FilterBy text="💰 Revenue"/>
            <FilterBy text="🏢 Agency"/>
            <FilterBy text="💳 Sub. Price"/>
            <FilterBy text="🛣 Main Source of Traffic"/>
            </TopBodyRight>
          </BodyRight>
          <BodyRight>
            <Table />
          </BodyRight>
        </Right>
      </Body>
    </Container>
  )
}

export default Dashboard

const Container = styled.div`
  margin-top: 90px; 
  width: 100vw; 
  height: auto; 
  background: #d2e1ff;
  //overflow-x: scroll;
`;

const TopBodyRight = styled.div`
  height: auto; 
  width: auto; 
  display: flex; 
  flex-direction: row; 
  align-items: center;
  //background: red;
  overflow-x: scroll;
`;

const LineBox = styled.div`
  height: 40px; 
  width: auto; 
  background: blue;
`;

const Top = styled.div`
  height: 100px; 
  width: 100%; 
  display: flex; 
  flex-direction: row; 
  padding: 30px;
  border-bottom: solid 1px #939393;
`;

const Button = styled.div`
  height: 50px; 
  width: 290px; 
  border: solid 2px #5D93FF;
  border-radius: 100px;
  //cursor: pointer;
  display: flex; 
  flex-direction: row; 
  align-items: center; 
  padding:5px;
`;

const LeftSide = styled.div`
  height: 100%; 
  width: 50%; 
  border-radius: 100px;
  background: #5D93FF;
  cursor: pointer;
  display: flex; 
  flex-direction: row; 
  align-items: center; 
  justify-content: center;
  font-size: 16px;
  font-weight: 300;
`; 

const RightSide  = styled(LeftSide)`
  background: transparent;
  //overflow-x: scroll;
`;

const Text = styled.text``;

const Body = styled.div`
  height: auto; 
  width: 100vw; 
  display: flex; 
  flex-direction: row;
`; 

const Left = styled.div`
  height: 100vh; 
  width: 300px; 
  background: #C1D6FF;
`;

const Right = styled.div`
  height: auto; 
  //width: calc(100vw - 300px);
  width: 100vw;
  //position: relative;
  //background: green;
  //height: 100vh;
`;

const TopRight = styled.div`
  height: auto; 
  width: 100%; 
  display: flex; 
  flex-direction: column;
  //background: red;
  //position: fixed; 
  //top: 190;
`;

const Menu = styled.div`
  height: auto; 
  width: 100%; 
  display: flex; 
  flex-direction: row; 
  padding: 10px; 
  padding-right: 20px;
  justify-content: end;
  //background: green;
`; 

const Search = styled.div`
  height: 40px; 
  width: 400px; 
  border-radius: 100px;
  margin-right: 10px;
  border: solid 1px #939393;
  display: flex; 
  flex-direction: row; 
  align-items: center;
  font-size: 14px; 
  color: #727272;
  padding-left: 20px;
  cursor: pointer;
`; 

const Ranking = styled.div`
  height: 40px; 
  width: 160px; 
  border-radius: 100px; 
  border: solid 1px #939393;
`;

const Filter = styled.div`
  height: auto; 
  //background: blue;
  width: 100%; 
  display: flex; 
  flex-direction: row; 
  align-items: center; 
  justify-content: end; 
  padding-right: 20px;
  //overflow: scroll;
  overflow-x: scroll; /* Ensuring horizontal scroll */
  //white-space: nowrap; /* Prevents wrapping to new lines */
  //background: blue;
`;

const BodyRight = styled.div`
  height: auto; 
  //width: 100%; 
  //width: 50vw;
  //width: calc(100vw - 300px);
  width: auto;
  //overflow-x: scroll;
  padding: 30px;
  //background: red;
  display: flex; 
  flex-direction: row;
  white-space: nowrap;
    /* Hide scrollbar */
   // -ms-overflow-style: none;  /* Internet Explorer 10+ */
  //scrollbar-width: none;  /* Firefox */
  
  &::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
  }
`;

const Cover = styled.div`
  height: 100vh; 
  width: 100vw; 
  background: rgba(53, 53, 53, 0.8);
  position: fixed; 
  top: 0;
`;

const Icon = styled.img`
  height: 17px; 
  width: auto;
`; 

const SearchText = styled.text`
  margin-left: 8px;
`;