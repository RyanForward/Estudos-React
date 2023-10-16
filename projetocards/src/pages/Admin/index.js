import { useState } from 'react'
import { auth } from '../../firebaseConnection'
import { signOut } from 'firebase/auth'
import './admin.css'

export default function Admin(){

    const [tarefaInput, setTarefaInput] = useState('')
    const [logoff, setLogoff] = useState(false);

    function handleRegister(e){
        e.preventDefault();
        alert("CLICOU");
    }

    async function handleLogout(e){
        const confirm = window.confirm("Você está saindo da sua conta", ["Sim", "Não"]);
        if(confirm){
            await signOut(auth)
        }
    }

    return(
        <div className='admin-container'>
            <h1>Minhas tarefas</h1>

            <form onSubmit={handleRegister} className='form-admin'>
                <textarea placeholder='Digite sua tarefa...' value={tarefaInput} onChange={(e) => setTarefaInput(e.target.value)}>
                </textarea>
                <button className='btn-register' type='submit'> Registrar tarefa</button>
            </form>

            <article className='task'>
                <p>Estudar javascript e reactjs hoje a noite</p>
                <div className='buttons'>
                    <button className='btn-edit'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                      <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                    </svg>
                    </button>
                    <button className='btn-delete'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </svg>
                    </button>
                </div>
            </article>

            <button className='btn-logout' onClick={handleLogout}>Sair</button>

        </div>
    )
}