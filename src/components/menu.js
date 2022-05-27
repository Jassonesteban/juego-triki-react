import React from 'react';
import {Link} from 'react-router-dom';
export class Menu extends React.Component
{
    render(){
        return(
            <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
                <ul>
                    <li><Link to='/juego'>Juego triki</Link></li>
                    <li><Link to='/pokemones'>Pokemon API</Link></li>
                </ul>
            </nav>
        );
    }
}

//export default Menu;