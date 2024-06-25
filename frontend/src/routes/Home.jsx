import React, { useState } from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import EventFilter from '../components/EventFilter'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState({ value: '', label: 'Localização' });

  return (
    <div>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
      />
      <EventFilter
        searchTerm={searchTerm}
        selectedLocation={selectedLocation}
      />
      <Categories />
      <Carousel />
    </div>
  )
}

export default Home