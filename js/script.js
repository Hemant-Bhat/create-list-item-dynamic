
function addItem(){
    let list = document.querySelector('#items');
    let newLi = document.createElement('li'); 
    // newLi.textContent = document.querySelector('#getValue').value;
    let getValue = document.querySelector('#getValue').value;
    if (getValue == "") {
        document.getElementById('getValue').style.borderColor = "red";
    } else {
        let assignValue = document.createTextNode(getValue);
        // list.appendChild(assignValue);
        newLi.appendChild(assignValue);
        list.appendChild(newLi);
        document.querySelector('#getValue').value = "";
    }
    
}