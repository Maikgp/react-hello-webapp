import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const [fullname, setFullname] = useState("");
	const [email, setEmail] = useState("");
	const [phonenumber, setPhoneNumber] = useState("");
	const [address, setAddress] = useState("");
	const handleSubmit = e => {
		e.preventDefault();
		actions.createContact(fullname, email, phonenumber, address);
		setFullname("");
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
						onChange={e => setFullname(e.target.value)}
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
