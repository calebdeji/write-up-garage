window.addEventListener("load", () => {
  generate();
});
let buttonClicked = document.getElementById("generate");
buttonClicked.addEventListener("click", () => {
  generate();
});
const generate = () => {
  let arrayContainer = []; // this arrays holds the five random numbers generated;
  let displayContainer = document.getElementById("array");
  const genNum = Math.floor(Math.random() * 10);
  arrayContainer.push(genNum);
  console.time();
  for (let counter = 0; counter < 9; counter++) {
    //the counter is less than five because we already initialise arrayContainer[0] with genNum
    let newGen = Math.floor(Math.random() * 10);
    while (arrayContainer.lastIndexOf(newGen) !== -1) {
      newGen = Math.floor(Math.random() * 10);
    }
    arrayContainer.push(newGen);
  }
  console.timeEnd();
  console.log(arrayContainer);
  displayContainer.innerHTML = "[" + arrayContainer + "]";
};
///
let url = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
let request = new XMLHttpRequest();
request.open("GET",request);
request.responseType = "json";
request.send();
request.addEventListener("load",()=>{
  const data = request.response;
  console.log("data : data");
})
