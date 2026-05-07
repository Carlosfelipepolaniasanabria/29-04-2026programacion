import { use, useEffect, useState } from "react"; /*Los Use son muchos mas dinamicos que los Props y este tambien hace pqerte de los hooks*/

export function Timer()  {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount((Count) => Count + 1);
        }, 1000);
    });

    return (
        <div>
            <p>Timer: {count} seconds</p>
        </div>
    );
}


export function CounterwithVariable() {
    const [count, setCount] = useState(0);  
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        setCalculation(() => count * 2);
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            <p>Calculation (count * 2): {calculation}</p>
        </div>
    );
}


// Exporta el componente llamado ListaPost para poder usarlo en otros archivos
export function ListaPost() {

    // Estado donde se guardarán los posts obtenidos de la API
    // posts empieza como un arreglo vacío []
    const [posts, setPosts] = useState([]);

    // Estado para controlar si los datos aún están cargando
    // loading empieza en true porque al inicio todavía no se han obtenido los datos
    const [loading, setLoading] = useState(true);

    // Estado para guardar posibles errores durante la petición
    // error inicia en null porque inicialmente no hay errores
    const [error, setError] = useState(null);

    // useEffect se ejecuta cuando el componente se renderiza por primera vez
    // El arreglo [] significa que solo se ejecuta una vez
    useEffect(() => {

        // fetch hace una petición HTTP a la API
        fetch("https://jsonplaceholder.typicode.com/posts")

            // Convierte la respuesta en formato JSON
            .then((res) => res.json())

            // data contiene los datos recibidos de la API
            .then((data) => {

                // Guarda los posts en el estado posts
                setPosts(data);

                // Cambia loading a false porque ya terminó de cargar
                setLoading(false);
            })

            // catch captura cualquier error ocurrido en la petición
            .catch(err => {

                // Guarda el error en el estado error
                setError(err);

                // También cambia loading a false para dejar de mostrar "Loading..."
                setLoading(false);
            });

    }, []);

    // Si loading es true, muestra el mensaje de carga
    if (loading) return <p>Loading...</p>;

    // Si ocurrió un error, muestra el mensaje del error
    if (error) return <p>Error: {error.message}</p>;

    // Retorna la interfaz del componente
    return(

        // Lista no ordenada
        <ul>

            {/* Recorre el arreglo posts usando map */}
            {posts.map((post) => (

                // Cada post se muestra como un elemento <li>
                // key={post.id} ayuda a React a identificar cada elemento de forma única
                <li key={post.id}>

                    {/* Muestra el título del post */}
                    {post.title}

                </li>
            ))}

        </ul>
    );
}