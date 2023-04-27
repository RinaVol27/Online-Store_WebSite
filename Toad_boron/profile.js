async function getAllUsers(){
    var result = await fetch("https://localhost:7003/api/SiteUsers");
    console.log(result);

    if (result.status !== 200){
        console.log('Error: ' + result.status);
        return;
    }

    var data = await result.json();
    addUsersCard(data[0]);
}
function addUsersCard(user){
    let list = document.getElementById('users-list');

    let anketa = document.createElement('div');
    anketa.className = "anketa";

    anketa.innerHTML = '<p class="main"><b>Your name:</b></p>'+
    '<p>' + user.surname + ' ' + user.nameUser + ' ' + user.patronymic + '</p></br>' +
    '<p class="main"><b>Email:</b></p>'+
    '<p>' + user.email +'</p>'

    list.appendChild(anketa);
}

getAllUsers();