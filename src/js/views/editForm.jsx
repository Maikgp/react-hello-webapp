import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/demo.css";
import { Context } from "../store/appContext";



export const EditForm = () => {
    const { store, actions } = useContext(Context);
    const [fullName, setFullName] = useState("Nombre");
    const [emailAdress, setEmailAdress] = useState("correo");
    const [phoneNumber, setPhoneNumber] = useState("numero");
    const [streetAddress, setStreetAddress] = useState("dirección");
    const { id } = useParams();


    useEffect(() => {
        actions.getSingleContact(id);
    }, []);

    useEffect(() => {
        setFullName(store.contact.name);
        setEmailAdress(store.contact.email);
        setPhoneNumber(store.contact.phone);
        setStreetAddress(store.contact.address);
    }, [store.contact]);


    const handleSumbit = e => {
        e.preventDefault();
        actions.editContact(fullName, emailAdress, streetAddress, phoneNumber, id);
        setFullName("");
        setEmailAdress("");
        setPhoneNumber("");
        setStreetAddress("");
    }


    return (
        <div className="container">
            <form onSubmit={handleSumbit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Full name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Maikel Sousa"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail"
                        value={emailAdress}
                        onChange={(e) => setEmailAdress(e.target.value)}
                        placeholder="pepito@gorila"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputNumber" className="form-label">Phone Number</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="+3400000000"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputAddress" className="form-label">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputAddress"
                        value={streetAddress}
                        onChange={(e) => setStreetAddress(e.target.value)}
                        placeholder="1234 Main St, Springfield, IL 62701"
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            <Link to="/">
                <button>Back home</button>
            </Link>
        </div>
    );
};