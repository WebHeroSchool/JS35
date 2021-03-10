let body = document.body;
let avatar;
let name;
let description;
let url;
let savedDate;
let profileName;

// Создали два отдельных промиса.
let getName = new Promise((resolve, reject) => {
	setTimeout(() => {
		let url = window.location.toString();
		let urlMas = url.split('=');
		let name = urlMas[1];	
		resolve(name == 'undefined' ? name : 'Margaritas202');
	}, 2000);
});

let getDate = new Promise((resolve, reject) => {
	setTimeout(() => {
		let date = new Date();
		resolve(date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear());
	}, 3000);
});

let initializeVar = (json) => {
	avatar = json.avatar_url;
	name = json.name;
	description = json.bio;
	url = json.url;
}
//Fetch
let addName = () => {
	let userName = document.createElement('h1');
	userName.innerHTML = name;
	body.appendChild(userName);
}

let addDescription = () => {
	let userDescription = document.createElement('h2');
	userDescription.innerHTML = description;
	body.appendChild(userDescription);
}

let addAvatar = () => {
	let userAvatar = document.createElement('img');
	let newString = document.createElement('br');
	userAvatar.src = avatar;
	body.appendChild(userAvatar);
	body.appendChild(newString);
}

let addUrl = () => {
	let userUrl = document.createElement('a');
	let text = document.createTextNode('profile');
	userUrl.appendChild(text);
	userUrl.href = 'https://github.com/' + profileName;
	body.appendChild(userUrl);
}
//
//Задаем дату
let addDate = () => {
	let currentDate = document.createElement('h2');
	currentDate.innerHTML = savedDate;
	body.appendChild(currentDate);
}
//сценарий, который будет добавлять к элементу body класс preload после полной загрузки страницы:
let hidePreload = () => {
	let preloader = document.getElementById('preload');
	preloader.style.display = 'none';
}

//Оборачивам их в Promise.all с помощью now.json
Promise.all([getName, getDate])
	.then(([name, date]) => {
		savedDate = date;
		profileName = name;
		return fetch('https://api.github.com/users/' + name);})
	.then(res => res.json())
	.then(json => {
		initializeVar(json);
		hidePreload();
		addName();
		addDescription();
		addAvatar();
		addUrl();
		addDate();
	})
	.catch(err => alert(err + 'Информация о пользователе не доступна'));