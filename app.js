let Menu = document.querySelector('#Menu-icon');
let navList = document.querySelector('.navList');

Menu.onclick = () =>{
    Menu.classList.toggle('bx-x');
    navList.classList.toggle('open');
}

window.onscroll = () =>{
    Menu.classList.remove('bx-x');
    navList.classList.remove('open');
}