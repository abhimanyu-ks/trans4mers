import React from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrainingPrgm from '@/components/TrainingPrgm'
import Team from '@/components/Team'
import Footer from '@/components/Footer'
import FullScreenImg from '@/components/FullScreenImg'
import RecentArticles from '@/components/RecentArticles'
import SeniorTrainer from '@/components/SeniorTrainer'
import LastLogo from '@/components/LastLogo'
import YChooseUs from '@/components/YChooseUs'

export default function index() {
  return (
   
    <div>  
      <Header/>
      <Hero/>
      <YChooseUs/>
      <TrainingPrgm/>
      <FullScreenImg/>
      <Team/>
      <SeniorTrainer/>
      <RecentArticles/>
      <LastLogo/>
      <Footer/>
      
     </div>
     

     
  )
}
