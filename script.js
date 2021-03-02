/*fetch('https://api.github.com/users/Margaritas202')
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.log(err));*/

let body = document.body;
let url = window.location.toString();

let getName = (url) => {
let urlNom = url.split('=');
console.log(urlNom);
let name = urlNom[1];	
	if(name == undefined) {
		name = 'Margaritas202';
 	}
 	return getName(url);
 	}

let name = getName(url);

fetch(`https://api.github.com/users/${getName(url)}`)
  .then(res => res.json())
  .then(json => {
		login = json.login;
        avatar = json.avatar_url;
        description = json.bio;
 	    url = json.url;

let addLogin = () => {
	let login = document.createElement('h1');
 	  user.Login.innerHTML = login;
 	  body.appendChild(user.Login);
}

let addAvatar = () => {
	let userAvatar = document.createElement('img');
 	let newString = document.createElement('br');
 	userAvatar.src = avatar
 	body.appendChild(newString);
 	body.appendChild(userAvatar);
}

let addDescription = () => {
    let userDescription = document.createElement('p');
 	  userDescription.innerHTML = description;
 	  body.appendChild(userDescription);
}

let addUrl = () => {
 	  let userUrl = document.createElement('a');
 	  let text = document.createTextNode('Profile');
  	  userUrl.href = userUrl;
 	  userUrl.appendChild(text);
 	  body.appendChild(userUrl);
}
 	addLogin();
 	addDescription();
 	addAvatar();
 	addUrl();
 })

.catch(err => console.log(err + 'Информация о пользователе не доступна')); 