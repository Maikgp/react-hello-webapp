import React, { useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Card from "../component/card.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getContacts();
		console.log(store.contacts);
		
	}, []);





	return (
		<div className="text-center mt-5">
		<Card />
	</div>
)}
