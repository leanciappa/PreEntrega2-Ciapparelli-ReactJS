import { Link } from "react-router-dom";

const Item = ({id, nombre, descripcion, precio, img, categoryId }) => {

    return (
        <Card style={{ width: '18rem' }} className="m-3" key={id}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>{precio}</Card.Text>
                <Link to={'/detail/${id}'}><Button variant="primary">VER MAS</Button></Link>
            </Card.Body>
        </Card>
        





        

    )
}