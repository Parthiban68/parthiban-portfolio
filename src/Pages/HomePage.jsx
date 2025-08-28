
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import Hero from '../Components/Hero'
import TechStack from '../Components/TeckStack'
import ExperiencePage from '../Components/Experience'
import ProjectPage from '../Components/Project'
import ContactPage from '../Components/Contact'
import { ScrollUpButton } from '../Utils/ScrollUpButton';
const HomePage = () => {
 
  return (
    <>
    <Hero/>
    <TechStack/>
    <ExperiencePage/>
    <ProjectPage/>
    <ContactPage/>
    <ScrollUpButton/>
    </>
  )
}

export default HomePage