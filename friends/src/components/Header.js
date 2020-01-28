import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                {/* <li>
                    <Link to="/protected">Protected Page</Link>
                </li> */}
                <li>
                    <Link to="/public">Public Page</Link>
                </li>
                <li>
                    <Link to="/protected">Protected Page</Link>
                </li>
            </ul>

        </div>
    )
}