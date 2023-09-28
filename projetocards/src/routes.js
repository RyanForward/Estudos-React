import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Cadastro from './pages/Cadastro';
import Cards from './pages/Cards';

function RoutesApp(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signup' element={<Cadastro/>}/>
            <Route path='/cards' element={<Cards/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;