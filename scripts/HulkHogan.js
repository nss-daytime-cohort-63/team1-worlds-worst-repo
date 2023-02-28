const section = document.querySelector("#jason");

let html = `<div id="DivHulkHogan">
                <img id="HulkHogan--img" src="styles/assets/hulkhogan.png">
            </div>
`;

const brother = new Audio("styles/assets/hulkhogan.mp3")

document.addEventListener("click", clickEvent =>{
    const clickTarget = clickEvent.target;
    if(clickTarget.id.startsWith("HulkHogan")){
        brother.play();
    }
})

export const HulkHogan = () => {
    section.innerHTML = html;
}