import React from 'react'

const Destination = ({image, name, info, price}) => {
  return (
    <div>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <h3>{info}</h3>
      <p>${price}</p>
    </div>
  )
}

export default Destination
