import React from 'react'
import './UserCard.scss'

function UserCard ({ user }) {
  const { name, picture, gender, location } = user

  return (
    <div className={`user-card ${gender}`}>
      <img src={picture.medium} alt={`${name.first} ${name.last}`} />
      <h3>
        {name.first} {name.last}
      </h3>
      <p>Стать: {gender === 'male' ? '👨‍🦱' : '👩‍🦰'}</p>
      <p>Країна: {location.country}</p>
    </div>
  )
}

export default UserCard
