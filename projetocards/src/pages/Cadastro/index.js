import './cadastro.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Cadastro(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [terms, setTerms] = useState(false);
    const [update, setUpdate] = useState(false);

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
                    <button type='submit'>
                        Criar
                    </button>
                    <Link to="/" className="link-to-home">
                        Não possui uma conta? Cadastre-se
                    </Link>
                </form>
        </div>
    )
}

export default Cadastro;