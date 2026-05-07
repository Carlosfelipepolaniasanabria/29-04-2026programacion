
import React from "react";
import { Contador, Formulario, Formulario_Objeto } from "./components/hook.jsx"; /*Importamos el componente contador que se encuentra en use_State.jsx*/
import { Timer, CounterwithVariable, ListaPost } from "./components/Use_effect.jsx"; /*Importamos el componente Timer que se encuentra en Use_effect.jsx*/
import { ButtonProps, PropChildren, Perfil } from "./components/Props";

class Usuario {
  constructor(nombre, edad, avatar) {
    this.nombre = nombre;
    this.edad = edad;
    this.avatar = avatar;
  }
}

function App() {
  const usuario = new Usuario(
    "Carlos Felipe Polania Sanabria",
    19,
    "https://i.pravatar.cc/150" // usa una imagen real
  );

  return (
    <>
      <ButtonProps text="Guardar" color="blue" />
      <ButtonProps text="Eliminar" color="red" />

      <PropChildren titulo="Contenido">
        <h1>Titulo</h1>
        <p>Este es el contenido dentro del componente.</p>
        <ButtonProps text="Prop Button" color="green" /> {/*En este momento ButtonsProps es el hijo de ButtonChildren.*/}
      </PropChildren>

      <Perfil usuario={usuario} />{/* Esto usuario viene de la clase Usuario y en efecto lo que esta en la clase se pasa a la función exportada de perfil en Props.jsx como
      puede ver arriba hay una parte que llame a la función perfil y si entras veras a perfil que se compone de otras dos funciones son privadas porque no estan siendo exportadas
      osea que se utilizan en la misma Props.jsx mientras que las que se exportan son funciones publicas que se pueden utilizar en otros jsx como por ejemplo perfil que lo estamos
      utilizando en App.jsx */}


      <Contador /> {/*Aqui estamos utilizando el componente contador que se encuentra en use_State.jsx*/} 
      <Formulario />
      <Formulario_Objeto />
      <Timer />
      <CounterwithVariable />
      <ListaPost /> 
    </>
  );
}

export default App;