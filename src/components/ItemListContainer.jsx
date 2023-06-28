import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MOCK_DATA } from "../data/MOCK_DATA";

const pedirDatos = () =>{
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve (MOCK_DATA)
        }, 2000)
    })
}

const ItemListContainer = () => {

    const[productos, setProductos] = useState([])
     
    useEffect(() => {
        pedirDatos()
            .then ((res) => {
                setProductos(res)
            })
            .catch ((error) => {
                console.log(error)
            })
    }, [])

        
    return(
        <div className="listContainer">
            <h2>Catalogo de productos</h2>
            <div className="row mx-3">
            {
                productos.map ((prod) => (
                    <Card style={{ width: '18rem' }} className="m-3" key={prod.id}>
                        <Card.Img variant="top" src={prod.img} />
                        <Card.Body>
                            <Card.Title>{prod.nombre}</Card.Title>
                            <Card.Text>{prod.precio}</Card.Text>
                            <Button variant="primary">VER MAS</Button>
                        </Card.Body>
                    </Card>
                ))
            }
            </div>
           
        </div>
    )
}

export default ItemListContainer