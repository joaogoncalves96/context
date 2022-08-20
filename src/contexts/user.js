import { useState, createContext } from 'react';

export const UserContext = createContext({})

function UserProvider({children}) {
    const [alunos, setAlunos] = useState('João Gonçalves')
    const [qtd, setQtd] = useState(20)


    return(
        <UserContext.Provider value={{alunos, setAlunos, qtd, setQtd}}>
                {children}
        </UserContext.Provider>
    )
}

export default UserProvider