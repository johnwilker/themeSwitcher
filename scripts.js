// ALTERADOR DE CORES FUNCIONANDO
const input = document.querySelector(".input")
const body = document.querySelector("body")
const theme = window.localStorage.getItem("theme")
const gitIconColor = document.querySelector("#gitIcon")



const themeSwitcher = () => {
     body.classList.toggle("light")
     gitIconColor.setAttribute("fill", '#000')
}

 input.onchange = themeSwitcher
