function strtGenerate(){
    const count=document.getElementById("inp");
    const contianer=document.getElementById("container");
    const diceResult=document.getElementById("diceResult");
    const values=[];
    const images=[];
    for(i=0;i<count.value;i++){
        let value=Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="dices/${value}.png" alt="img not found">`);
    }
    diceResult.textContent=values.join(", ");
    contianer.innerHTML=images.join(" ");
}