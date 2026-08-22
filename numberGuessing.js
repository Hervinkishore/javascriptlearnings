let min=50
let max=100
let num=Math.floor(Math.random()*(max-min+1))+min
console.log(num);
let running =true
let attempts=0
let guess;
while(running){
    guess=Number(window.prompt(`Guess a number between ${min} and ${max}`));
    if(guess>num){
        window.alert("ur guess is too high");
        attempts++;
    }
    else if(guess<num){
        window.alert("ur guess is too small");
        attempts++;
    }
    else{
        window.alert(`Your guess is correct u've found it in ${attempts}attempts`);
        running=false;
    }
}