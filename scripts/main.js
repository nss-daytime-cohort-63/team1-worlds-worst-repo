import { alexFunction, goldenrod } from "./randomColor.js";
import { HulkHogan } from "./HulkHogan.js";

let alexSection = document.querySelector("#alex")
let footer = document.querySelector("footer")

const alexShuffle = () => {
    alexSection.innerHTML = alexFunction()
}

const footerShuffle = () => {
    footer.innerHTML = goldenrod()
}

alexShuffle()
let text = setInterval(alexShuffle, 333)

footerShuffle()
let footermove = setInterval(footerShuffle, 111)

HulkHogan();
