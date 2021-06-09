import React from 'react'
import Destination from './Destination'

const Destinations = ({tours, remove}) => {
  return (
    <div>
      {tours.map((tour) => {
        return <Destination key={tour.id} {...tour} remove={remove} />
      })}
    </div>
  )
}

export default Destinations
