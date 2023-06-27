import { useState } from "react"
import { useState } from "react"
import { useEffect} from "react"
import { useParams } from "react-router-dom" 


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const params = useParams()

    
    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then ((res) => setProductos (res))
            .catch ((err) => conole.log (err))
            .finally (() => setLoading (false))
        }, [])
    
    return(
        <div className="listContainer">
            <h2>Catalogo de productos</h2>
            <p>{Bienvenidos}</p>
        </div>
    )
}

export default ItemListContainer