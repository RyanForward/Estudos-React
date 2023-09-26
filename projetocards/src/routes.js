import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro';
import Header from './Components/Header';
import Cards from './pages/Cards';

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Cadastro/>}/>
            <Route path='/cards' element={<Cards/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;