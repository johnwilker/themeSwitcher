const input = document.querySelector(".input")
const body = document.querySelector("body")
const theme = window.localStorage.getItem("theme")


const themeSwitcher = () => {
     body.classList.toggle("light")
}

 input.onchange = themeSwitcher
