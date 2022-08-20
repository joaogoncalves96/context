import Nome from '../nome'
import { useContext } from 'react';
import { UserContext } from '../contexts/user';

const Aluno = ({}) => {

    const { alunos, qtd, setQtd } = useContext(UserContext)

    return (
        <div>
        <h1>Alunos: {qtd}</h1>
        <button onClick={() => setQtd(5)}>Alterar alunos</button>
            <Nome/>
        </div>
    )
}

export default Aluno;
