import React from 'react'

export const Friend = ({ name, age, email }) => {
    return (
        <div className="friend">
            <h4>{name}</h4>
            <p>{age}</p>
            <p>{email}</p>
        </div>
    )
}