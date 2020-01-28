import React, { useState } from 'react'

import { useAxiosWithAuth } from '../hooks'

export const FriendForm = ({ handleSubmitFriend }) => {
    const [friend, setFriend] = useState({ name: "", age: "", email: "" })
    const axios = useAxiosWithAuth()

    const handleOnChange = event => {
        setFriend({
            ...friend,
            [event.target.name]: event.target.value
        })
    }

    const handleOnSubmit = async event => {
        event.preventDefault()
        try {
            const { data } = await axios.post("http://localhost:5000/api/friends", friend)
            handleSubmitFriend(data)
            setFriend({ age: "", name: "", email: "" })
        } catch (e) {
            console.log('friendFormError', e)
            setFriend({ age: "", name: "", email: "" })
        }
    }
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <p>Name</p>
                <input value={friend.name} onChange={handleOnChange} name="name" />
                <p>Age</p>
                <input value={friend.age} onChange={handleOnChange} name="age" />
                <p>Email</p>
                <input value={friend.email} onChange={handleOnChange} name="email" />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}