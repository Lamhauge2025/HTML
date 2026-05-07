function showMessage() {
     let name=prompt("Tell me your name: ") 
     let message= "Hello "+ name+"!" 
     alert(message);
    }
function bro() {
    return document.getElementById("test").textContent= "Bro"
}
function bro2() {
    return document.getElementById("div-p").textContent= "Bro"
}
function redBro(){
    return document.getElementById("div").style.background= "Red"
}
const span=document.getElementById("span");
function append(){
    span.append("Appended text ")
}
function calculate(){
    let nr1=parseFloat(document.getElementById("nr1").value);
    let nr2=parseFloat(document.getElementById("nr2").value);
    return document.getElementById("result").textContent=(nr1+nr2);
}
function evenOrOdd(){
    let testnr=parseInt(document.getElementById("testnr").value)
    if (testnr%2===0)
        return document.getElementById("result2").textContent="even"
    else
        return document.getElementById("result2").textContent="odd"
}
function resetAll(){
    return document.getElementById("result2").textContent=""
}