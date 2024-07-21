import React from 'react'
import './card.css'
import propTypes from 'prop-types'

function card({img= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6JrrKvQSnUUjbS9nSx6woR_boa3w1A5DCtg&s',
  charName= 'No Data Written'}) {
  
  return (
    <div className='card'>
      <img src={img} ></img>
      <p>{charName}</p>
    </div>
  )
}
card.propTypes = {
  img: propTypes.string,
  charName: propTypes.string
}
// card.defaultProps = {
//   image: 'none',
//   charName: 'Default'
// }

export default card