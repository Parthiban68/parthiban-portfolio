
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import Hero from '../Component/Hero'
import TechStack from '../Component/TeckStack'
import ExperiencePage from '../Component/Experience'
import ProjectPage from '../Component/Project'
import ContactPage from '../Component/Contact'
import { ScrollUpButton } from '../Utils/ScrollUpButton';
import PersonalProjects from '../Component/PersonalProjects';
const HomePage = () => {
 
  return (
    <>
    <Hero/>
    <TechStack/>
    <ExperiencePage/>
    <ProjectPage/>
    <PersonalProjects/>
    <ContactPage/>
    <ScrollUpButton/>
    </>
  )
}

export default HomePage