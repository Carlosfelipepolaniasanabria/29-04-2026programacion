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