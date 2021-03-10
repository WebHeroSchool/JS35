let body = document.body;
let url = window.location.toString();

let getName = (url) => {
    let urlMas = url.split('=');
    let name = urlMas[1];
    if(name == undefined) {
        name = 'Margaritas202';
    }
    return name;
}

let name = getName(url)

let getDate = new Promise((resolve, reject) => {
    setTimeout(() =>  date ? 
    resolve(date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear()) : reject('Date is not defined'), 1000)
});

let getUsername = new Promise((resolve, reject) => {
    setTimeout(() => name ?
    resolve(name) : reject('Name is not defined'), 1000);


Promise.all([getUsername,getDate])
    .then(([name, date]) => fetch(`${name}${date}`));
    .then(res => res.json())
    .then(json = log(json.avatar_url))
    .then(json = log(json.name))
    .then(json = log(json.description))
    .then(json = log(json.html_url))
    .catch(err => log(err + 'Информация о пользователе не доступна'));    

let addName = () => {
          let userName = document.createElement('h1');
            userName.innerHTML = `${getName(url)}`;
            body.appendChild(userName);
        }

let addDescription = () => {
            let userDescription = document.createElement('h2');
            userDescription.innerHTML = `${description}`;
            body.appendChild(userDescription);
        }

let addAvatar = () => {
            let userAvatar = document.createElement('img');
            let newString = document.createElement('br');
            userAvatar.src = this.avatar;
            body.appendChild(userAvatar);
            body.appendChild(newString);
        }
        
let addUrl = () => {
            let userUrl = document.createElement('a');
            let text = document.createTextNode('p');
            userUrl.innerHTML = `${getName(url)}`;
            text.href = profile;
            body.appendChild(userUrl);
            text.appendChild(text);
        }

let hidePreload = () => {
    let preloader = document.getElementById('preload');
    preloader.style.display = 'none';
} 

addName();
addDescription();
addAvatar();
addUrl();
hidePreload();
}

else {
    alert('User with this name not defined')
}
})


.catch(err => alert(err + 'Информация о пользователе не доступна'));
