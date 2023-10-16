import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./home.css"
import { auth } from '../../firebaseConnection'
import { signInWithEmailAndPassword } from "firebase/auth";

function Home(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    async function handleLogin(e){
        e.preventDefault();

        if(email !== '' && password !== ''){
        await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            navigate('/admin', {replace:true})
        })
        .catch((e) => {
            console.log("Erro ao fazer o login: " + e);
        })

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