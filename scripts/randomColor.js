
export let alexFunction = () => {
  const randomColorMaker = () => {
    return  Math.floor(Math.random() * 16777215).toString(16);
  };

  let beeMovie = `According to all known laws of aviation, there is no way a bee should be able to fly.
Its wings are too small to get its fat little body off the ground.
The bee, of course, flies anyway because bees don't care what humans think is impossible.`;

  const myArray = beeMovie.split("");

  let htmlString = ``;

  for (let character of myArray) {
    let color = randomColorMaker();
    htmlString += `<span id="${color}" style="background-color:#${color}">${character}</span>`;
  }

  return htmlString

};
