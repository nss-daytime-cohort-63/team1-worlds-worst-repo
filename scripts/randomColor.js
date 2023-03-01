
const randomColorMaker = () => {
  return  Math.floor(Math.random() * 16777215).toString(16);
};


export let alexFunction = () => {


  const randomFontChooser = () =>{
    const fonts = ["Helvetica",
    "Arial",
    "Arial Black",
    "Verdana",
    "Tahoma",
    "Trebuchet MS",
    "Impact",
    "Gill Sans",
    "Times New Roman",
    "Georgia",
    "Palatino",
    "Baskerville",
    "Andalé Mono",
    "Courier",
    "Lucida",
    "Monaco",
    "Bradley Hand",
    "Brush Script MT",
    "Luminari",
    "Comic Sans MS"]
    return fonts[ Math.floor(Math.random() * 20)]
  }

  let beeMovie = `According to all known laws of aviation, there is no way a bee should be able to fly.
Its wings are too small to get its fat little body off the ground.
The bee, of course, flies anyway because bees don't care what humans think is impossible.`;

  const myArray = beeMovie.split("");

  let htmlString = ``;

  for (let character of myArray) {
    let color = randomColorMaker();
    let font = randomFontChooser();
    let fontColor = randomColorMaker();
    htmlString += `<span id="${color}" style="background-color:#${color}; font-family:'${font}'; color:#${fontColor}">${character}</span>`;
  }

  return htmlString

};

export const goldenrod = () => {
  let color = randomColorMaker();
  let htmlString = `<span id="${color}" style="background-color:#${color}">This site is as good a site as goldenrod a color.</span>`
  return htmlString
}