document.getElementById('button').addEventListener('click', loadData)

function loadData() {
	//We create an XHR object
	const xhr = new XMLHttpRequest();

	xhr.open('GET', 'getData.txt', true);

	xhr.onload = function () {

		if (this.status === 200) {
			console.log('READYSTATE', xhr.status);
			document.getElementById('result').innerHTML = `<p>${this.responseText}</p>`;
		}


	}

	xhr.onerror = function () {
		console.log('Request error...');
	}


	xhr.send();

}


document.getElementById('button2').addEventListener('click', getCustomer);

function getCustomer() {
	//We create an XHR object
	const xhr = new XMLHttpRequest();

	xhr.open('GET', 'customer.json', true);

	xhr.onload = function () {

		if (this.status === 200) {
			const customer = JSON.parse(this.responseText);
			console.log('READYSTATE', xhr.status);
			document.getElementById('result').innerHTML = `<ul>
			<li>Name: ${customer.name}</li>
			<li>Age: ${customer.age}</li>
			<li>Dealership: ${customer.dealership}</li>
			</ul>`;
		}


	}

	xhr.onerror = function () {
		console.log('Request error...');
	}


	xhr.send();
}

document.getElementById('button3').addEventListener('click', getCustomers);

function getCustomers() {
	const xhr = new XMLHttpRequest();

	xhr.open('GET', 'customers.json', true);

	xhr.onload = function() {
		
		const customers = JSON.parse(this.responseText);
		
		if (this.status === 200) {
			
			let myData = "";

			customers.forEach(customer => {
				myData += `<ul>
				<li>${customer.SN}</li>
				<li>${customer.name}</li>
				<li>${customer.dealership}</li>
				</ul>`
			});

			document.getElementById('result').innerHTML = myData
		}

	}
	xhr.send();
}

/*
document.getElementById('button').addEventListener('click', loadData)

async function loadData() {
  try {
    const res = await fetch('getData.txt');
    console.log(`READYSTATE ${res.status}`);
    const data = await res.text();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
*/