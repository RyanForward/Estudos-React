import { useState, useEffect, cloneElement } from 'react'
import { auth, db } from '../../firebaseConnection'
import { signOut } from 'firebase/auth'
import { addDoc, collection, onSnapshot, query, orderBy, where, doc, deleteDoc, updateDoc } from 'firebase/firestore'
import './admin.css'

export default function Admin(){

    const [tarefaInput, setTarefaInput] = useState('')
    const [user, setUser] = useState('');
    const [tarefas, setTarefas] = useState([]);
    const [edit, setEdit] = useState('');

    useEffect(() => {
        async function loadTarefas(){
            const userDetail = localStorage.getItem("@detailuser");
            setUser(JSON.parse(userDetail));

            if (userDetail){
                const data = JSON.parse(userDetail);

                const tarefaRef = collection(db, "tarefas")
                const q = query(tarefaRef, orderBy("created", "desc"), where("userUid", "==", data?.uid))
                const unsub = onSnapshot(q, (snapshot) => {
                    let lista = [];
                    snapshot.forEach((doc) =>{
                        lista.push({
                            id: doc.id,
                            tarefa: doc.data().tarefa,
                            userUid: doc.data().userUid
                        })
                    })
                    console.log(lista);
                    setTarefas(lista);
                })


            }
        }
        loadTarefas()
    }, [])

    async function handleRegister(e){
        e.preventDefault();
        if(tarefaInput == ''){
            alert("Digite sua tarefa!");
            return;
        }

        if(edit?.id){
            handleUpdateTarefa();
            return;
        }

        await addDoc(collection(db, "tarefas"), {
            tarefa: tarefaInput,
            created: new Date(),
            userUid: user.uid
        })
        .then(() => {
            console.log("Tarefa registrada!");
            setTarefaInput('');
        })
        .catch((e) => {
            console.log("Erro ao registrar" + e)
        })
    }


    async function handleLogout(e){
        const confirm = window.confirm("Você está saindo da sua conta", ["Sim", "Não"]);
        if(confirm){
            await signOut(auth)
        }
    }

    async function deleteTarefa(id){
        const docRef = doc(db, "tarefas", id);
        await deleteDoc(docRef)
    }

    function editTarefa(item){
        setTarefaInput(item.tarefa);
        setEdit(item);
    }

    async function handleUpdateTarefa(){
        console.log('1')
        const docRef = doc(db, "tarefas", edit?.id);
        console.log('2')
        await updateDoc(docRef, {
            tarefa: tarefaInput
        })
        .then(() => {
            console.log('3')
            console.log("Tarefa atualizada");
            setEdit('');
            setTarefaInput('');
        })
        .catch((e) => {
            console.log("Erro ao atualizar: " + e);
            setEdit('');
            setTarefaInput('');
        })
    }

    return(
        <div className='admin-container'>
            <h1>Minhas tarefas</h1>

            <form onSubmit={handleRegister} className='form-admin'>
                <textarea placeholder='Digite sua tarefa...' value={tarefaInput} onChange={(e) => setTarefaInput(e.target.value)}>
                </textarea>
                {Object.keys(edit).length > 0 ? (
                <button className='btn-register' type='submit'> Atualizar tarefa</button>
                ) : (
                <button className='btn-register' type='submit'> Registrar tarefa</button>
                )}
            </form>

            {tarefas.map((item) => (
                <article key={item.id} className='task'>
                <p>{item.tarefa}</p>
                <div className='buttons'>
                    <button className='btn-edit' onClick={() => editTarefa(item)}>
                        Editar
                    </button>
                    <button className='btn-delete' onClick={() => deleteTarefa(item.id)}>
                        Concluir
                    </button>
                </div>
            </article>
            ))}

            <button className='btn-logout' onClick={handleLogout}>Sair</button>

        </div>
    )
}