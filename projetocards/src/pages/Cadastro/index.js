import './cadastro.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebaseConnection';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Cadastro(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVer, setPasswordVer] = useState('');
    const [terms, setTerms] = useState(false);
    const [update, setUpdate] = useState(false);
    const navigate = useNavigate();

    function verifyPassword(e){

        const input2 = document.querySelector("input[id='passwordVer']");    

        if(passwordVer != password){
            input2.style.border = "2px solid red";
        }else{
            input2.style.border = "2px solid green";
        }
    }

    async function verify(e){
        e.preventDefault();
        const input2 = document.querySelector("input[id='passwordVer']"); 
        if(passwordVer != password){
            alert("As senhas não batem");
            input2.focus();
            alert("O envio do formulário foi cancelado")
            
        }else{
            await createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert("Cadastrado com sucesso!");
                navigate('/admin', {replace:true});
            })
            .catch((e) => {
                alert("Erro ao fazer o cadastro: " + e);
            })
            return true;
        }
        
        
    }

    return(
        <div className='register-container'>
            <h1>Faça seu cadastro</h1>
            <form className='graybox' onSubmit={verify}>
                    <div className='nome'>
                        <input placeholder='Digite seu nome:'
                         type='text'
                        value={nome}
                        required
                        onChange={(e) => setNome(e.target.value)}
                         ></input>
                    </div>
                    <div className='email'>
                        <input placeholder='Digite seu email' 
                        type='email'
                        value={email}
                        required
                        onChange={(e)=>setEmail(e.target.value)}
                        ></input>
                    </div>
                    <div className='password'>
                        <input placeholder='Digite sua senha'
                        type='password'
                        required
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        ></input>
                    </div>
                    <div className='passwordVer' >
                        <input placeholder='Confirme sua senha'
                        id='passwordVer'
                        required
                        type='password'
                        value={passwordVer}
                        onChange={(e)=>setPasswordVer(e.target.value)}
                        onBlur={(e)=>verifyPassword(e.target.value)}
                        ></input>
                    </div>
                    <div className='checkboxes-cadastro'>
                        <div className='terms-conteiner'>
                            <input type='checkbox'
                            value={terms}
                            onChange={(e) => setTerms(e.target.value)}
                            required
                            ></input>
                            <div className='terms'>Eu aceito os Termos de Uso.</div>
                        </div>
                        <div className='news-conteiner'>
                            <input type='checkbox'
                            value={update}
                            onChange={(e) => setUpdate(e.target.value)}
                            ></input>
                            <div className='news'>Eu aceito receber emails de atualizações da L&C.</div>
                        </div>
                    </div>
                    <button type='submit'>
                        Criar
                    </button>
                    <Link to="/" className="link-to-home">
                        Já possui uma conta? Faça o login
                    </Link>
                </form>
        </div>
    )
}

export default Cadastro;