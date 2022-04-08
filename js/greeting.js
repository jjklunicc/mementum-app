const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const clock = document.querySelector("#clock");
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const quote = document.querySelector("#quote")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(username);
}
function paintGreetings(username){
    greeting.innerText = `Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME); 
    clock.classList.remove(HIDDEN_CLASSNAME); 
    todoForm.classList.remove(HIDDEN_CLASSNAME); 
    todoList.classList.remove(HIDDEN_CLASSNAME); 
    quote.classList.remove(HIDDEN_CLASSNAME); 
}

loginForm.addEventListener("submit", onLoginSubmit);
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreetings(savedUsername);
}