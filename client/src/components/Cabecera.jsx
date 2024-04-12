import React, { useState } from 'react'
import { TiThMenu } from "react-icons/ti";
import {useEffect } from 'react';


function Cabecera() {
    const[menu,setMenu] = useState(false)
    const [desplegado,setDesplegado]=useState(false)
    const[sofa,setSofa]=useState(false)
   const [muebles,setMuebles]= useState([])
   const {VITE_MUEBLES}=import.meta.env
    const toggleMenu = ()=>{
        setMenu(!menu)
        setDesplegado(!desplegado)
       
    }
    const desplegar = ()=>{
        setDesplegado(! desplegado)
       
    }
    const verSofa=()=>{
        setSofa(!sofa)
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
      fetch(VITE_MUEBLES, options)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setMuebles(data.arrayMuebles);
          console.log(muebles);
        })
        .catch((err) => console.log(err))
  
        .finally(() => controller.abort());
  
    },[])

   
  return (
    <header className= 'Cabecera'>
        <h1 className='Cabecera__h1'>
            <a href="#" className='Cabecera__a'>

                mater
            </a>
            
            </h1>
            <button className='Cabecera__boton' onClick={toggleMenu}>
            <TiThMenu className='Cabecera__icon' />
            </button>
            <nav className={`Cabecera__nav ${menu ? 'isActive' :''}`}>
                <ul className='Cabecera__ul'>
                    <li className="Cabecera__li" onClick={desplegar}><a href="#" className="Cabecera__a" ></a>Collection</li>
                    <ul  className={`desplegable ${desplegado ? 'actv' :''}`}>
                      {muebles.map((mueble)=>{
                         return <div key={mueble._id}>
                          <li className='desplegable__li' onClick={verSofa}>{mueble.Tag}</li>
                             
                              <div className= {`cabecera__foto ${ sofa ? 'on' :''}`}>
                                  <img cabecera__img ='true' src={mueble.Src} alt="" />
                              </div> 
                              </div>
                             
                             
                              
                      })}
                        <li>Lighting</li>
                         <li>Accesories</li>
                       </ul>
                   
                    <li className="Cabecera__li"><a href="#" className="Cabecera__a"></a>Design</li>
                    <li className="Cabecera__li"><a href="#" className="Cabecera__a"></a>Craftmanship</li>
                    <li className="Cabecera__li"><a href="#" className="Cabecera__a"></a>Ethics</li>
                    
                </ul>
                
            </nav>
      
    </header>
  )
}

export default Cabecera