import React, { Fragment, useRef, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Juego } from "./Juego";
import { v4 as uuid } from 'uuid';

export function Steam() {
    //inicializar la variables que estara escuvhabdo react para saver si sufrec cambion ya sea anteroir o actual
    // se guardaran los h¿juegos en un listado de juegos 
    //hacer uso de set juegos= metodos para ver si hay juegos nuevos o se eliminand de la lista
    //useState que provee react para capturar estados 
    
    const [listadoJuegos, setJuegos] = useState([
        { id: 1, titulo: 'AC Origin'},
        { id: 2, titulo: 'Silksong'},
        { id: 3, titulo: 'DOOM Eternal'},
        { id: 4, titulo: 'Life of P' }
    ]);
    
    const inputJuego = useRef();

    const agreggarJuego = () => { 
        //alert("Si funciona");
        const inputJuegoTexto = inputJuego.current.value;
        //const id = uuid();
        //alert(id);
        setJuegos((prevJuegos) => {
            const nuevoJuego = {
                id: uuid(),
                titulo: inputJuegoTexto
            }
            inputJuego.current.value = "";
            
            return [...prevJuegos, nuevoJuego]
        });


    }


    return (
        <Fragment>
            <div className="container"> 
                <h1 style={{ textAlign: "center" }}>Catálogo de Steam</h1>
                <hr />

                <div className="input-group">
                    <input ref={inputJuego} className="form-control" type="text" placeholder="Ingrese el nombre del juego"></input>
                    {/* <button className="btn btn-success"><i class="bi bi-tiktok"></i></button> */}
                    <button onClick={agreggarJuego} className="btn btn-success"><i class="bi bi-steam"></i></button>
                    
                </div>

                <ul className="list-group">
                    {listadoJuegos.map((juegoActual) => (
                

                       
                        <Juego
                            juegoprops={juegoActual}
                            key={juegoActual.key}
                        >
                        
                            </Juego>
                        
                        
                    )) }

                </ul>

            </div>
        </Fragment>
    )


}