import React from 'react'


import Cards from '../components/HomePage/Cards.js'
// import CardSub from '../components/HomePage/CardsSub.js'
import CaroImg from '../components/HomePage/CaroImg.js'
// import CaroImgSub from '../components/HomePage/CaroImgSub.js'
import Carousel from '../components/HomePage/Carousel.js'
import CateCard from '../components/HomePage/CateCard.js'
// import CateCardSub from '../components/HomePage/CateCardSub.js'
import Footer from '../components/HomePage/Footer.js'
// import Heading from '../components/HomePage/Heading.js'
import Hero from '../components/HomePage/Hero.js'
import Navbar from '../components/HomePage/Navbar.js'
import SmallCard from '../components/HomePage/SmallCard.js'
// import SmallCardSub from '../components/HomePage/SmallCardSub.js'

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Carousel />
            <SmallCard />
            <Cards />
            <CateCard />
            <CaroImg />
            <Footer />
        </>
    )
}

export default HomePage
