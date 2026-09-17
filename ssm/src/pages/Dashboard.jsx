import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer' 
import Space from '../components/Space'
import Container from '../components/Containers/Container'
import Hero_Banner from '../components/Hero_Banner'
import Trustdiv from '../components/Trustdiv'
import DevCon from '../components/Containers/DevCon'
import HomeCon from '../components/Containers/HomeCon'
import ProductCon from '../components/Containers/ProductCon'

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <Hero_Banner />
            <Space />
            <DevCon />
            <HomeCon/>
            <ProductCon />
            <Space />
            <Space />
            <Footer />
        </div>
    )
}

export default Dashboard
