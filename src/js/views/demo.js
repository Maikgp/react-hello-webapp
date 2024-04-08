import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const [fullName, setFullName] = useState("")
	const [emailAdress, setEmailAdress] = useState("")
	const [phoneNumber, setPhoneNumber] = useState("")
	const [streetAddress, setStreetAddress] = useState("")

	const handleSumbit = e => {
		e.preventDefault();
		actions.createContact(fullName, emailAdress, streetAddress, phoneNumber)
		setFullName("");
		setEmailAdress("");
		setPhoneNumber("");
		setStreetAddress("");
	}


	return (
		<div className="form-container">
			<div className="main-form-container">
				<h1 className="form-title">Agregar nuevo contacto</h1>
				<form onSubmit={handleSumbit}>
					<div className="form-group">
						<label htmlFor="exampleInputName" className="form-label">Full name</label>
						<input
							type="text"
							className="form-control"
							id="exampleInputName"
							value={fullName}
							onChange={(e) => setFullName(e.target.value)}
							placeholder="Maikel Sousa"
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputEmail" className="form-label">Email</label>
						<input
							type="email"
							className="form-control"
							id="exampleInputEmail"
							value={emailAdress}
							onChange={(e) => setEmailAdress(e.target.value)}
							placeholder="pepito@gorila"
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputNumber" className="form-label">Phone Number</label>
						<input
							type="text"
							className="form-control"
							id="exampleInputNumber"
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)}
							placeholder="+3400000000"
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputAddress" className="form-label">Address</label>
						<input
							type="text"
							className="form-control"
							id="exampleInputAddress"
							value={streetAddress}
							onChange={(e) => setStreetAddress(e.target.value)}
							placeholder="1234 Main St, Springfield, IL 62701"
							required
						/>
					</div>

					<button type="submit" className="btn btn-primary">Submit</button>
				</form>

				<Link to="/">
					<button className="btn btn-secondary">Back home</button>
				</Link>
			</div>
		</div>

	);
};