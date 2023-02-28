import { alexFunction } from "./randomColor.js";

let alexSection = document.querySelector("#alex")

const alexShuffle = () => {
    alexSection.innerHTML = alexFunction()
}

alexShuffle()
let text = setInterval(alexShuffle, 333)