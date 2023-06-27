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
            .cath ((error) => {
                console.log(error)
            })
    }, [])

    const procesoAsync = (bool) => {
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                if (bool) {
                    resolve("Promesa resuelta")
                } else {
                    reject("Promesa rechazada")
                }           
        }, 2000)
        })
    }

    procesoAsync(false)
        .then(() => {
            console.log("Hola mundo")    
        })
        .catch (() => {
            console.log("Chau mundo")    
        })
        
    return(
        <div className="listContainer">
            <h2>Catalogo de productos</h2>
            <div className="row">
            {
                productos.map ((prod) => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                ))
            }
            </div>
           
        </div>
    )
}

export default ItemListContainer