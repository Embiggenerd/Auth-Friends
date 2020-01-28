import React from 'react'
import { useAxiosWithAuth } from '../hooks'
export const Friend = ({ name, age, email, id, handleSubmitFriend }) => {
    const axios = useAxiosWithAuth()

    const handleDelete = async id => {
        const { data } = await axios.delete(`http://localhost:5000/api/friends/${id}`)

        handleSubmitFriend(data)
    }

    return (
        <div className="friend">
            <h4>{name}</h4>
            <p>{age}</p>
            <p>{email}</p>
            <button className="delete" onClick={() => handleDelete(id)}>Delete</button>
        </div>
    )
}