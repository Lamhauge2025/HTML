const inputField = document.getElementById('input-box')
const addButton = document.getElementById('add-btn')
const listContainer=document.getElementById('list')
const colorBox=document.getElementById('color-change-box')
const removeBox=document.getElementById('remover')
const removeButton=document.getElementById('remove-btn')
const textbox= document.getElementById('upg4')


addButton.addEventListener('click',()=>{
    let inputText=inputField.value.trim();
    
    if (inputText===""){
        alert("I said enter something")
        return
    }
    const li=document.createElement('li');
    li.textContent=inputText;
    listContainer.appendChild(li);
    inputField.value=""

})
removeButton.addEventListener('click', ()=>{
    removeBox.remove()
    removeButton.remove()
})
colorBox.addEventListener('mouseover', ()=>{
    colorBox.style.backgroundColor="pink"
})
colorBox.addEventListener('mouseout', ()=>{
    colorBox.style.backgroundColor=""
})
textbox.addEventListener('focus',()=>{
    textbox.style.borderColor="blue"
    textbox.style.outline="none"
})
textbox.addEventListener('blur',()=>{
    textbox.style.borderColor="black"
        textbox.style.outline="none"
})
