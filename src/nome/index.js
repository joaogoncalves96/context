import { useContext } from "react"
import { UserContext } from "../contexts/user"


const Nome = ({}) => {
    const { alunos, setAlunos } = useContext(UserContext)
    return (
        <div>
            <h2>Sou o aluno: {alunos}</h2>
            <button onClick={() => setAlunos('Joaquim miguel')}>Trocar o nome</button>
        </div>
    )
}

export default Nome