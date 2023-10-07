import './cadastro.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Cadastro(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVer, setPasswordVer] = useState('');
    const [terms, setTerms] = useState(false);
    const [update, setUpdate] = useState(false);

    function verifyPassword(e){

        const input2 = document.querySelector("input[id='passwordVer']");    

        if(passwordVer != password){
            input2.style.border = "3px solid red";
        }else{
            input2.style.border = "3px solid green";
        }
        return true;
    }

    function verify(e){
        const input2 = document.querySelector("input[id='passwordVer']");    

        if(passwordVer != password){
            input2.style.border = "3px solid red";
            alert("As senhas não batem");
            input2.focus();
        }else{
            input2.style.border = "3px solid green";
        }
        return true;
    }

    return(
        <div className='register-container'>
            <h1>Faça seu cadastro</h1>
            <form className='graybox'>
                    <div className='nome'>
                        <input placeholder='Digite seu nome:'
                         type='text'
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                         ></input>
                    </div>
                    <div className='email'>
                        <input placeholder='Digite seu email' 
                        type='email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        ></input>
                    </div>
                    <div className='password'>
                        <input placeholder='Digite sua senha'
                        type='password'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        ></input>
                    </div>
                    <div className='passwordVer' >
                        <input placeholder='Confirme sua senha'
                        id='passwordVer'
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
                    <button type='submit' onSubmit={(e) => verify(e.target.value)}>
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