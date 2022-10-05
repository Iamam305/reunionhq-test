import React from 'react'
import Faqs from '../components/LandingPage/Faqs'
import Hero from '../components/LandingPage/Hero'
import Section from '../components/LandingPage/Section'
import Testimonial from '../components/LandingPage/Testimonial'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Section img="https://iili.io/QfPzwG.png" direction="md:flex-row flex-col" heading={"Rent Property"} btnLink="/rent"/>

      <Section img="https://iili.io/QfiEJt.md.png" direction=" md:flex-row-reverse flex-col-reverse" heading={"Buy Property"} btnLink="/buy"/>

      <Faqs/>
      <Testimonial/>
    </div>
  )
}

export default Home