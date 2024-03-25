import React from "react"

const Card = (props) => {

    return (
        <div className="card">
            <div className="card-body">
                <p>{props.nombre}</p>
                <p>{props.email}</p>
                <p>{props.phoneNumber}</p>
                <p>{props.address}</p>
            </div>
        </div>

    )
}


export default Card






