import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home'
import Cadastro from '../pages/Cadastro';
import Cards from '../pages/Cards';
import Admin from '../pages/Admin';
import Private from './Private';

function RoutesApp(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signup' element={<Cadastro/>}/>
            <Route path='/admin' element={<Private><Admin/></Private>}/>
            <Route path='/cards' element={<Cards/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;