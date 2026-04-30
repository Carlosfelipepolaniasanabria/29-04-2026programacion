import React from "react";
import { ButtonProps, PropChildren, perfil} from "./components/Props";


class Usuario {
  constructor(nombre, edad, avatar) {
    this.nombre = nombre;
    this.edad = edad;
    this.avatar = avatar;
  }
}

function App() {
  const usuario = new Usuario("Juan", 30, "https://example.com/avatar.jpg");

  return (
    <>
      <ButtonProps text="Guardar" color="blue" />
      <ButtonProps text="Eliminar" color="red" />

      <PropChildren titulo="Contenido">
        <h1>Titulo</h1>
        <p>
          Este es el contenido que se muestra dentro del componente PropChildren.
        </p>
        <ButtonProps text="Prop Button" color="green" /> {/*En este momento ButtonsProps es el hijo de ButtonChildren.*/}
      </PropChildren>

      <perfil usuario={usuario} /> {/* Esto usuario viene de la clase Usuario y en efecto lo que esta en la clase se pasa a la función exportada de perfil en Props.jsx como
      puede ver arriba hay una parte que llame a la función perfil y si entras veras a perfil que se compone de otras dos funciones son privadas porque no estan siendo exportadas
      osea que se utilizan en la misma Props.jsx mientras que las que se exportan son funciones publicas que se pueden utilizar en otros jsx como por ejemplo perfil que lo estamos
      utilizando en App.jsx */}
    </>
  );
}

export default App;