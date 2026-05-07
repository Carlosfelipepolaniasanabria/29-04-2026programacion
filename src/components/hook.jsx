import { useState } from "react";   /*Los Use son muchos mas dinamicos que los Props*/

export function Contador() {
    const [contador, setContador] = useState(0);  /*Inicia con 0 porque es tipo String si es 1 entonces es distinto si es un char vamos acolocar un string vacio*/ 

    return (
        <div>
            <h2>Has hecho click {contador} veces</h2>
            <button onClick={() => setContador(contador + 1)}>
                Click
            </button>
            <button onClick={() => setContador(0)}>
                Reset
            </button>
        </div>
    );
}


export function Formulario() {
    const [nombre, setNombre] = useState("");  /*Inicia con 0 porque es tipo String si es 1 entonces es distinto si es un char vamos acolocar un string vacio*/

    return (    
        <div>
            <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Escribe tu nombre"
            />
            <p>Hola, {nombre}!</p>  
        </div>
    )
}


export function Formulario_Objeto(){
    const[formData, setformData]=useState({
        nombre: "",
        edad: 0
    })

    const actualizarForm=(campo, valor)=>{
        setformData({
            ...formData,
            [campo]: valor
        })
    }

    return(
        <div>
            <input
                type="text"
                placeholder="Escribe tu nombre"
                value={formData.nombre}
                onChange={(e) => actualizarForm("nombre", e.target.value)}
            />
            <br />
             <button 
             onClick={() => actualizarForm("nombre", "")}>
                Reset
            </button>
            <input type="text"
                name="edad"
                value={formData.edad}
                onChange={(e) => actualizarForm("edad", e.target.value)}
                placeholder="Escribe tu edad"
            />
             <button onClick={() => actualizarForm("edad", 0)}>
                Reset
            </button>

            <p>{formData.nombre} tiene {formData.edad} años.</p>
        </div>
        )
}


