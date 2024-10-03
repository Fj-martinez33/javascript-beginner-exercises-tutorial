// Your code here:
let bottleOfMilk = 99;

while (bottleOfMilk >= 0){

    if (bottleOfMilk > 1){
        console.log("%i bottles of milk on the wall, %i bottles of milk. Take one down and pass it around, %i bottles of milk on the wall.", bottleOfMilk, bottleOfMilk, bottleOfMilk - 1);
    }

    if (bottleOfMilk === 1){
        console.log("%i bottles of milk on the wall, %i bottles of milk. Take one down and pass it around, no more bottles of milk on the wall.", bottleOfMilk);
    }

    if (bottleOfMilk === 0){
        console.log("No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.");
    }

    bottleOfMilk --;
}