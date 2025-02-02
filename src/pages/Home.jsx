import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import JobListing from '../components/JobListing'

const home = () => {
  return (
    <div>
       <Navbar /> 
       <Hero />
       <JobListing />
    </div>
  )
}

export default home