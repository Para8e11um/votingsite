const input = document.querySelector("input");
mainnom = document.getElementById('mainnominations')
function setBackgroundSize(input) {
    www = mainnom.offsetWidth
    console.log(www)
    console.log(getBackgroundSize(input))
  mainnom.style.transform = `translateX(${-1*(www*getBackgroundSize(input)*((www-window.innerWidth)/www))}px)`;
}

setBackgroundSize(input);

input.addEventListener("input", () => setBackgroundSize(input));

function getBackgroundSize(input) {
  const min = +input.min || 0;
  const max = +input.max || 100;
  const value = +input.value;

  const inputWidth = input.offsetWidth;
  //let size = (value - min) / (max - min) * 100;
	var increaseValue, newMax;
	if(inputWidth <= max)
  {
  	increaseValue = 15;
    newMax = max + 75;
  }
  else
  {
  	increaseValue = 25;
    newMax = max + 50;
  }
  let size = value/1000;

  return size;
}