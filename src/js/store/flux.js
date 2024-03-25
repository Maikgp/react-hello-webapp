const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],

		},
		actions: {
			createContact: (fullName, email, address, phoneNumber) => {
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
						setStore({ contacts: data})
						console.log(data)
					})
					.catch(error => console.log('Error;', error));

			},
			/* createContact: () => {

			}  */
			// Use getActions to call a function within a fuction

		}
	};
};

export default getState;
