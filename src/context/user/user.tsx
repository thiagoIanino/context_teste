import React, { useState, createContext, useContext } from 'react'

interface user{
    nome1:string
    nome2:string
}
interface userEncap{
    user:user
    setUser:React.Dispatch<React.SetStateAction<user>>
}
const UserContext = createContext<userEncap | null>(null)

const UserProvider:React.FC = ({children}) => {

    const [user, setUser] = useState<user>({nome1:'nome',nome2:'inicial'})
    const UserE: userEncap = {user, setUser}
    


    return (
        <UserContext.Provider value={UserE}>

            {children}
        </UserContext.Provider>
    )
}

export const UseUserContext = () => {
    const context = useContext(UserContext)


    return (context)
}

export default UserProvider