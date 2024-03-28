import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/card.css"; // Importar el archivo CSS para el componente Card

const Card = (props) => {
    const { store, actions } = useContext(Context);

    const handleDelete = () => {
        actions.deleteContact(props.id);
    }

    return (
        <div className="card"> {/* Aplicar clase "card" para estilos */}
            <div className="card-body">
                <p>{props.nombre}</p>
                <p>{props.email}</p>
                <p>{props.phoneNumber}</p>
                <p>{props.address}</p>

                <Link to={`/editForm/${props.id}`}>
                    <button className="edit-button">Editar</button> {/* Aplicar clase "edit-button" */}
                </Link>

                <button className="delete-button" onClick={handleDelete}>Eliminar</button> {/* Aplicar clase "delete-button" */}
            </div>
        </div>
    );
}

export default Card;







