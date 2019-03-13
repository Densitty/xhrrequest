document.querySelector('#get-jokes').addEventListener('click', getJokes);


function getJokes(e) {
    const number = document.querySelector('input[type="number"]').value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function() {
        if(this.status === 200) {
            //console.log(JSON.parse(this.responseText));
             const response = JSON.parse(this.responseText);
             let display = document.querySelector('#display');
             let output = '';
             if (response.type === "success" && number !== '') {
                 const jokeArray = response.value;
                 jokeArray.forEach(element => {
                    console.log(element);
                    console.log(element.id);
                    output += `<p>${element.joke}</p>`
                 });
             }
            display.innerHTML = `${output}<br>`;
        }
    }

    xhr.send();
//https://api.chucknorris.io/jokes/random
//http://api.icndb.com/jokes/random/
    e.preventDefault();
}