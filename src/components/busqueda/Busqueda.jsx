import style from './busqueda.module.css'

const Busqueda = ({ onSearchChange , onBuscar}) => {
    return (
        <div className={style.buscador}>
            <input
                className={style.search}
                
                placeholder="Buscar pokemon...."
                onChange={onSearchChange}
            />
            <button
                onClick={onBuscar}
            >
                Buscar
            </button>
        </div>
    );
};

export default Busqueda