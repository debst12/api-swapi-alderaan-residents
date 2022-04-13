const getResidents = document.querySelector('#getResidents')


const pressedButton = () => {
    console.log("Button has been clicked")
    let config = {
        method:'get',
        url: 'https://swapi.dev/api/planets/?search=alderaan',
        headers: {}
    };
    
    axios(config)
    .then(function (response) {
        console.log(response.data);
            
            let resident = response.data.results[0].residents
            resident.forEach(resident => {
            axios.get(resident)
            .then((response) => {
                console.log(response.data.name)
                const newH = document.createElement('h2')
                const newContent = document.createTextNode(response.data.name)
                document.body.appendChild(newH.appendChild(newContent))
            })
            
        })
    })
    .catch(function (error) {
        console.log(error)
    })
}

getResidents.addEventListener('click',pressedButton)