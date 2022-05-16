import { useState } from 'react'

import { NavBar } from "./components/NavBar/NavBar";
import { RecommendedBar } from "./components/RecommendedBar/RecommendedBar"
import { SideBar } from './components/SideBar/SideBar';

function App() {
  return (
    <>
    <NavBar />
    <SideBar />
    <RecommendedBar />
    </>
  )
}

export default App
