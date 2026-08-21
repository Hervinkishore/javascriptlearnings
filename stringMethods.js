let fullname="hervin kishore"
// document.getElementById("firstname").textContent="Firstname: "+fullname.slice(0,fullname.indexOf(" "))
// document.getElementById("lastname").textContent="Lastname: "+fullname.slice(fullname.indexOf(" ")+1)

// document.getElementById("firstname").textContent="Firstname : "+fullname.slice(-1)
// document.getElementById("firstname").textContent="Firstname : "+fullname.length
// document.getElementById("firstname").textContent="Firstname : "+fullname.padStart(25,"ooooooooo00")
document.getElementById("firstname").textContent="Firstname : "+fullname.charAt(0).toUpperCase()+fullname.slice(1)