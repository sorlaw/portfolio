import { useState } from 'react'
import './App.css'
import NavbarSimple from './components/Navbar'
import MainContent from './components/MainContent'
import Project from './components/Project'
import Tech from './components/Tech'

function App() {

  return (
    <>
      <NavbarSimple />
      <MainContent />
      <Project />
      <Tech />
    </>
  )
}

export default App
