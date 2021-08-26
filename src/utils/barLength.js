
const oneBarLength = (value, spanClass) => {
    console.log(value, spanClass);
    document.querySelector(spanClass).style.setProperty("width", `${(value / 255)* 100}%`)
  }

const barLengths = (pokemonStatsArray) => {
    pokemonStatsArray.forEach((element, index) => {
        console.log(element); 
        console.log(element.base_stat); 
        console.log(index); 
        let statsBarX = ".stats-bar--" + (index + 1)
        console.log(statsBarX);
        oneBarLength(element.base_stat, statsBarX)
    });
}
export default barLengths

//No se como ejecutar esto luego de crear el DOM