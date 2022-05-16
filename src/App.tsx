import { useState } from 'react'
import { Container } from './components/Container';

import { Box, Flex } from 'rebass';

import { NavBar } from "./components/NavBar/NavBar";
import { RecommendedBar } from "./components/RecommendedBar/RecommendedBar"
import { SideBar } from './components/SideBar/SideBar';
import { VideosContainer } from './components/VideosContainer';

import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
    <GlobalStyle />
        <NavBar />
        <Container>
          <SideBar />
          <Box width="100%" height="auto">
            <RecommendedBar />
            <VideosContainer />
          </Box>
        </Container>
    </>
  )
}

export default App
