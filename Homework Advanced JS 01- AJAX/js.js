btnAJAX = document.getElementById('btnAJAX');

btnAJAX.addEventListener('click', function(){
    console.log("Getting date, please wait...");
    $.ajax({
        url: 'http://api.open-notify.org/astros.json',
        method: 'GET',
        async: true,
        success: function(response) {
            let users = response;
            console.log(users.people);
            console.log(`${users.people[2].name} is part of the space crew!`);
        },
        error: function(error){
            if(error.status = 404){
                console.log("ERROR 404. Not Found");
        } else {
            console.log("Something went wrong, please try again.");
        }
    }
    })    
})




btnFetch = document.getElementById('btnFetch');

btnFetch.addEventListener('click', function(){
    fetch('http://api.open-notify.org/astros.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        // console.log(data);
        for (const person of data.people) {
            console.log(person);
        }
    })
    .catch(error => {
        console.log(error);
    })
})



