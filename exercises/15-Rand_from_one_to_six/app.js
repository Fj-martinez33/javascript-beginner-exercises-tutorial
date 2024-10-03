function getRandomInt(min, max)
{
	let randomNumber = Math.random() * max + min 
	return Math.floor(randomNumber);
}
console.log(getRandomInt(1,6));