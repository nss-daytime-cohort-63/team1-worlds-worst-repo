import { alexFunction } from "./randomColor.js";
import { HulkHogan } from "./HulkHogan.js";

let alexSection = document.querySelector("#alex")

const alexShuffle = () => {
    alexSection.innerHTML = alexFunction()
}

alexShuffle()
let text = setInterval(alexShuffle, 333)

HulkHogan();