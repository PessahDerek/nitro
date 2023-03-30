
import React, { useState } from 'react'

export const useUserDetails = () => {
    const getDetails = () => JSON.parse(localStorage.getItem('aucUser'))

    const [aucUser, setUser] = useState(getDetails())

    const set_user = (user) => {
        localStorage.setItem('aucUser', JSON.stringify(user))
        setUser(getDetails())
    }

    return {user: aucUser, set: set_user}
}

