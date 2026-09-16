import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer' 
import Space from '../components/Space'
import Container from '../components/Containers/Container'
import Hero_Banner from '../components/Hero_Banner'
import Trustdiv from '../components/Trustdiv'
import DevCon from '../components/Containers/DevCon'
import HomeCon from '../components/Containers/HomeCon'

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <Hero_Banner />
            <Space />
            <DevCon />
            <Space />
            <HomeCon/>
            <Container  />
            <Space />
            <Container  />
            <Space />
            <Footer />
        </div>
    )
}

export default Dashboard
