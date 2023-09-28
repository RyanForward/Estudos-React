import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css"

function Home(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin(e){
        e.preventDefault();

        if(email !== '' && password !== ''){
            alert("Teste")
        }else{
            alert("Preencha todos os campos!")
        }
    }

    return(
        <div className="home">
            <h1 className="title">Live & Card</h1>
            <span className="subtitle">Gerencie sua agenda de forma fácil</span>
            <form className="login" onSubmit={handleLogin}>
                <input type="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)}>
                </input>
                <input type="password" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)}>
                </input>
                <button type="submit">Acessar</button>
            </form>
            <Link to="/signup" className="link-to-register">
                Não possui uma conta? Cadastre-se
            </Link>
        </div>
    )
}

export default Home;