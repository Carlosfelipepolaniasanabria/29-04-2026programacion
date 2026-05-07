import styles from '../styles/Props.module.css'; {/*Colocamos el estilo para que el componente Pefil se vea mucho mas lindo */}

export function ButtonProps({ text, color }) {
  return (
    <button
      style={{
        backgroundColor: color,
        color: "white",
        padding: "10px 20px",
      }}
    >
      {text}
    </button>
  );
}

export function PropChildren({ titulo, children }) {
  return (
    <div className="tarjeta">
      <h3>{titulo}</h3>
      <div>{children}</div>
    </div>
  );
}

function Avatar({ url, nombre }) {
  return <img src={url} alt={nombre} width="100" />;
}

function Info({ nombre, edad }) {
  return (
    <div className={styles.perfilInfo}>
      <h4>{nombre}</h4>
      <p>Edad: {edad}</p>
    </div>
  );
}

export function Perfil({ usuario }) {
  return (
    <div className="perfil">
      <Avatar url={usuario.avatar} nombre={usuario.nombre} />
      <Info nombre={usuario.nombre} edad={usuario.edad} />
      <button className={styles.mybutton}>perfil</button>  {/*Aqui esta el estilo que acabamos de realizar*/}
    </div>
  );
}