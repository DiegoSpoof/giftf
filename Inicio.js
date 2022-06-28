import React from 'react'
import mujerTriste from "./img/mujer-triste.svg";
import "./inicio.css"

export const Inicio = () => {
    const fecha = new Date();
    const dia = fecha.getDate();
    const año = fecha.getFullYear();
    let mes = fecha.getMonth() + 1;
    if (mes === 1){
        mes = "Enero";
    }else if (mes === 2){
        mes = "Febrero";
    }else if (mes === 3){
        mes = "Marzo";
    }else if (mes === 4){
        mes = "Abril";
    }else if (mes === 5){
        mes = "Mayo";
    }else if (mes === 6){
        mes = "Junio";
    }else if (mes === 7){
        mes = "Julio";
    }else if (mes === 8){
        mes = "Agosto";
    }else if (mes === 9){
        mes = "Septiembre";
    }else if (mes === 10){
        mes = "Octubre";
    }else if (mes === 11){
        mes = "Noviembre";
    }else if (mes === 12){
        mes = "Diciembre";
    }
  
  
    return (
    <div className='titulo'>
        <img className='jovenFoto' src={mujerTriste} alt='Joven pensando' />
        <div className='textoDerecho'>
            <h2 className='tema'>Una simple idea para momentos complicados</h2>
            <p>Hice esta pagina solo para recordarte que hoy es dia {dia} de {mes} del {año} y asi es, <strong>te sigo amando, incluso mas que ayer</strong></p>
            @Diegoop24
        </div>
    </div>
  )
}
