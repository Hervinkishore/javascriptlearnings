document.getElementById("gen").onclick=function passGenerator(){
    const length=document.getElementById("length").value;
    const inclowercase=document.getElementById("addLowerCase").checked;
    const incuppercase=document.getElementById("addUpperCase").checked;
    const incnums=document.getElementById("addnums").checked;
    const incsymbols=document.getElementById("addsymbols").checked;

// -------------------------------------------------------------------
    const lowercase="abcdefghijklmnopqrstuvwxyz";
    const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums="1234567890";
    const symbols="!@#$%^&*()_-+=";
    
    let elligiblechars="";
    let pass="";
    if(inclowercase) elligiblechars+=lowercase;
    if(incuppercase) elligiblechars+=uppercase;
    if(incnums) elligiblechars+=nums;
    if(incsymbols) elligiblechars+=symbols;
    if (elligiblechars.length==0 || length<4){
        document.getElementById("display").style.color="red";
        document.getElementById("display").textContent="Please check for the checkbox and the length or ur password"
        return;
    }
    for(let len=0;len<length;len++){
        pass+=elligiblechars.charAt(Math.floor(Math.random()*elligiblechars.length))
    }
    document.getElementById("display").style.color="black";
    document.getElementById("display").textContent=`Your password:  ${pass}`;
    
    console.log(pass);  
}

