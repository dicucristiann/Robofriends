import React from 'react'

const Card = ({ name, email, id }) => {
  
    return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-3 '>
            <img alt='Robo1' src={`https://robohash.org/${id}?size=300x300`} />
            <h2>{name}</h2>
          <p>{email}</p>
    </div>
  )
}

export default Card;