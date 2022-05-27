import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Game } from '../juego/juego';
import { Pokemon } from '../pokemon-api/home';
import { Menu } from '../components/menu';

export const AppRouter = () => {
    return (
        <>
        <BrowserRouter>
        <Menu />
            <div className='container'>
                <Routes>
                    <Route path="pokemones" element={<Pokemon />}/>
                    <Route path="juego" element={<Game />}/>
                </Routes>
            </div>
        </BrowserRouter>
        </>
    )
}