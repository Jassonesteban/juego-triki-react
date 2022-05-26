import logo from '../logo.svg'; //.. dos puntos son para salir de un directoria y buscar por fuera

function Inicio ()
{
    return(
        <div className="box-logo">
            <img src={logo} className='logo' alt='logo_company' />
            <label className='title'>Hola soy el inicio de React</label>
        </div>
    );
}

export default Inicio;