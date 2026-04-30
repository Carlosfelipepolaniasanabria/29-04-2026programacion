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

export function PropChildren({
    titulo, children
}) {
    return (
        <div className="tarjeta">
            <h3>{titulo}</h3>
            <div className="contenido">
                {children}
            </div>
        </div>
    );
}


function Avatar({ url, nombre }) {
    return (
        <img src={url} alt={nombre} 
    className="avatar" />
    );}


function Info({ nombre, edad }) {
    return (
        <div>
            <h4>Nombre: {nombre}</h4>
            <p>Edad: {edad}</p>
        </div>
    );
}

export function perfil({ usuario }) {
    return (
        <div className="perfil">
            <Avatar url={usuario.avatar} nombre={usuario.nombre} />
            <Info nombre={usuario.nombre} edad={usuario.edad} />
        </div>
    );
}