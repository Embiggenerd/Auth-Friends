import React, { useEffect, useState } from 'react'

import { useAxiosWithAuth } from './hooks'
import { Friend } from '../components'

export const Protected = () => {

    const axios = useAxiosWithAuth()

    const [friends, setFriends] = useState([])

    useEffect(() => {
        const getFriends = async () => {

            const { data } = await axios.get('http://localhost:5000/api/friends')

            // console.log('getFriendsData', data)
            setFriends(data)
        }
        getFriends()
    }, [])

    return (
        <div>
            <h2>Friends</h2>
            {friends.map(f => <Friend key={f.id} {...f} />)}
        </div>
    )
}