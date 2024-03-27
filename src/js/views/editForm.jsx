import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const EditForm = () => {
    const { store, actions } = useContext(Context);
    const [fullname, setFullName] = useState("Nombre");
    const [email, setEmail] = useState("correo");
    const [phonenumber, setPhoneNumber] = useState("numero");
    const [address, setAddress] = useState("direccion");
    const { id } = useParams();

    useEffect(() => {
        actions.getSingleContact(id);
        setFullName(store.contact.full_name);
        setEmail(store.contact.email);
        setPhoneNumber(store.contact.phoneNumber);
        setAddress(store.contact.address);
    }, []);


    const handleSubmit = e => {
        e.preventDefault();
        actions.editContact(fullname, email, address, phonenumber, id);
        setFullName("");
        setEmail("");
        setPhoneNumber("");
        setAddress("");
    }


    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Full name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={fullname}
                        onChange={e => setFullName(e.target.value)}
                        placeholder="Maikel Guerra"
                    />

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputPassword1"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="GuerraM@"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Phone number</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputPassword1"
                            value={phonenumber}
                            onChange={e => setPhoneNumber(e.target.value)}
                            placeholder="+34000000"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputPassword1"
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                            placeholder="marmolina 22"
                        />
                    </div>
                </div>


                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            <button onClick={() => console.log(fullname)}>Mostrar datos</button>


            <Link to="/">
                <button>Back home</button>
            </Link>
        </div>
    );
};