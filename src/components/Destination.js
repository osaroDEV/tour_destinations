import React, {useState} from 'react'

const Destination = ({image, name, info, price, remove, id}) => {
const [readMore, setReadMore] = useState(false)

  return (
    <div key={id}>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <p>{readMore ? `${info.substring(0, 200)}...` : info}<button
      style={{border: '1px solid #eee'}}
        onClick={() => {
        setReadMore(!readMore)
      }}>{readMore?'show more':'show less' }</button></p>
      
      <p>${price}</p>
      <button onClick={()=>remove(id)}>not interested</button>
    </div>
  )
}

export default Destination
