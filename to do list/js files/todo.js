function addTodo() {
    var inputtxt = document.getElementById('inputTodo').value;
    var li = document.createElement('li');
    var checkBox = document.createElement('INPUT');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.setAttribute('id','checked');
    // var del= document.createElement('button');
    // var x=document.createTextNode('X');
    // del.appendChild(x)
    // del.addEventListener('click',deleteItem)

    var txt = document.createTextNode(inputtxt);
    li.appendChild(checkBox)
    li.appendChild(txt);
    //li.appendChild(del);
    if (inputtxt == '') {
        alert('Please Enter Someting in Input Box!')
    } else {
        document.getElementById('ul').appendChild(li);
        document.getElementById('inputTodo').value = '';
    }
}



function deleteItem() {
    if(document.getElementById('checked').checked = true){
        var elem= document.getElementById('ul');
        elem.removeChild()
    }
}