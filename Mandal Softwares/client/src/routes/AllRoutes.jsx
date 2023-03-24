import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactUs from '../pages/ContactUs'
import FindInfluencer from '../pages/FindInfluencer'
import LandingPage from '../pages/LandingPage'

import ContentMarketing from '../pages/nestedPage/ContentMarketing'
import DigitalMarketing from '../pages/nestedPage/DigitalMarketing'
import EmailMarketing from '../pages/nestedPage/EmailMarketing'
import SeoDevelopment from '../pages/nestedPage/SeoDevelopment'
import SocialMedia from '../pages/nestedPage/SocialMedia'

import WebDevelopment from '../pages/nestedPage/WebDevelopment'

import OurClient from '../pages/OurClient'
import OurServices from '../pages/OurServices'



const AllRoutes = () => {
  return (
    <Routes>

        <Route path='/' element={<LandingPage/>} />
        <Route path='/our-services' element={<OurServices />} />
        <Route path='/influencer' element={<FindInfluencer/>} />
        <Route path='/our-client' element={<OurClient />} />
        <Route path='/contact' element={<ContactUs />} />


 {/* NESTED */}
        <Route path='/our-services/web-development' element={<WebDevelopment />} />
        <Route path='/our-services/seo' element={<SeoDevelopment />} />
        <Route path='/our-services/social-media' element={<SocialMedia />} />
        <Route path='/our-services/email-marketing' element={<EmailMarketing />} />

        <Route path='/our-services/content-marketing' element={<ContentMarketing />} />
        <Route path='/our-services/digital-marketing' element={<DigitalMarketing />} />
        

    </Routes>
  )
}

export default AllRoutes

  
//Landing page 

// Our services 
// 
// Find your influencer 
// 
// Our client  
// 
// Contact us  
// 


