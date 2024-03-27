const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			contact: {}

		},
		actions: {
			createContact: (fullName, email, address, phoneNumber) => {
				console.log(fullName, email, address, phoneNumber)
				fetch('https://playground.4geeks.com/apis/fake/contact/', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						"full_name": fullName,
						"email": email,
						"agenda_slug": "Maikgp",
						"address": address,
						"phone": phoneNumber

					})
				})
					.then(Response => Response.json())
					.then(data => console.log(data))
					.catch(error => console.log('Error;', error));
			},
			getContacts: () => {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/Maikgp")
					.then(Response => Response.json())
					.then(data => {
						setStore({ contacts: data })
						console.log(data)
					})
					.catch(error => console.log('Error;', error));

			},


			getSingleContact: (id) => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`)
					.then(Response => Response.json())
					.then(data => setStore({ contact: data }))					
					.catch(error => console.log('Error;', error));

			},


			editContact: (fullName, email, address, phoneNumber, id) => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {

					method: 'PUT',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						"full_name": fullName,
						"email": email,
						"agenda_slug": "Maikgp",
						"address": address,
						"phone": phoneNumber

					})
				})
					.then(Response => Response.json())
					.then(data => console.log(data))
					.catch(error => console.log('Error;', error));

			},
		}

	};
};



export default getState;
