//fix this function:
function startCounting() {
	let counter = 100;
	while (counter > 0) {
		counter--;
		if (counter === 0){
			console.log(counter);
		}
	}

	return counter;
}

startCounting();