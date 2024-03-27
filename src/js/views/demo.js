import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [address, setAddress] = useState("");
	const handleSubmit = e => {
		e.preventDefault();
		actions.createContact(fullName, email, address, phoneNumber);
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
						value={fullName}
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
							value={phoneNumber}
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

			


			<Link to="/">
				<button>Back home</button>
			</Link>
		</div>
	);
};
