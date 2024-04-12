import React from 'react'
import { useState,useEffect } from 'react';

export default function Elemento() {
    const [modelos,setModelos]=useState([])
    const [divActual,setDivActual]=useState(false)
    const {VITE_MODELOS}=import.meta.env
    
    const verSofa=()=>{
        setDivActual(!divActual)
    }
    useEffect(()=>{
        const controller = new AbortController();
        const options = {
          metod: "GET",
          headers: {
            "content-type": "application/json",
          },
          signal: controller.signal,
        };
        fetch(VITE_MODELOS, options)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setModelos(data.arrayModelos);
          })
          .catch((err) => console.log(err))
    
          .finally(() => controller.abort());
    
      },[])
  return (
    <>
    <div className='contenido'>
    {modelos.map((modelo,index)=>{
   
   return  <div key={index} className={`main__contenido ${ divActual ? 'on ' :'isactive '}`}>
    <div className='contenido__datos'>
 <h3 className='main__h3'>{modelo.Autor}</h3>
 <h2 className='main__h2'>{modelo.Nombre}</h2>
 <p className='main__p'>{modelo.Descripcion}</p>
 </div>
 <div className='main__foto'>
   <img className='main__img' src={modelo.Src} alt="" />
 </div>
 </div>
  
   
 
})}
 
</div> 
<h3 className='h3__main'>Products Deatils</h3>
<div   className='main__abajo'>
       {modelos.map((modelo,index)=>{
        return <div key={index}>
         <button className='main__boton' onClick={verSofa}>{modelo.Nombre}</button>
        </div> 
            
            
           
            })} 
             </div>
</>
  )
}
