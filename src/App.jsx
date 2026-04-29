import React from "react";
import { ButtonProps, PropChildren } from "./components/Props";

function App() {
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
    </>
  );
}

export default App;